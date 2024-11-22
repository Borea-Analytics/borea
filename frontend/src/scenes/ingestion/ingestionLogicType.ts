// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface ingestionLogicType<PlatformType, Framework> extends Logic {
    actionCreators: {
        userUpdateSuccess: (
            user: UserType,
            updateKey?: string
        ) => {
            type: 'user update success (scenes.ingestion.ingestionLogic)'
            payload: {
                user: UserType
                updateKey: string | undefined
            }
        }
        setPlatform: (
            platform: PlatformType
        ) => {
            type: 'set platform (scenes.ingestion.ingestionLogic)'
            payload: {
                platform: PlatformType
            }
        }
        setFramework: (
            framework: Framework
        ) => {
            type: 'set framework (scenes.ingestion.ingestionLogic)'
            payload: {
                framework: Framework
            }
        }
        setVerify: (
            verify: boolean
        ) => {
            type: 'set verify (scenes.ingestion.ingestionLogic)'
            payload: {
                verify: boolean
            }
        }
        setState: (
            platform: PlatformType,
            framework: string | null,
            verify: boolean
        ) => {
            type: 'set state (scenes.ingestion.ingestionLogic)'
            payload: {
                platform: PlatformType
                framework: string | null
                verify: boolean
            }
        }
        completeOnboarding: () => {
            type: 'complete onboarding (scenes.ingestion.ingestionLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'user update success (scenes.ingestion.ingestionLogic)': 'userUpdateSuccess'
        'set platform (scenes.ingestion.ingestionLogic)': 'setPlatform'
        'set framework (scenes.ingestion.ingestionLogic)': 'setFramework'
        'set verify (scenes.ingestion.ingestionLogic)': 'setVerify'
        'set state (scenes.ingestion.ingestionLogic)': 'setState'
        'complete onboarding (scenes.ingestion.ingestionLogic)': 'completeOnboarding'
    }
    actionTypes: {
        userUpdateSuccess: 'user update success (scenes.ingestion.ingestionLogic)'
        setPlatform: 'set platform (scenes.ingestion.ingestionLogic)'
        setFramework: 'set framework (scenes.ingestion.ingestionLogic)'
        setVerify: 'set verify (scenes.ingestion.ingestionLogic)'
        setState: 'set state (scenes.ingestion.ingestionLogic)'
        completeOnboarding: 'complete onboarding (scenes.ingestion.ingestionLogic)'
    }
    actions: {
        userUpdateSuccess: (user: UserType, updateKey?: string) => void
        setPlatform: (platform: PlatformType) => void
        setFramework: (framework: Framework) => void
        setVerify: (verify: boolean) => void
        setState: (platform: PlatformType, framework: string | null, verify: boolean) => void
        completeOnboarding: () => void
    }
    constants: {}
    defaults: {
        platform: null | PlatformType
        framework: null | Framework
        verify: boolean
    }
    events: {}
    key: undefined
    listeners: {
        completeOnboarding: ((
            action: {
                type: 'complete onboarding (scenes.ingestion.ingestionLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        userUpdateSuccess: ((
            action: {
                type: 'user update success (scenes.ingestion.ingestionLogic)'
                payload: {
                    user: UserType
                    updateKey: string | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'ingestion', 'ingestionLogic']
    pathString: 'scenes.ingestion.ingestionLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        platform: null | PlatformType
        framework: null | Framework
        verify: boolean
    }
    reducerOptions: {}
    reducers: {
        platform: (state: null | PlatformType, action: any, fullState: any) => null | PlatformType
        framework: (state: null | Framework, action: any, fullState: any) => null | Framework
        verify: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        platform: null | PlatformType
        framework: null | Framework
        verify: boolean
    }
    selectors: {
        platform: (state: any, props?: any) => null | PlatformType
        framework: (state: any, props?: any) => null | Framework
        verify: (state: any, props?: any) => boolean
        index: (state: any, props?: any) => number
        totalSteps: (state: any, props?: any) => number
    }
    sharedListeners: {}
    values: {
        platform: null | PlatformType
        framework: null | Framework
        verify: boolean
        index: number
        totalSteps: number
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        index: (platform: PlatformType, framework: Framework, verify: boolean) => number
        totalSteps: (platform: PlatformType, framework: Framework, verify: boolean) => number
    }
}
