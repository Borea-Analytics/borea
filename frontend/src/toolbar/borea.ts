import { browserPostHog } from 'posthog-js-lite/dist/src/targets/browser'

const apiKey = 'vMQ-rFksHELqfmbgp3qipL0JBaFph1qJzSIJx4uuKcM'
const apiHost = 'https://app.borea.dev'

export const borea = browserPostHog(apiKey, {
    apiHost: apiHost,
    optedIn: false, // must call .optIn() before any events are sent
})
