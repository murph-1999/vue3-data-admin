/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-24 14:17:29
 * @LastEditTime: 2022-08-30 20:38:14
 */
import packageJSON from '../../package.json'
import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  SetupContext,
  EmitsOptions,
  PropType as VuePropType
} from 'vue'

declare global {
  const __APP_INFO__: {
    pkg: typeof packageJSON;
    lastBuildTime: string;
  }
  // declare interface Window {
  //   // Global vue app instance
  //   __APP__: App<Element>;
  // }
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
  // vue
   type PropType<T> = VuePropType<T>;
   type VueNode = VNodeChild | JSX.Element;

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };
  type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
  };
   type Nullable<T> = T | null;
   type NonNullable<T> = T extends null | undefined ? never : T;
   type Recordable<T = any> = Record<string, T>;
   type Key = string | number;
   type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
   type Indexable<T = any> = {
    [key: string]: T;
  };
   type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

   type TimeoutHandle = ReturnType<typeof setTimeout>;
   type IntervalHandle = ReturnType<typeof setInterval>;

   interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

   interface WheelEvent {
    path?: EventTarget[];
  }
   function parseInt(s: string | number, radix?: number): number;

   function parseFloat(string: string | number): number;

   type EmitFn<E = EmitsOptions> = SetupContext<E>['emit'];

}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
