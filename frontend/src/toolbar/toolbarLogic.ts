import { kea } from 'kea'
import { toolbarLogicType } from './toolbarLogicType'
import { EditorProps } from '~/types'
import { clearSessionToolbarToken } from '~/toolbar/utils'
import { borea } from '~/toolbar/borea'
import { actionsTabLogic } from '~/toolbar/actions/actionsTabLogic'
import { toolbarButtonLogic } from '~/toolbar/button/toolbarButtonLogic'

// input: props = all editorProps
export const toolbarLogic = kea<toolbarLogicType>({
    props: {} as EditorProps,

    actions: () => ({
        authenticate: true,
        logout: true,
        processUserIntent: true,
        clearUserIntent: true,
        showButton: true,
        hideButton: true,
    }),

    reducers: ({ props }: { props: EditorProps }) => ({
        rawApiURL: [props.apiURL as string],
        rawJsURL: [(props.jsURL || props.apiURL) as string],
        temporaryToken: [props.temporaryToken || null, { logout: () => null }],
        actionId: [props.actionId || null, { logout: () => null, clearUserIntent: () => null }],
        userIntent: [props.userIntent || null, { logout: () => null, clearUserIntent: () => null }],
        buttonVisible: [true, { showButton: () => true, hideButton: () => false, logout: () => false }],
    }),

    selectors: ({ selectors }) => ({
        apiURL: [() => [selectors.rawApiURL], (apiURL) => `${apiURL}${apiURL.endsWith('/') ? '' : '/'}`],
        jsURL: [() => [selectors.rawJsURL], (jsURL) => `${jsURL}${jsURL.endsWith('/') ? '' : '/'}`],
        isAuthenticated: [() => [selectors.temporaryToken], (temporaryToken) => !!temporaryToken],
    }),

    listeners: ({ values, props }) => ({
        authenticate: () => {
            borea.capture('toolbar authenticate', { is_authenticated: values.isAuthenticated })
            const encodedUrl = encodeURIComponent(window.location.href)
            window.location.href = `${values.apiURL}authorize_and_redirect/?redirect=${encodedUrl}`
            clearSessionToolbarToken()
        },
        logout: () => {
            borea.capture('toolbar logout')
            clearSessionToolbarToken()
        },
        processUserIntent: async () => {
            if (props.userIntent === 'add-action' || props.userIntent === 'edit-action') {
                actionsTabLogic.actions.showButtonActions()
                toolbarButtonLogic.actions.showActionsInfo()
                // the right view will next be opened in `actionsTabLogic` on `getActionsSuccess`
            }
        },
    }),

    events: ({ props, actions, values }) => ({
        async afterMount() {
            if (props.instrument) {
                borea.identify((props as EditorProps).distinctId || null, { email: props.userEmail })
                borea.optIn()
            }
            if (props.userIntent) {
                actions.processUserIntent()
            }
            borea.capture('toolbar loaded', { is_authenticated: values.isAuthenticated })
        },
    }),
})
