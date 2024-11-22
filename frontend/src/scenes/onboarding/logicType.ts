// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface signupLogicType<AccountResponse> extends Logic {
    actionCreators: {
        createAccount: (
            payload: any
        ) => {
            type: 'create account (scenes.onboarding.logic)'
            payload: any
        }
        createAccountSuccess: (
            account: AccountResponse
        ) => {
            type: 'create account success (scenes.onboarding.logic)'
            payload: {
                account: AccountResponse
            }
        }
        createAccountFailure: (
            error: string
        ) => {
            type: 'create account failure (scenes.onboarding.logic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'create account (scenes.onboarding.logic)': 'createAccount'
        'create account success (scenes.onboarding.logic)': 'createAccountSuccess'
        'create account failure (scenes.onboarding.logic)': 'createAccountFailure'
    }
    actionTypes: {
        createAccount: 'create account (scenes.onboarding.logic)'
        createAccountSuccess: 'create account success (scenes.onboarding.logic)'
        createAccountFailure: 'create account failure (scenes.onboarding.logic)'
    }
    actions: {
        createAccount: (payload: any) => void
        createAccountSuccess: (account: AccountResponse) => void
        createAccountFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        account: AccountResponse | null
        accountLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {
        createAccountSuccess: ((
            action: {
                type: 'create account success (scenes.onboarding.logic)'
                payload: {
                    account: AccountResponse
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'onboarding', 'logic']
    pathString: 'scenes.onboarding.logic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        account: AccountResponse | null
        accountLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        account: (state: AccountResponse | null, action: any, fullState: any) => AccountResponse | null
        accountLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        account: AccountResponse | null
        accountLoading: boolean
    }
    selectors: {
        account: (state: any, props?: any) => AccountResponse | null
        accountLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        account: AccountResponse | null
        accountLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
