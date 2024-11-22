// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface billingLogicType<PlanInterface, BillingSubscription, UserType, FormattedNumber> extends Logic {
    actionCreators: {
        loadPlans: () => {
            type: 'load plans (scenes.billing.billingLogic)'
            payload: any
        }
        loadPlansSuccess: (
            plans: PlanInterface[]
        ) => {
            type: 'load plans success (scenes.billing.billingLogic)'
            payload: {
                plans: PlanInterface[]
            }
        }
        loadPlansFailure: (
            error: string
        ) => {
            type: 'load plans failure (scenes.billing.billingLogic)'
            payload: {
                error: string
            }
        }
        subscribe: (
            plan: any
        ) => {
            type: 'subscribe (scenes.billing.billingLogic)'
            payload: any
        }
        subscribeSuccess: (
            billingSubscription: BillingSubscription | null
        ) => {
            type: 'subscribe success (scenes.billing.billingLogic)'
            payload: {
                billingSubscription: BillingSubscription | null
            }
        }
        subscribeFailure: (
            error: string
        ) => {
            type: 'subscribe failure (scenes.billing.billingLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'load plans (scenes.billing.billingLogic)': 'loadPlans'
        'load plans success (scenes.billing.billingLogic)': 'loadPlansSuccess'
        'load plans failure (scenes.billing.billingLogic)': 'loadPlansFailure'
        'subscribe (scenes.billing.billingLogic)': 'subscribe'
        'subscribe success (scenes.billing.billingLogic)': 'subscribeSuccess'
        'subscribe failure (scenes.billing.billingLogic)': 'subscribeFailure'
    }
    actionTypes: {
        loadPlans: 'load plans (scenes.billing.billingLogic)'
        loadPlansSuccess: 'load plans success (scenes.billing.billingLogic)'
        loadPlansFailure: 'load plans failure (scenes.billing.billingLogic)'
        subscribe: 'subscribe (scenes.billing.billingLogic)'
        subscribeSuccess: 'subscribe success (scenes.billing.billingLogic)'
        subscribeFailure: 'subscribe failure (scenes.billing.billingLogic)'
    }
    actions: {
        loadPlans: () => void
        loadPlansSuccess: (plans: PlanInterface[]) => void
        loadPlansFailure: (error: string) => void
        subscribe: (plan: any) => void
        subscribeSuccess: (billingSubscription: BillingSubscription | null) => void
        subscribeFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        plans: PlanInterface[]
        plansLoading: boolean
        billingSubscription: BillingSubscription | null
        billingSubscriptionLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        subscribeSuccess: ((
            action: {
                type: 'subscribe success (scenes.billing.billingLogic)'
                payload: {
                    billingSubscription: BillingSubscription | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'billing', 'billingLogic']
    pathString: 'scenes.billing.billingLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        plans: PlanInterface[]
        plansLoading: boolean
        billingSubscription: BillingSubscription | null
        billingSubscriptionLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        plans: (state: PlanInterface[], action: any, fullState: any) => PlanInterface[]
        plansLoading: (state: boolean, action: any, fullState: any) => boolean
        billingSubscription: (
            state: BillingSubscription | null,
            action: any,
            fullState: any
        ) => BillingSubscription | null
        billingSubscriptionLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        plans: PlanInterface[]
        plansLoading: boolean
        billingSubscription: BillingSubscription | null
        billingSubscriptionLoading: boolean
    }
    selectors: {
        plans: (state: any, props?: any) => PlanInterface[]
        plansLoading: (state: any, props?: any) => boolean
        billingSubscription: (state: any, props?: any) => BillingSubscription | null
        billingSubscriptionLoading: (state: any, props?: any) => boolean
        eventAllocation: (state: any, props?: any) => number | FormattedNumber | null | undefined
        percentage: (state: any, props?: any) => number | null
        strokeColor: (state: any, props?: any) => string | Record<string, string>
        alertToShow: (state: any, props?: any) => BillingAlertType | undefined
    }
    sharedListeners: {}
    values: {
        plans: PlanInterface[]
        plansLoading: boolean
        billingSubscription: BillingSubscription | null
        billingSubscriptionLoading: boolean
        eventAllocation: number | FormattedNumber | null | undefined
        percentage: number | null
        strokeColor: string | Record<string, string>
        alertToShow: BillingAlertType | undefined
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        eventAllocation: (user: UserType | null) => number | FormattedNumber | null | undefined
        percentage: (
            eventAllocation: number | FormattedNumber | null | undefined,
            user: UserType | null
        ) => number | null
        strokeColor: (percentage: number | null) => string | Record<string, string>
        alertToShow: (
            eventAllocation: number | FormattedNumber | null | undefined,
            user: UserType | null,
            scene: any
        ) => BillingAlertType | undefined
    }
}
