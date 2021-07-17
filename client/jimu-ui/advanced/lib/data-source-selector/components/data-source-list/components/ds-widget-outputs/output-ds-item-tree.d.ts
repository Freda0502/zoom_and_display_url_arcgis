/// <reference types="react" />
import { DataSource, React, ImmutableArray, IntlShape, UseDataSource, IMWidgetJson, IMDataSourceJson } from 'jimu-core';
interface State {
    isNodeSelectable: (nodeJson: IMDataSourceJson | IMWidgetJson) => boolean;
}
interface Props {
    widgetJson: IMWidgetJson;
    /**
     * All to [to-use data sources](../ds-add-data.tsx)., including child data sources and parent data sources.
     */
    allToUseDss: DataSource[];
    /**
     * All to use root data sources (see [to-use data sources](../ds-add-data.tsx) for more detail), which doesn't have parent data source,
     * including -
     * 1. the root data source is to use data source, or,
     * 2. the roor data source contains descendant data source which is to use data source.
     */
    allToUseRootDss: DataSource[];
    intl: IntlShape;
    widgetId?: string;
    isMultiple?: boolean;
    useDataSources?: ImmutableArray<UseDataSource>;
    onChange?: (useDataSources: UseDataSource[]) => void;
    disableSelection?: boolean;
    disableRemove?: boolean;
}
export default class OutputDsItemTree extends React.PureComponent<Props, State> {
    constructor(props: any);
    componentDidUpdate(prevProps: Props): void;
    getRootNode: (nodeJson: IMWidgetJson) => IMDataSourceJson | IMWidgetJson;
    getChildNodes: (nodeJson: IMDataSourceJson | IMWidgetJson) => IMDataSourceJson[];
    getLabel: (nodeJson: IMDataSourceJson | IMWidgetJson) => string;
    renderUnselectableNode: (label: string, widgetJson: IMWidgetJson) => JSX.Element;
    renderSelectableNode: (dsJson: IMDataSourceJson) => JSX.Element;
    render(): JSX.Element;
}
export {};
