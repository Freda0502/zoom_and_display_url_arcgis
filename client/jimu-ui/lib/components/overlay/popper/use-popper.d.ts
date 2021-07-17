import { Options as PopperOptions, VirtualElement } from '@popperjs/core';
/**
 * Simple ponyfill for Object.fromEntries
 */
export declare const fromEntries: (entries: Array<[string, any]>) => any;
export declare const usePopper: (referenceElement?: Element | VirtualElement, popperElement?: HTMLElement, options?: PopperOptions) => any;
