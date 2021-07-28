import { React, styled, AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  JimuMapView,
} from 'jimu-arcgis'

import { useState } from 'react'
import defaultMessages from './translations/default'

export default function Widget(props: AllWidgetProps<IMConfig>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [featureServiceUrlInput, setFeatureServiceUrlInput] = useState('')
  const listToDisplay = props.config.layersList
  console.log('listToDisplay', listToDisplay)
  // console.log('listToDisplay', listToDisplay)

  // const [htmlElement, listToDisplay] = Setting(props)
  // console.log('props,layerslst', props.layersLst) //returns undefined

  // const handleFeatureServiceUrlInputChange = (event) => {
  //   setFeatureServiceUrlInput(event.target.value)
  // }

  //change this: rename, change to always zoom.
  const zoom = (layerUrl: string) => {
    if (!jimuMapView) {
      console.error('Please configure a Data Source with the widget.')
      return
    }

    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/tasks/support/Query',
      'esri/geometry/SpatialReference',
    ]).then((modules) => {
      const [FeatureLayer, Query, SpatialReference] = modules
      const layer = new FeatureLayer({
        url: layerUrl,
      })

      jimuMapView.view.map.add(layer)

      layer.on('layerview-create', (event) => {
        //let always be true
        // if (
        //   props.config.hasOwnProperty('zoomToLayer') &&
        //   props.config.zoomToLayer === true
        // )
        const query: __esri.Query = new Query()
        query.where = '1=1'
        query.outSpatialReference = new SpatialReference({
          wkid: 102100,
        })
        layer.queryExtent(query).then((results) => {
          jimuMapView.view.extent = results.extent
        })
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
  const listItems = listToDisplay.map((obj) => (
    <button key={obj.id} onClick={() => zoom(obj.layerUrl)}>
      {/* onclick='zoom({obj.layerUrl.toString())}' */}
      {obj.name}
    </button>
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
        {/* <form onSubmit={zoom}>
          <div> */}
        {/* don't need form and input
            <input
              type='text'
              placeholder={defaultMessages.featureServiceUrl}
              value={featureServiceUrlInput}
              onChange={handleFeatureServiceUrlInputChange}
              onClick={() => zoom((layerurl = ''))}
            /> */}

        {/* button around name of layer. onclick is formSubmit, but rename! one
            button for each layer in the array, when click on the button,
            trigger func to add layer to the map */}
        {/* <button>{defaultMessages.addLayer}</button> */}
        {/* </div> */}
        {/* </form> */}
        <div>URLs to layers in the selected datasource:</div>
        <p>{listItems}</p>
      </div>
    </StyleDiv>
  )
}
