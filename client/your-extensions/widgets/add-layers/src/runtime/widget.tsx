import { React, AllWidgetProps, styled } from 'jimu-core'
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  JimuMapView,
} from 'jimu-arcgis'

import { useState, useEffect } from 'react'
import defaultMessages from './translations/default'
// import { layersList } from '../setting/setting'
import Setting from '../setting/setting'

// AllWidgetProps<IMConfig>
export default function (props: any) {
  const [jimuMapView, setJimuMapView] = useState<any>(null)
  const [featureServiceUrlInput, setFeatureServiceUrlInput] = useState<string>(
    ''
  )
  const lst = [1, 2, 3]
  console.log('props for function in widget', props)
  const [htmlElement, listToDisplay] = Setting(props)
  console.log('layersList imported', listToDisplay)
  console.log('type', typeof listToDisplay)
  console.log('type of list', typeof lst)
  console.log('1st in listToDisplay', listToDisplay[0])
  console.log('2nd in listToDisplay', listToDisplay[1])

  const handleFeatureServiceUrlInputChange = (event) => {
    setFeatureServiceUrlInput(event.target.value)
  }

  const formSubmit = (evt) => {
    evt.preventDefault()

    // Error cases
    if (!jimuMapView) {
      // Data Source was not configured - we cannot do anything.
      console.error('Please configure a Data Source with the widget.')
      return
    }

    if (featureServiceUrlInput == '') {
      // Nothing was typed into the box!
      alert('Please copy/paste in a FeatureService URL')
      return
    }

    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/tasks/support/Query',
      'esri/geometry/SpatialReference',
    ]).then((modules) => {
      const [FeatureLayer, Query, SpatialReference] = modules

      // First create the Feature Layer from the URL that is in the box.
      const layer = new FeatureLayer({
        url: featureServiceUrlInput,
      })

      // Add the layer to the map (accessed through the Experience Builder Data Source)
      jimuMapView.view.map.add(layer)

      // After the layer is created, zoom to the layer's extent, if the setting is set for that.
      layer.on('layerview-create', (event) => {
        if (
          props.config.hasOwnProperty('zoomToLayer') &&
          props.config.zoomToLayer === true
        ) {
          console.log('the block is executed')
          const query: __esri.Query = new Query()

          query.where = '1=1'

          query.outSpatialReference = new SpatialReference({
            wkid: 102100,
          })
          console.log('before')
          layer.queryExtent(query).then((results) => {
            jimuMapView.view.extent = results.extent
            console.log('after', jimuMapView.view.extent)
          })
        }

        // Process of adding the layer is complete - remove the layer URL from the box so we can add another
        setFeatureServiceUrlInput('')
      })

      const layers = (jimuMapView.view.map.layers as any)?.items
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
        {/* css={style} */}
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
        {/* <p>{listToDisplay[0]}</p>
        <p>{listToDisplay[1]}</p> */}
        <p>{listItems}</p>
      </div>
    </StyleDiv>
  )
}
