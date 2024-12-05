import posthog from 'posthog-js'

export function loadPostHogJS(): void {
    if (window.JS_BOREA_HOST) {
        posthog.init(window.JS_BOREA_HOST, {
            api_host: window.JS_BOREA_HOST,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            _capture_metrics: true,
            rageclick: true,
        })
        // Make sure we have access to the object in window for debugging
        window.posthog = posthog
    } else {
        posthog.init('fake token', {
            autocapture: false,
            loaded: function (ph) {
                ph.opt_out_capturing()
            },
        })
    }
}
