import {
  React,
  FormattedMessage,
  css,
  jsx,
  Immutable,
  IMFieldSchema,
  UseDataSource,
  DataSourceManager,
  dataSourceUtils,
  QueriableDataSource,
  LoadableDataSource,
} from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { Switch } from 'jimu-ui'
import {
  JimuMapViewSelector,
  SettingSection,
  SettingRow,
} from 'jimu-ui/advanced/setting-components'
import { IMConfig } from '../config'
import defaultMessages from './translations/default'

import {
  DataSourceSelector,
  AllDataSourceTypes,
  FieldSelector,
} from 'jimu-ui/advanced/data-source-selector'
import { JimuMapView } from 'jimu-arcgis'
import {
  MapDataSourceImpl,
  WebMapDataSourceImpl,
} from 'jimu-arcgis/lib/data-sources'

export default function Setting(props: AllWidgetSettingProps<IMConfig>) {
  //or <{}> inside

  const onZoomToLayerPropertyChange = (
    evt: React.FormEvent<HTMLInputElement>
  ) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('zoomToLayer', evt.currentTarget.checked),
    })
  }

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    })
  }
  const onFieldChange = (allSelectedFields: IMFieldSchema[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: [
        {
          ...props.useDataSources[0],
          ...{ fields: allSelectedFields.map((f) => f.jimuName) },
        },
      ],
    })
  }

  const onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    props.onSettingChange({
      id: props.id,
      useDataSourcesEnabled,
    })
  }

  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources,
    })
  }

  //for adding the list of urls to the widget----------------------------------------------------------
  // need to:

  console.log('props:', props)
  // const printLayers = (jmv: JimuMapView): void => {
  //   if (!jmv) return
  //   const layers = (jmv.view.map.layers as any)?.items
  //   let array = []
  //   layers.forEach((layer) => {
  //     if (layer && layer.timeInfo) {
  //       const layerUrl = dataSourceUtils.getUrlByLayer(layer)
  //       array.push(layerUrl)
  //       console.log(layerUrl)
  //     }
  //   })
  // }

  //https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0
  //-------------------------------------------------------------------------------------

  const style = css`
    .widget-setting-addLayers {
      .checkbox-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
      }
    }
  `
  // const [list, setList] = React.useState([])
  var layers = []

  if (
    props.useDataSources != undefined &&
    props.useDataSources[0] != undefined
  ) {
    console.log('data source 0:', props.useDataSources[0])
    console.log(
      'props.useDataSources[0].fields is:',
      props.useDataSources[0].fields
    )
    const id = props.useDataSources[0].mainDataSourceId

    const dsManager = DataSourceManager.getInstance()
    const mapDataSource = dsManager.getDataSource(id) as WebMapDataSourceImpl
    console.log('mapDataSource', mapDataSource)

    if (mapDataSource && mapDataSource.isDataSourceSet) {
      //check Whether a data source contains child data sources
      const dataSourceChildren = mapDataSource.getChildDataSources()
      console.log('the child data source---->', dataSourceChildren)
      // var layers: any[]
      console.log('empty list', layers)
      for (var i = 0; i < dataSourceChildren.length; i++) {
        const id = (dataSourceChildren[i] as QueriableDataSource).getJimuChildId
        //get url from
        mapDataSource.getDataSourceByLayer(id)

        //push code to github
        //download version 1.4
        //navigate to client and server
        //run npm ci to install
        //copy and paste add-layers folder to new project

        layers.push(url)
      }
    } else {
      const message =
        'Datasource does not contain child data sources. No layers to add'
      layers.push(message)
      layers.map((item) => <li key={item.id}>{item.name}</li>)

      console.log(message)
    }
  } else {
    const message = 'This is an undefined datasource'
    layers.push(message)
    console.log(message)
  }
  console.log('layers:', layers)
  //then export layers variable to widget to load

  return (
    <div css={style}>
      <div className='widget-setting-addLayers'>
        <SettingSection
          className='map-selector-section'
          title={props.intl.formatMessage({
            id: 'mapWidgetLabel',
            defaultMessage: defaultMessages.selectMapWidget,
          })}
        >
          <SettingRow>
            <JimuMapViewSelector
              onSelect={onMapWidgetSelected}
              useMapWidgetIds={props.useMapWidgetIds}
            />
          </SettingRow>
        </SettingSection>

        <SettingSection
          title={props.intl.formatMessage({
            id: 'settingsLabel',
            defaultMessage: defaultMessages.settings,
          })}
        >
          <SettingRow>
            <div className='w-100 addLayers'>
              <div className='checkbox-row'>
                <label>
                  <FormattedMessage
                    id='zoomToLayer'
                    defaultMessage={defaultMessages.zoomToLayer}
                  />
                </label>
                <Switch
                  checked={(props.config && props.config.zoomToLayer) || false}
                  onChange={onZoomToLayerPropertyChange}
                />
              </div>
            </div>
          </SettingRow>
        </SettingSection>

        {/* datasource selector */}
        <div className='use-feature-layer-setting p-2'>
          <DataSourceSelector
            types={Immutable([AllDataSourceTypes.WebMap])}
            useDataSources={props.useDataSources}
            useDataSourcesEnabled={props.useDataSourcesEnabled}
            onToggleUseDataEnabled={onToggleUseDataEnabled}
            onChange={onDataSourceChange}
            widgetId={props.id}
          />
        </div>
      </div>
    </div>
  )
}
