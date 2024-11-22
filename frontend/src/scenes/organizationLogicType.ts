// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface organizationLogicType<OrganizationType, PersonalizationData> extends Logic {
    actionCreators: {
        loadCurrentOrganization: () => {
            type: 'load current organization (scenes.organizationLogic)'
            payload: any
        }
        loadCurrentOrganizationSuccess: (
            currentOrganization: OrganizationType | null
        ) => {
            type: 'load current organization success (scenes.organizationLogic)'
            payload: {
                currentOrganization: OrganizationType | null
            }
        }
        loadCurrentOrganizationFailure: (
            error: string
        ) => {
            type: 'load current organization failure (scenes.organizationLogic)'
            payload: {
                error: string
            }
        }
        createOrganization: (
            name: string
        ) => {
            type: 'create organization (scenes.organizationLogic)'
            payload: string
        }
        createOrganizationSuccess: (
            currentOrganization: OrganizationType | null
        ) => {
            type: 'create organization success (scenes.organizationLogic)'
            payload: {
                currentOrganization: OrganizationType | null
            }
        }
        createOrganizationFailure: (
            error: string
        ) => {
            type: 'create organization failure (scenes.organizationLogic)'
            payload: {
                error: string
            }
        }
        updateOrganization: (
            payload: OrganizationUpdatePayload
        ) => {
            type: 'update organization (scenes.organizationLogic)'
            payload: OrganizationUpdatePayload
        }
        updateOrganizationSuccess: (
            currentOrganization: OrganizationType | null
        ) => {
            type: 'update organization success (scenes.organizationLogic)'
            payload: {
                currentOrganization: OrganizationType | null
            }
        }
        updateOrganizationFailure: (
            error: string
        ) => {
            type: 'update organization failure (scenes.organizationLogic)'
            payload: {
                error: string
            }
        }
        completeOnboarding: () => {
            type: 'complete onboarding (scenes.organizationLogic)'
            payload: any
        }
        completeOnboardingSuccess: (
            currentOrganization: OrganizationType | null
        ) => {
            type: 'complete onboarding success (scenes.organizationLogic)'
            payload: {
                currentOrganization: OrganizationType | null
            }
        }
        completeOnboardingFailure: (
            error: string
        ) => {
            type: 'complete onboarding failure (scenes.organizationLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'load current organization (scenes.organizationLogic)': 'loadCurrentOrganization'
        'load current organization success (scenes.organizationLogic)': 'loadCurrentOrganizationSuccess'
        'load current organization failure (scenes.organizationLogic)': 'loadCurrentOrganizationFailure'
        'create organization (scenes.organizationLogic)': 'createOrganization'
        'create organization success (scenes.organizationLogic)': 'createOrganizationSuccess'
        'create organization failure (scenes.organizationLogic)': 'createOrganizationFailure'
        'update organization (scenes.organizationLogic)': 'updateOrganization'
        'update organization success (scenes.organizationLogic)': 'updateOrganizationSuccess'
        'update organization failure (scenes.organizationLogic)': 'updateOrganizationFailure'
        'complete onboarding (scenes.organizationLogic)': 'completeOnboarding'
        'complete onboarding success (scenes.organizationLogic)': 'completeOnboardingSuccess'
        'complete onboarding failure (scenes.organizationLogic)': 'completeOnboardingFailure'
    }
    actionTypes: {
        loadCurrentOrganization: 'load current organization (scenes.organizationLogic)'
        loadCurrentOrganizationSuccess: 'load current organization success (scenes.organizationLogic)'
        loadCurrentOrganizationFailure: 'load current organization failure (scenes.organizationLogic)'
        createOrganization: 'create organization (scenes.organizationLogic)'
        createOrganizationSuccess: 'create organization success (scenes.organizationLogic)'
        createOrganizationFailure: 'create organization failure (scenes.organizationLogic)'
        updateOrganization: 'update organization (scenes.organizationLogic)'
        updateOrganizationSuccess: 'update organization success (scenes.organizationLogic)'
        updateOrganizationFailure: 'update organization failure (scenes.organizationLogic)'
        completeOnboarding: 'complete onboarding (scenes.organizationLogic)'
        completeOnboardingSuccess: 'complete onboarding success (scenes.organizationLogic)'
        completeOnboardingFailure: 'complete onboarding failure (scenes.organizationLogic)'
    }
    actions: {
        loadCurrentOrganization: () => void
        loadCurrentOrganizationSuccess: (currentOrganization: OrganizationType | null) => void
        loadCurrentOrganizationFailure: (error: string) => void
        createOrganization: (name: string) => void
        createOrganizationSuccess: (currentOrganization: OrganizationType | null) => void
        createOrganizationFailure: (error: string) => void
        updateOrganization: (payload: OrganizationUpdatePayload) => void
        updateOrganizationSuccess: (currentOrganization: OrganizationType | null) => void
        updateOrganizationFailure: (error: string) => void
        completeOnboarding: () => void
        completeOnboardingSuccess: (currentOrganization: OrganizationType | null) => void
        completeOnboardingFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        currentOrganization: OrganizationType | null
        currentOrganizationLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        createOrganizationSuccess: ((
            action: {
                type: 'create organization success (scenes.organizationLogic)'
                payload: {
                    currentOrganization: OrganizationType | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organizationLogic']
    pathString: 'scenes.organizationLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        currentOrganization: OrganizationType | null
        currentOrganizationLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        currentOrganization: (state: OrganizationType | null, action: any, fullState: any) => OrganizationType | null
        currentOrganizationLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        currentOrganization: OrganizationType | null
        currentOrganizationLoading: boolean
    }
    selectors: {
        currentOrganization: (state: any, props?: any) => OrganizationType | null
        currentOrganizationLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        currentOrganization: OrganizationType | null
        currentOrganizationLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
