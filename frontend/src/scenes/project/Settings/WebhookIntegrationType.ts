// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface logicType<UserType> extends Logic {
    actionCreators: {
        setEditedWebhook: (
            webhook: string
        ) => {
            type: 'set edited webhook (scenes.project.Settings.WebhookIntegration)'
            payload: {
                webhook: string
            }
        }
        saveWebhook: (
            webhook: string
        ) => {
            type: 'save webhook (scenes.project.Settings.WebhookIntegration)'
            payload: {
                webhook: string
            }
        }
        testThenSaveWebhook: () => {
            type: 'test then save webhook (scenes.project.Settings.WebhookIntegration)'
            payload: {
                value: boolean
            }
        }
        handleTestError: (
            error: string
        ) => {
            type: 'handle test error (scenes.project.Settings.WebhookIntegration)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set edited webhook (scenes.project.Settings.WebhookIntegration)': 'setEditedWebhook'
        'save webhook (scenes.project.Settings.WebhookIntegration)': 'saveWebhook'
        'test then save webhook (scenes.project.Settings.WebhookIntegration)': 'testThenSaveWebhook'
        'handle test error (scenes.project.Settings.WebhookIntegration)': 'handleTestError'
    }
    actionTypes: {
        setEditedWebhook: 'set edited webhook (scenes.project.Settings.WebhookIntegration)'
        saveWebhook: 'save webhook (scenes.project.Settings.WebhookIntegration)'
        testThenSaveWebhook: 'test then save webhook (scenes.project.Settings.WebhookIntegration)'
        handleTestError: 'handle test error (scenes.project.Settings.WebhookIntegration)'
    }
    actions: {
        setEditedWebhook: (webhook: string) => void
        saveWebhook: (webhook: string) => void
        testThenSaveWebhook: () => void
        handleTestError: (error: string) => void
    }
    constants: {}
    defaults: {
        editedWebhook: string
        isSaving: boolean
    }
    events: {}
    key: undefined
    listeners: {
        testThenSaveWebhook: ((
            action: {
                type: 'test then save webhook (scenes.project.Settings.WebhookIntegration)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveWebhook: ((
            action: {
                type: 'save webhook (scenes.project.Settings.WebhookIntegration)'
                payload: {
                    webhook: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleTestError: ((
            action: {
                type: 'handle test error (scenes.project.Settings.WebhookIntegration)'
                payload: {
                    error: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        'user update success (scenes.userLogic)': ((
            action: {
                type: 'user update success (scenes.userLogic)'
                payload: {
                    user: UserType
                    updateKey: string | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'project', 'Settings', 'WebhookIntegration']
    pathString: 'scenes.project.Settings.WebhookIntegration'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        editedWebhook: string
        isSaving: boolean
    }
    reducerOptions: {}
    reducers: {
        editedWebhook: (state: string, action: any, fullState: any) => string
        isSaving: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        editedWebhook: string
        isSaving: boolean
    }
    selectors: {
        editedWebhook: (state: any, props?: any) => string
        isSaving: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        editedWebhook: string
        isSaving: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalReducerActions: {
        'user update success (scenes.userLogic)': (
            user: UserType,
            updateKey?: string
        ) => {
            type: 'user update success (scenes.userLogic)'
            payload: {
                user: UserType
                updateKey: string | undefined
            }
        }
        'user update failure (scenes.userLogic)': (
            error: string,
            updateKey?: string
        ) => {
            type: 'user update failure (scenes.userLogic)'
            payload: {
                updateKey: string | undefined
                error: string
            }
        }
    }
}
