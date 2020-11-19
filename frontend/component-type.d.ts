import Vue, { ComponentOptions } from 'vue'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: any
    watchQuery?: string[]
    layout?: string | ((context: ApplicationContext) => string)
    fetch?: (context: ApplicationContext) => Promise<void>
    asyncData?: (context: ApplicationContext) => Promise<any> | undefined
    transition?: string | Transition | ((to: any, from: any) => string)
    scrollToTop?: boolean
    validate?: (context: ApplicationContext) => Promise<boolean> | boolean
    middleware?: string | string[]
  }
}
