// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface featureFlagLogicType extends Logic {
    actionCreators: {
        setFunnel: (
            funnel: any,
            update: any
        ) => {
            type: 'set funnel (scenes.experimentation.featureFlagLogic)'
            payload: {
                funnel: any
                update: any
            }
        }
        loadFeatureFlags: () => {
            type: 'load feature flags (scenes.experimentation.featureFlagLogic)'
            payload: any
        }
        loadFeatureFlagsSuccess: (
            featureFlags: any[]
        ) => {
            type: 'load feature flags success (scenes.experimentation.featureFlagLogic)'
            payload: {
                featureFlags: any[]
            }
        }
        loadFeatureFlagsFailure: (
            error: string
        ) => {
            type: 'load feature flags failure (scenes.experimentation.featureFlagLogic)'
            payload: {
                error: string
            }
        }
        updateFeatureFlag: (
            featureFlag: any
        ) => {
            type: 'update feature flag (scenes.experimentation.featureFlagLogic)'
            payload: any
        }
        updateFeatureFlagSuccess: (
            featureFlags: any[]
        ) => {
            type: 'update feature flag success (scenes.experimentation.featureFlagLogic)'
            payload: {
                featureFlags: any[]
            }
        }
        updateFeatureFlagFailure: (
            error: string
        ) => {
            type: 'update feature flag failure (scenes.experimentation.featureFlagLogic)'
            payload: {
                error: string
            }
        }
        createFeatureFlag: (
            featureFlag: any
        ) => {
            type: 'create feature flag (scenes.experimentation.featureFlagLogic)'
            payload: any
        }
        createFeatureFlagSuccess: (
            featureFlags: any[]
        ) => {
            type: 'create feature flag success (scenes.experimentation.featureFlagLogic)'
            payload: {
                featureFlags: any[]
            }
        }
        createFeatureFlagFailure: (
            error: string
        ) => {
            type: 'create feature flag failure (scenes.experimentation.featureFlagLogic)'
            payload: {
                error: string
            }
        }
        deleteFeatureFlag: (
            featureFlag: any
        ) => {
            type: 'delete feature flag (scenes.experimentation.featureFlagLogic)'
            payload: any
        }
        deleteFeatureFlagSuccess: (
            featureFlags: any[]
        ) => {
            type: 'delete feature flag success (scenes.experimentation.featureFlagLogic)'
            payload: {
                featureFlags: any[]
            }
        }
        deleteFeatureFlagFailure: (
            error: string
        ) => {
            type: 'delete feature flag failure (scenes.experimentation.featureFlagLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set funnel (scenes.experimentation.featureFlagLogic)': 'setFunnel'
        'load feature flags (scenes.experimentation.featureFlagLogic)': 'loadFeatureFlags'
        'load feature flags success (scenes.experimentation.featureFlagLogic)': 'loadFeatureFlagsSuccess'
        'load feature flags failure (scenes.experimentation.featureFlagLogic)': 'loadFeatureFlagsFailure'
        'update feature flag (scenes.experimentation.featureFlagLogic)': 'updateFeatureFlag'
        'update feature flag success (scenes.experimentation.featureFlagLogic)': 'updateFeatureFlagSuccess'
        'update feature flag failure (scenes.experimentation.featureFlagLogic)': 'updateFeatureFlagFailure'
        'create feature flag (scenes.experimentation.featureFlagLogic)': 'createFeatureFlag'
        'create feature flag success (scenes.experimentation.featureFlagLogic)': 'createFeatureFlagSuccess'
        'create feature flag failure (scenes.experimentation.featureFlagLogic)': 'createFeatureFlagFailure'
        'delete feature flag (scenes.experimentation.featureFlagLogic)': 'deleteFeatureFlag'
        'delete feature flag success (scenes.experimentation.featureFlagLogic)': 'deleteFeatureFlagSuccess'
        'delete feature flag failure (scenes.experimentation.featureFlagLogic)': 'deleteFeatureFlagFailure'
    }
    actionTypes: {
        setFunnel: 'set funnel (scenes.experimentation.featureFlagLogic)'
        loadFeatureFlags: 'load feature flags (scenes.experimentation.featureFlagLogic)'
        loadFeatureFlagsSuccess: 'load feature flags success (scenes.experimentation.featureFlagLogic)'
        loadFeatureFlagsFailure: 'load feature flags failure (scenes.experimentation.featureFlagLogic)'
        updateFeatureFlag: 'update feature flag (scenes.experimentation.featureFlagLogic)'
        updateFeatureFlagSuccess: 'update feature flag success (scenes.experimentation.featureFlagLogic)'
        updateFeatureFlagFailure: 'update feature flag failure (scenes.experimentation.featureFlagLogic)'
        createFeatureFlag: 'create feature flag (scenes.experimentation.featureFlagLogic)'
        createFeatureFlagSuccess: 'create feature flag success (scenes.experimentation.featureFlagLogic)'
        createFeatureFlagFailure: 'create feature flag failure (scenes.experimentation.featureFlagLogic)'
        deleteFeatureFlag: 'delete feature flag (scenes.experimentation.featureFlagLogic)'
        deleteFeatureFlagSuccess: 'delete feature flag success (scenes.experimentation.featureFlagLogic)'
        deleteFeatureFlagFailure: 'delete feature flag failure (scenes.experimentation.featureFlagLogic)'
    }
    actions: {
        setFunnel: (funnel: any, update: any) => void
        loadFeatureFlags: () => void
        loadFeatureFlagsSuccess: (featureFlags: any[]) => void
        loadFeatureFlagsFailure: (error: string) => void
        updateFeatureFlag: (featureFlag: any) => void
        updateFeatureFlagSuccess: (featureFlags: any[]) => void
        updateFeatureFlagFailure: (error: string) => void
        createFeatureFlag: (featureFlag: any) => void
        createFeatureFlagSuccess: (featureFlags: any[]) => void
        createFeatureFlagFailure: (error: string) => void
        deleteFeatureFlag: (featureFlag: any) => void
        deleteFeatureFlagSuccess: (featureFlags: any[]) => void
        deleteFeatureFlagFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        featureFlags: any[]
        featureFlagsLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: any
    listeners: {
        updateFeatureFlagSuccess: ((
            action: {
                type: 'update feature flag success (scenes.experimentation.featureFlagLogic)'
                payload: {
                    featureFlags: any[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        createFeatureFlagSuccess: ((
            action: {
                type: 'create feature flag success (scenes.experimentation.featureFlagLogic)'
                payload: {
                    featureFlags: any[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteFeatureFlagSuccess: ((
            action: {
                type: 'delete feature flag success (scenes.experimentation.featureFlagLogic)'
                payload: {
                    featureFlags: any[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'experimentation', 'featureFlagLogic']
    pathString: 'scenes.experimentation.featureFlagLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        featureFlags: any[]
        featureFlagsLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        featureFlags: (state: any[], action: any, fullState: any) => any[]
        featureFlagsLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        featureFlags: any[]
        featureFlagsLoading: boolean
    }
    selectors: {
        featureFlags: (state: any, props?: any) => any[]
        featureFlagsLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        featureFlags: any[]
        featureFlagsLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: true
}
