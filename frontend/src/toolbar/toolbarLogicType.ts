// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface toolbarLogicType extends Logic {
    actionCreators: {
        authenticate: () => {
            type: 'authenticate (toolbar.toolbarLogic)'
            payload: {
                value: boolean
            }
        }
        logout: () => {
            type: 'logout (toolbar.toolbarLogic)'
            payload: {
                value: boolean
            }
        }
        processUserIntent: () => {
            type: 'process user intent (toolbar.toolbarLogic)'
            payload: {
                value: boolean
            }
        }
        clearUserIntent: () => {
            type: 'clear user intent (toolbar.toolbarLogic)'
            payload: {
                value: boolean
            }
        }
        showButton: () => {
            type: 'show button (toolbar.toolbarLogic)'
            payload: {
                value: boolean
            }
        }
        hideButton: () => {
            type: 'hide button (toolbar.toolbarLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'authenticate (toolbar.toolbarLogic)': 'authenticate'
        'logout (toolbar.toolbarLogic)': 'logout'
        'process user intent (toolbar.toolbarLogic)': 'processUserIntent'
        'clear user intent (toolbar.toolbarLogic)': 'clearUserIntent'
        'show button (toolbar.toolbarLogic)': 'showButton'
        'hide button (toolbar.toolbarLogic)': 'hideButton'
    }
    actionTypes: {
        authenticate: 'authenticate (toolbar.toolbarLogic)'
        logout: 'logout (toolbar.toolbarLogic)'
        processUserIntent: 'process user intent (toolbar.toolbarLogic)'
        clearUserIntent: 'clear user intent (toolbar.toolbarLogic)'
        showButton: 'show button (toolbar.toolbarLogic)'
        hideButton: 'hide button (toolbar.toolbarLogic)'
    }
    actions: {
        authenticate: () => void
        logout: () => void
        processUserIntent: () => void
        clearUserIntent: () => void
        showButton: () => void
        hideButton: () => void
    }
    constants: {}
    defaults: {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: 'add-action' | 'edit-action' | null
        buttonVisible: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        authenticate: ((
            action: {
                type: 'authenticate (toolbar.toolbarLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        logout: ((
            action: {
                type: 'logout (toolbar.toolbarLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        processUserIntent: ((
            action: {
                type: 'process user intent (toolbar.toolbarLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['toolbar', 'toolbarLogic']
    pathString: 'toolbar.toolbarLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: 'add-action' | 'edit-action' | null
        buttonVisible: boolean
    }
    reducerOptions: {}
    reducers: {
        rawApiURL: (state: string, action: any, fullState: any) => string
        rawJsURL: (state: string, action: any, fullState: any) => string
        temporaryToken: (state: string | null, action: any, fullState: any) => string | null
        actionId: (state: number | null, action: any, fullState: any) => number | null
        userIntent: (
            state: 'add-action' | 'edit-action' | null,
            action: any,
            fullState: any
        ) => 'add-action' | 'edit-action' | null
        buttonVisible: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: 'add-action' | 'edit-action' | null
        buttonVisible: boolean
    }
    selectors: {
        rawApiURL: (state: any, props?: any) => string
        rawJsURL: (state: any, props?: any) => string
        temporaryToken: (state: any, props?: any) => string | null
        actionId: (state: any, props?: any) => number | null
        userIntent: (state: any, props?: any) => 'add-action' | 'edit-action' | null
        buttonVisible: (state: any, props?: any) => boolean
        apiURL: (state: any, props?: any) => string
        jsURL: (state: any, props?: any) => string
        isAuthenticated: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: 'add-action' | 'edit-action' | null
        buttonVisible: boolean
        apiURL: string
        jsURL: string
        isAuthenticated: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        apiURL: (rawApiURL: string) => string
        jsURL: (rawJsURL: string) => string
        isAuthenticated: (temporaryToken: string | null) => boolean
    }
}
