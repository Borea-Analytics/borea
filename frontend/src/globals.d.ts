import posthog from 'posthog-js'

declare global {
    interface Window {
        JS_BOREA_HOST?: str
        JS_BOREA_HOST?: str
        posthog?: posthog
    }
}
