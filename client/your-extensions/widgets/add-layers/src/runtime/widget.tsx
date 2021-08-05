import { React, styled, AllWidgetProps, Layer } from 'jimu-core'
import { IMConfig } from '../config'
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  JimuMapView,
} from 'jimu-arcgis'

import { useState } from 'react'

export default function Widget(props: AllWidgetProps<IMConfig>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)

  if (props.config.layersList == null) {
    return <div>no layers to display</div>
  } else {
    const listToDisplay = props.config.layersList
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

    const ButtonDiv = styled.button`
      font-size: 15px;
      padding: 12px 29px;
      width: 170px;
      text-align: center;
    `

    const listItems = listToDisplay.map((obj) => (
      <div>
        <ButtonDiv
          key={obj.id}
          onClick={() => {
            zoom(obj.layerUrl)
          }}
        >
          {obj.name}
        </ButtonDiv>
      </div>
    ))

    // On an active view change, set the extent State property
    const onActiveViewChange = (jimuMapView: JimuMapView) => {
      if (jimuMapView) {
        setJimuMapView(jimuMapView)
      }
    }

    const activeViewChangeHandler = (jmv: JimuMapView) => {
      if (jmv) {
        this.setState({
          jimuMapView: jmv,
        })
      }
    }

    return (
      <div>
        <div className='widget-addLayers jimu-widget p-2'>
          {props.hasOwnProperty('useMapWidgetIds') &&
            props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && (
              <JimuMapViewComponent
                useMapWidgetId={props.useMapWidgetIds[0]}
                onActiveViewChange={onActiveViewChange}
              />
            )}

          <div>Layers in the selected datasource:</div>
          <p>{listItems}</p>
        </div>
      </div>
    )
  }
}
