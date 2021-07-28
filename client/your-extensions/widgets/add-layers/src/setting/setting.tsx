import {
  React,
  FormattedMessage,
  Immutable,
  UseDataSource,
  DataSourceManager,
  QueriableDataSource,
  styled,
  Layer,
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
} from 'jimu-ui/advanced/data-source-selector'
import { WebMapDataSourceImpl } from 'jimu-arcgis/lib/data-sources'
import { useState } from 'react'

// var layersList = []

export default function Setting(props: AllWidgetSettingProps<IMConfig>) {
  // const [layersList, setLayersList] = useState<Array<Layer>>([])
  //test:
  // const [layersLst, setLayersLst] = useState<Array<Layer>>([])

  const onLayersListAdd = (layers: Layer[]) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('layersList', layers),
    })
  }

  // const onZoomToLayerPropertyChange = (
  //   evt: React.FormEvent<HTMLInputElement>
  // ) => {
  //   props.onSettingChange({
  //     id: props.id,
  //     config: props.config.set('zoomToLayer', evt.currentTarget.checked),
  //   })
  // }

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
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

  const StyleDiv = styled.div`
    .widget-setting-addLayers {
      .checkbox-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
      }
    }
  `

  if (props.useDataSources && props.useDataSources[0]) {
    const id = props.useDataSources[0].mainDataSourceId
    const dsManager = DataSourceManager.getInstance()
    // const what = dsManager.getDataSource(id)
    // what.name
    const mapDataSource = dsManager.getDataSource(id) as WebMapDataSourceImpl

    if (mapDataSource && mapDataSource.isDataSourceSet) {
      const dataSourceChildren = mapDataSource.getChildDataSources()
      const layersList = []
      console.log('dataSourceChildren', dataSourceChildren)
      for (var i = 0; i < dataSourceChildren.length; i++) {
        const childId = dataSourceChildren[i].id
        const startIndex = childId.indexOf('-')
        const idInput = childId.slice(startIndex + 1)

        if (idInput && mapDataSource) {
          //dup mapDataSource check ??
          const newUrl = (mapDataSource.getDataSourceByLayer(
            idInput
          ) as QueriableDataSource).url
          //executed way too many times for some reason
          console.log(
            'data source contains what properties?',
            mapDataSource.getDataSourceByLayer(idInput) as QueriableDataSource
          )
          // const newName = (mapDataSource.getDataSourceByLayer(
          //   idInput
          // ) as QueriableDataSource).name
          // const newName = mapDataSource.name
          // cosnt obj={,,}
          layersList.push({ idInput, newUrl }) //push an obj instead of url
          // use setLayersList
        }
      }
      onLayersListAdd(layersList) //3vals sep by caomma
      console.log('layersList', layersList)
    }
  }

  return (
    <StyleDiv>
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
          {/* <SettingRow>
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
                  // onChange={onZoomToLayerPropertyChange}
                />
              </div>
            </div>
          </SettingRow> */}
        </SettingSection>

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
    </StyleDiv>
  )
}

// export { layersList }
