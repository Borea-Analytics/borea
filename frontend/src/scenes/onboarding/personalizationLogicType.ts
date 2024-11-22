// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface personalizationLogicType<PersonalizationData> extends Logic {
    actionCreators: {
        setPersonalizationData: (
            payload: PersonalizationData
        ) => {
            type: 'set personalization data (scenes.onboarding.personalizationLogic)'
            payload: {
                payload: Record<string, string | string[] | null>
            }
        }
        appendPersonalizationData: (
            key: 'role' | 'products' | 'technical',
            value: string | string[] | null
        ) => {
            type: 'append personalization data (scenes.onboarding.personalizationLogic)'
            payload: {
                key: 'role' | 'products' | 'technical'
                value: string | string[] | null
            }
        }
        reportPersonalizationSkipped: () => {
            type: 'report personalization skipped (scenes.onboarding.personalizationLogic)'
            payload: {
                value: boolean
            }
        }
        reportPersonalization: (
            payload: PersonalizationData,
            step_completed_fully: boolean
        ) => {
            type: 'report personalization (scenes.onboarding.personalizationLogic)'
            payload: {
                payload: Record<string, string | string[] | null>
                step_completed_fully: boolean
            }
        }
    }
    actionKeys: {
        'set personalization data (scenes.onboarding.personalizationLogic)': 'setPersonalizationData'
        'append personalization data (scenes.onboarding.personalizationLogic)': 'appendPersonalizationData'
        'report personalization skipped (scenes.onboarding.personalizationLogic)': 'reportPersonalizationSkipped'
        'report personalization (scenes.onboarding.personalizationLogic)': 'reportPersonalization'
    }
    actionTypes: {
        setPersonalizationData: 'set personalization data (scenes.onboarding.personalizationLogic)'
        appendPersonalizationData: 'append personalization data (scenes.onboarding.personalizationLogic)'
        reportPersonalizationSkipped: 'report personalization skipped (scenes.onboarding.personalizationLogic)'
        reportPersonalization: 'report personalization (scenes.onboarding.personalizationLogic)'
    }
    actions: {
        setPersonalizationData: (payload: PersonalizationData) => void
        appendPersonalizationData: (key: 'role' | 'products' | 'technical', value: string | string[] | null) => void
        reportPersonalizationSkipped: () => void
        reportPersonalization: (payload: PersonalizationData, step_completed_fully: boolean) => void
    }
    constants: {}
    defaults: {
        personalizationData: PersonalizationData
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        reportPersonalizationSkipped: ((
            action: {
                type: 'report personalization skipped (scenes.onboarding.personalizationLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportPersonalization: ((
            action: {
                type: 'report personalization (scenes.onboarding.personalizationLogic)'
                payload: {
                    payload: Record<string, string | string[] | null>
                    step_completed_fully: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        'update organization success (scenes.organizationLogic)': ((
            action: {
                type: 'update organization success (scenes.organizationLogic)'
                payload: {
                    currentOrganization: OrganizationType | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        'load current organization success (scenes.organizationLogic)': ((
            action: {
                type: 'load current organization success (scenes.organizationLogic)'
                payload: {
                    currentOrganization: OrganizationType | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'onboarding', 'personalizationLogic']
    pathString: 'scenes.onboarding.personalizationLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        personalizationData: PersonalizationData
    }
    reducerOptions: {}
    reducers: {
        personalizationData: (state: PersonalizationData, action: any, fullState: any) => PersonalizationData
    }
    selector: (
        state: any
    ) => {
        personalizationData: PersonalizationData
    }
    selectors: {
        personalizationData: (state: any, props?: any) => PersonalizationData
    }
    sharedListeners: {}
    values: {
        personalizationData: PersonalizationData
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalReducerActions: {
        'update organization success (scenes.organizationLogic)': (
            currentOrganization: OrganizationType | null
        ) => {
            type: 'update organization success (scenes.organizationLogic)'
            payload: {
                currentOrganization: OrganizationType | null
            }
        }
        'load current organization success (scenes.organizationLogic)': (
            currentOrganization: OrganizationType | null
        ) => {
            type: 'load current organization success (scenes.organizationLogic)'
            payload: {
                currentOrganization: OrganizationType | null
            }
        }
    }
}
