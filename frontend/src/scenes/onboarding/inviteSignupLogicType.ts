// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface inviteSignupLogicType<PrevalidatedInvite, ErrorInterface, AcceptInvitePayloadInterface> extends Logic {
    actionCreators: {
        setError: (
            payload: ErrorInterface
        ) => {
            type: 'set error (scenes.onboarding.inviteSignupLogic)'
            payload: {
                payload: ErrorInterface
            }
        }
        prevalidateInvite: (
            id: string
        ) => {
            type: 'prevalidate invite (scenes.onboarding.inviteSignupLogic)'
            payload: string
        }
        prevalidateInviteSuccess: (
            invite: PrevalidatedInvite | null
        ) => {
            type: 'prevalidate invite success (scenes.onboarding.inviteSignupLogic)'
            payload: {
                invite: PrevalidatedInvite | null
            }
        }
        prevalidateInviteFailure: (
            error: string
        ) => {
            type: 'prevalidate invite failure (scenes.onboarding.inviteSignupLogic)'
            payload: {
                error: string
            }
        }
        acceptInvite: (
            payload?: AcceptInvitePayloadInterface
        ) => {
            type: 'accept invite (scenes.onboarding.inviteSignupLogic)'
            payload: AcceptInvitePayloadInterface
        }
        acceptInviteSuccess: (
            acceptedInvite: null
        ) => {
            type: 'accept invite success (scenes.onboarding.inviteSignupLogic)'
            payload: {
                acceptedInvite: null
            }
        }
        acceptInviteFailure: (
            error: string
        ) => {
            type: 'accept invite failure (scenes.onboarding.inviteSignupLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set error (scenes.onboarding.inviteSignupLogic)': 'setError'
        'prevalidate invite (scenes.onboarding.inviteSignupLogic)': 'prevalidateInvite'
        'prevalidate invite success (scenes.onboarding.inviteSignupLogic)': 'prevalidateInviteSuccess'
        'prevalidate invite failure (scenes.onboarding.inviteSignupLogic)': 'prevalidateInviteFailure'
        'accept invite (scenes.onboarding.inviteSignupLogic)': 'acceptInvite'
        'accept invite success (scenes.onboarding.inviteSignupLogic)': 'acceptInviteSuccess'
        'accept invite failure (scenes.onboarding.inviteSignupLogic)': 'acceptInviteFailure'
    }
    actionTypes: {
        setError: 'set error (scenes.onboarding.inviteSignupLogic)'
        prevalidateInvite: 'prevalidate invite (scenes.onboarding.inviteSignupLogic)'
        prevalidateInviteSuccess: 'prevalidate invite success (scenes.onboarding.inviteSignupLogic)'
        prevalidateInviteFailure: 'prevalidate invite failure (scenes.onboarding.inviteSignupLogic)'
        acceptInvite: 'accept invite (scenes.onboarding.inviteSignupLogic)'
        acceptInviteSuccess: 'accept invite success (scenes.onboarding.inviteSignupLogic)'
        acceptInviteFailure: 'accept invite failure (scenes.onboarding.inviteSignupLogic)'
    }
    actions: {
        setError: (payload: ErrorInterface) => void
        prevalidateInvite: (id: string) => void
        prevalidateInviteSuccess: (invite: PrevalidatedInvite | null) => void
        prevalidateInviteFailure: (error: string) => void
        acceptInvite: (payload?: AcceptInvitePayloadInterface) => void
        acceptInviteSuccess: (acceptedInvite: null) => void
        acceptInviteFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        error: ErrorInterface | null
        invite: PrevalidatedInvite | null
        inviteLoading: boolean
        acceptedInvite: null
        acceptedInviteLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {
        acceptInviteSuccess: ((
            action: {
                type: 'accept invite success (scenes.onboarding.inviteSignupLogic)'
                payload: {
                    acceptedInvite: null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'onboarding', 'inviteSignupLogic']
    pathString: 'scenes.onboarding.inviteSignupLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        error: ErrorInterface | null
        invite: PrevalidatedInvite | null
        inviteLoading: boolean
        acceptedInvite: null
        acceptedInviteLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        error: (state: ErrorInterface | null, action: any, fullState: any) => ErrorInterface | null
        invite: (state: PrevalidatedInvite | null, action: any, fullState: any) => PrevalidatedInvite | null
        inviteLoading: (state: boolean, action: any, fullState: any) => boolean
        acceptedInvite: (state: null, action: any, fullState: any) => null
        acceptedInviteLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        error: ErrorInterface | null
        invite: PrevalidatedInvite | null
        inviteLoading: boolean
        acceptedInvite: null
        acceptedInviteLoading: boolean
    }
    selectors: {
        error: (state: any, props?: any) => ErrorInterface | null
        invite: (state: any, props?: any) => PrevalidatedInvite | null
        inviteLoading: (state: any, props?: any) => boolean
        acceptedInvite: (state: any, props?: any) => null
        acceptedInviteLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        error: ErrorInterface | null
        invite: PrevalidatedInvite | null
        inviteLoading: boolean
        acceptedInvite: null
        acceptedInviteLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
