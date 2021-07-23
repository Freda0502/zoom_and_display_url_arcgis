import {
  React,
  FormattedMessage,
  Immutable,
  UseDataSource,
  DataSourceManager,
  QueriableDataSource,
  styled,
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

var layersList = []

export default function Setting(props: AllWidgetSettingProps<IMConfig>) {
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

  if (
    props.useDataSources != undefined &&
    props.useDataSources[0] != undefined
  ) {
    const id = props.useDataSources[0].mainDataSourceId
    const dsManager = DataSourceManager.getInstance()
    const mapDataSource = dsManager.getDataSource(id) as WebMapDataSourceImpl

    if (mapDataSource && mapDataSource.isDataSourceSet) {
      const dataSourceChildren = mapDataSource.getChildDataSources()
      for (var i = 0; i < dataSourceChildren.length; i++) {
        const childId = dataSourceChildren[i].id
        const startIndex = childId.indexOf('-')
        const idInput = childId.slice(startIndex + 1)

        if (idInput !== undefined && mapDataSource !== undefined) {
          const newUrl = (mapDataSource.getDataSourceByLayer(
            idInput
          ) as QueriableDataSource).url
          layersList.push(newUrl)
        }
      }
    }
  }

  return [
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
    </StyleDiv>,
    layersList,
  ]
}

export { layersList }
