// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface userLogicType<UserType, EventProperty, UserUpdateType> extends Logic {
    actionCreators: {
        loadUser: (
            resetOnFailure?: boolean
        ) => {
            type: 'load user (scenes.userLogic)'
            payload: {
                resetOnFailure: boolean | undefined
            }
        }
        setUser: (
            user: UserType | null,
            updateKey?: string
        ) => {
            type: 'set user (scenes.userLogic)'
            payload: {
                user: UserType | null
                updateKey: string | undefined
            }
        }
        userUpdateRequest: (
            update: UserUpdateType,
            updateKey?: string
        ) => {
            type: 'user update request (scenes.userLogic)'
            payload: {
                update: UserUpdateType
                updateKey: string | undefined
            }
        }
        userUpdateSuccess: (
            user: UserType,
            updateKey?: string
        ) => {
            type: 'user update success (scenes.userLogic)'
            payload: {
                user: UserType
                updateKey: string | undefined
            }
        }
        userUpdateFailure: (
            error: string,
            updateKey?: string
        ) => {
            type: 'user update failure (scenes.userLogic)'
            payload: {
                updateKey: string | undefined
                error: string
            }
        }
        userUpdateLoading: (
            loading: boolean
        ) => {
            type: 'user update loading (scenes.userLogic)'
            payload: {
                loading: boolean
            }
        }
        currentTeamUpdateRequest: (
            teamId: number
        ) => {
            type: 'current team update request (scenes.userLogic)'
            payload: {
                teamId: number
            }
        }
        currentOrganizationUpdateRequest: (
            organizationId: string
        ) => {
            type: 'current organization update request (scenes.userLogic)'
            payload: {
                organizationId: string
            }
        }
        completedOnboarding: () => {
            type: 'completed onboarding (scenes.userLogic)'
            payload: {
                value: boolean
            }
        }
        logout: () => {
            type: 'logout (scenes.userLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'load user (scenes.userLogic)': 'loadUser'
        'set user (scenes.userLogic)': 'setUser'
        'user update request (scenes.userLogic)': 'userUpdateRequest'
        'user update success (scenes.userLogic)': 'userUpdateSuccess'
        'user update failure (scenes.userLogic)': 'userUpdateFailure'
        'user update loading (scenes.userLogic)': 'userUpdateLoading'
        'current team update request (scenes.userLogic)': 'currentTeamUpdateRequest'
        'current organization update request (scenes.userLogic)': 'currentOrganizationUpdateRequest'
        'completed onboarding (scenes.userLogic)': 'completedOnboarding'
        'logout (scenes.userLogic)': 'logout'
    }
    actionTypes: {
        loadUser: 'load user (scenes.userLogic)'
        setUser: 'set user (scenes.userLogic)'
        userUpdateRequest: 'user update request (scenes.userLogic)'
        userUpdateSuccess: 'user update success (scenes.userLogic)'
        userUpdateFailure: 'user update failure (scenes.userLogic)'
        userUpdateLoading: 'user update loading (scenes.userLogic)'
        currentTeamUpdateRequest: 'current team update request (scenes.userLogic)'
        currentOrganizationUpdateRequest: 'current organization update request (scenes.userLogic)'
        completedOnboarding: 'completed onboarding (scenes.userLogic)'
        logout: 'logout (scenes.userLogic)'
    }
    actions: {
        loadUser: (resetOnFailure?: boolean) => void
        setUser: (user: UserType | null, updateKey?: string) => void
        userUpdateRequest: (update: UserUpdateType, updateKey?: string) => void
        userUpdateSuccess: (user: UserType, updateKey?: string) => void
        userUpdateFailure: (error: string, updateKey?: string) => void
        userUpdateLoading: (loading: boolean) => void
        currentTeamUpdateRequest: (teamId: number) => void
        currentOrganizationUpdateRequest: (organizationId: string) => void
        completedOnboarding: () => void
        logout: () => void
    }
    constants: {}
    defaults: {
        user: UserType | null
        userUpdateLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        loadUser: ((
            action: {
                type: 'load user (scenes.userLogic)'
                payload: {
                    resetOnFailure: boolean | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        userUpdateRequest: ((
            action: {
                type: 'user update request (scenes.userLogic)'
                payload: {
                    update: UserUpdateType
                    updateKey: string | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        logout: ((
            action: {
                type: 'logout (scenes.userLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'userLogic']
    pathString: 'scenes.userLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        user: UserType | null
        userUpdateLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        user: (state: UserType | null, action: any, fullState: any) => UserType | null
        userUpdateLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        user: UserType | null
        userUpdateLoading: boolean
    }
    selectors: {
        user: (state: any, props?: any) => UserType | null
        userUpdateLoading: (state: any, props?: any) => boolean
        eventProperties: (state: any, props?: any) => EventProperty[]
        eventPropertiesNumerical: (state: any, props?: any) => EventProperty[]
        eventNames: (state: any, props?: any) => string[]
        customEventNames: (state: any, props?: any) => string[]
        eventNamesGrouped: (state: any, props?: any) => { label: string; options: EventProperty[] }[]
        demoOnlyProject: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        user: UserType | null
        userUpdateLoading: boolean
        eventProperties: EventProperty[]
        eventPropertiesNumerical: EventProperty[]
        eventNames: string[]
        customEventNames: string[]
        eventNamesGrouped: { label: string; options: EventProperty[] }[]
        demoOnlyProject: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        eventProperties: (user: UserType | null) => EventProperty[]
        eventPropertiesNumerical: (user: UserType | null) => EventProperty[]
        eventNames: (user: UserType | null) => string[]
        customEventNames: (eventNames: string[]) => string[]
        eventNamesGrouped: (user: UserType | null) => { label: string; options: EventProperty[] }[]
        demoOnlyProject: (user: UserType | null) => boolean
    }
}
