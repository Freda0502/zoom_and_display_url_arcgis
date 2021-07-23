import { React, styled, AllWidgetProps, IMConfig } from 'jimu-core'
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  JimuMapView,
} from 'jimu-arcgis'

import { useState } from 'react'
import defaultMessages from './translations/default'
import Setting from '../setting/setting'

export default function (props: AllWidgetProps<IMConfig>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [featureServiceUrlInput, setFeatureServiceUrlInput] = useState<string>(
    ''
  )
  const [htmlElement, listToDisplay] = Setting(props)
  const handleFeatureServiceUrlInputChange = (event) => {
    setFeatureServiceUrlInput(event.target.value)
  }

  const formSubmit = (evt) => {
    evt.preventDefault()
    if (!jimuMapView) {
      console.error('Please configure a Data Source with the widget.')
      return
    }

    if (featureServiceUrlInput == '') {
      alert('Please copy/paste in a FeatureService URL')
      return
    }

    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/tasks/support/Query',
      'esri/geometry/SpatialReference',
    ]).then((modules) => {
      const [FeatureLayer, Query, SpatialReference] = modules
      const layer = new FeatureLayer({
        url: featureServiceUrlInput,
      })

      jimuMapView.view.map.add(layer)

      layer.on('layerview-create', (event) => {
        if (
          props.config.hasOwnProperty('zoomToLayer') &&
          props.config.zoomToLayer === true
        ) {
          const query: __esri.Query = new Query()

          query.where = '1=1'

          query.outSpatialReference = new SpatialReference({
            wkid: 102100,
          })
          layer.queryExtent(query).then((results) => {
            jimuMapView.view.extent = results.extent
          })
        }

        setFeatureServiceUrlInput('')
      })
    })
  }

  const StyleDiv = styled.div`
    form > div {
      display: flex;
      justify-content: space-between;
      input {
        width: 100%;
      }
      button {
        min-width: 100px;
      }
    }
  `
  const listItems = listToDisplay.map((link) => (
    <li key={link.toString()}>{link}</li>
  ))

  return (
    <StyleDiv>
      <div className='widget-addLayers jimu-widget p-2'>
        {props.hasOwnProperty('useMapWidgetIds') &&
          props.useMapWidgetIds &&
          props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={props.useMapWidgetIds[0]}
              onActiveViewChange={(jmv: JimuMapView) => {
                if (jmv) {
                  setJimuMapView(jmv)
                }
              }}
            />
          )}
        <p>{defaultMessages.instructions}</p>
        <form onSubmit={formSubmit}>
          <div>
            <input
              type='text'
              placeholder={defaultMessages.featureServiceUrl}
              value={featureServiceUrlInput}
              onChange={handleFeatureServiceUrlInputChange}
            />
            <button>{defaultMessages.addLayer}</button>
          </div>
        </form>
        <div>URLs to layers in the selected datasource:</div>
        <p>{listItems}</p>
      </div>
    </StyleDiv>
  )
}
