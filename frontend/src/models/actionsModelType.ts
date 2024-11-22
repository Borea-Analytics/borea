// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface actionsModelType extends Logic {
    actionCreators: {
        loadActions: () => {
            type: 'load actions (models.actionsModel)'
            payload: any
        }
        loadActionsSuccess: (
            actions: ActionType[]
        ) => {
            type: 'load actions success (models.actionsModel)'
            payload: {
                actions: ActionType[]
            }
        }
        loadActionsFailure: (
            error: string
        ) => {
            type: 'load actions failure (models.actionsModel)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'load actions (models.actionsModel)': 'loadActions'
        'load actions success (models.actionsModel)': 'loadActionsSuccess'
        'load actions failure (models.actionsModel)': 'loadActionsFailure'
    }
    actionTypes: {
        loadActions: 'load actions (models.actionsModel)'
        loadActionsSuccess: 'load actions success (models.actionsModel)'
        loadActionsFailure: 'load actions failure (models.actionsModel)'
    }
    actions: {
        loadActions: () => void
        loadActionsSuccess: (actions: ActionType[]) => void
        loadActionsFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        actions: ActionType[]
        actionsLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {}
    path: ['models', 'actionsModel']
    pathString: 'models.actionsModel'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        actions: ActionType[]
        actionsLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        actions: (state: ActionType[], action: any, fullState: any) => ActionType[]
        actionsLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        actions: ActionType[]
        actionsLoading: boolean
    }
    selectors: {
        actions: (state: any, props?: any) => ActionType[]
        actionsLoading: (state: any, props?: any) => boolean
        actionsGrouped: (state: any, props?: any) => { label: string; options: { label: string; value: number }[] }[]
    }
    sharedListeners: {}
    values: {
        actions: ActionType[]
        actionsLoading: boolean
        actionsGrouped: { label: string; options: { label: string; value: number }[] }[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        actionsGrouped: (actions: any[]) => { label: string; options: { label: string; value: number }[] }[]
    }
}
