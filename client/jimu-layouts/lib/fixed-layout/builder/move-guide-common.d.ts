export declare const SNAP_TOLERANCE = 5;
export interface Rect {
    left: number;
    right: number;
    width: number;
    top: number;
    bottom: number;
    height: number;
}
export interface RndDelta {
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface SnapResult {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}
export interface Gridline {
    value: string;
    pixelValue: number;
    usePercentage: boolean;
    origin?: number;
    from?: number;
    to?: number;
}
export interface BBoxGridline {
    id: string;
    left?: Gridline;
    xm?: Gridline;
    right?: Gridline;
    top?: Gridline;
    ym?: Gridline;
    bottom?: Gridline;
    rect: Partial<ClientRect>;
}
export interface BBoxGridlineNode {
    value: BBoxGridline;
    next?: BBoxGridlineNode;
}
export declare function formatNumber(num: number): [string, string];
/**
 * AR -%10
 * TR -%10
 * HE -10%
 */
export declare function formatPercentageNumber(percentage: string): string;
export declare function formatPixelNumber(pixel: string): string;
