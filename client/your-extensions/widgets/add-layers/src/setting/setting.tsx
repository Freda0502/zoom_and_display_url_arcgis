import {
  React,
  Immutable,
  UseDataSource,
  DataSourceManager,
  QueriableDataSource,
  styled,
  Layer,
  FeatureLayerDataSource,
} from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
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
import { useState, useEffect } from 'react'

export default function Setting(props: AllWidgetSettingProps<IMConfig>) {
  const onLayersListAdd = (layers: Layer[]) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('layersList', layers),
    })
  }

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
  function getLayers() {
    const id = props.useDataSources[0].mainDataSourceId
    const dsManager = DataSourceManager.getInstance()
    const mapDataSource = dsManager.getDataSource(id) as WebMapDataSourceImpl

    if (mapDataSource && mapDataSource.isDataSourceSet) {
      const dataSourceChildren = mapDataSource.getChildDataSources()
      const layersList = []
      for (var i = 0; i < dataSourceChildren.length; i++) {
        const childId = dataSourceChildren[i].id
        const startIndex = childId.indexOf('-')
        const idInput = childId.slice(startIndex + 1)

        if (idInput) {
          const layerUrl = (mapDataSource.getDataSourceByLayer(
            idInput
          ) as QueriableDataSource).url
          const name = (mapDataSource.getDataSourceByLayer(
            idInput
          ) as FeatureLayerDataSource).getLayerDefinition().name
          layersList.push({ idInput, layerUrl, name })
        }
      }
      onLayersListAdd(layersList)
      return layersList
    }
  }

  useEffect(() => {
    var objLst: Layer[] = []
    if (props.useDataSources && props.useDataSources[0]) {
      objLst = getLayers()
    }
    return () => {
      objLst
    }
  }, [props.useDataSources])

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
        ></SettingSection>

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
