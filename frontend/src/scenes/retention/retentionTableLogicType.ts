// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface retentionTableLogicType<
    RetentionTablePayload,
    RetentionTrendPayload,
    RetentionTablePeoplePayload,
    RetentionTrendPeoplePayload,
    ActionType
> extends Logic {
    actionCreators: {
        loadResults: (
            refresh?: any
        ) => {
            type: 'load results (scenes.retention.retentionTableLogic)'
            payload: any
        }
        loadResultsSuccess: (
            results: RetentionTablePayload[] | RetentionTrendPayload[]
        ) => {
            type: 'load results success (scenes.retention.retentionTableLogic)'
            payload: {
                results: RetentionTablePayload[] | RetentionTrendPayload[]
            }
        }
        loadResultsFailure: (
            error: string
        ) => {
            type: 'load results failure (scenes.retention.retentionTableLogic)'
            payload: {
                error: string
            }
        }
        loadPeople: (
            rowIndex: any
        ) => {
            type: 'load people (scenes.retention.retentionTableLogic)'
            payload: any
        }
        loadPeopleSuccess: (
            people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        ) => {
            type: 'load people success (scenes.retention.retentionTableLogic)'
            payload: {
                people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload
            }
        }
        loadPeopleFailure: (
            error: string
        ) => {
            type: 'load people failure (scenes.retention.retentionTableLogic)'
            payload: {
                error: string
            }
        }
        createInsight: (
            filters: Record<string, any>
        ) => {
            type: 'create insight (scenes.retention.retentionTableLogic)'
            payload: {
                filters: Record<string, any>
            }
        }
        setFilters: (
            filters: Record<string, any>
        ) => {
            type: 'set filters (scenes.retention.retentionTableLogic)'
            payload: {
                filters: Record<string, any>
            }
        }
        loadMorePeople: () => {
            type: 'load more people (scenes.retention.retentionTableLogic)'
            payload: {
                value: boolean
            }
        }
        updatePeople: (
            people: any
        ) => {
            type: 'update people (scenes.retention.retentionTableLogic)'
            payload: {
                people: any
            }
        }
        updateRetention: (
            retention: RetentionTablePayload[] | RetentionTrendPayload[]
        ) => {
            type: 'update retention (scenes.retention.retentionTableLogic)'
            payload: {
                retention: RetentionTablePayload[] | RetentionTrendPayload[]
            }
        }
        clearPeople: () => {
            type: 'clear people (scenes.retention.retentionTableLogic)'
            payload: {
                value: boolean
            }
        }
        clearRetention: () => {
            type: 'clear retention (scenes.retention.retentionTableLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'load results (scenes.retention.retentionTableLogic)': 'loadResults'
        'load results success (scenes.retention.retentionTableLogic)': 'loadResultsSuccess'
        'load results failure (scenes.retention.retentionTableLogic)': 'loadResultsFailure'
        'load people (scenes.retention.retentionTableLogic)': 'loadPeople'
        'load people success (scenes.retention.retentionTableLogic)': 'loadPeopleSuccess'
        'load people failure (scenes.retention.retentionTableLogic)': 'loadPeopleFailure'
        'create insight (scenes.retention.retentionTableLogic)': 'createInsight'
        'set filters (scenes.retention.retentionTableLogic)': 'setFilters'
        'load more people (scenes.retention.retentionTableLogic)': 'loadMorePeople'
        'update people (scenes.retention.retentionTableLogic)': 'updatePeople'
        'update retention (scenes.retention.retentionTableLogic)': 'updateRetention'
        'clear people (scenes.retention.retentionTableLogic)': 'clearPeople'
        'clear retention (scenes.retention.retentionTableLogic)': 'clearRetention'
    }
    actionTypes: {
        loadResults: 'load results (scenes.retention.retentionTableLogic)'
        loadResultsSuccess: 'load results success (scenes.retention.retentionTableLogic)'
        loadResultsFailure: 'load results failure (scenes.retention.retentionTableLogic)'
        loadPeople: 'load people (scenes.retention.retentionTableLogic)'
        loadPeopleSuccess: 'load people success (scenes.retention.retentionTableLogic)'
        loadPeopleFailure: 'load people failure (scenes.retention.retentionTableLogic)'
        createInsight: 'create insight (scenes.retention.retentionTableLogic)'
        setFilters: 'set filters (scenes.retention.retentionTableLogic)'
        loadMorePeople: 'load more people (scenes.retention.retentionTableLogic)'
        updatePeople: 'update people (scenes.retention.retentionTableLogic)'
        updateRetention: 'update retention (scenes.retention.retentionTableLogic)'
        clearPeople: 'clear people (scenes.retention.retentionTableLogic)'
        clearRetention: 'clear retention (scenes.retention.retentionTableLogic)'
    }
    actions: {
        loadResults: (refresh?: any) => void
        loadResultsSuccess: (results: RetentionTablePayload[] | RetentionTrendPayload[]) => void
        loadResultsFailure: (error: string) => void
        loadPeople: (rowIndex: any) => void
        loadPeopleSuccess: (people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload) => void
        loadPeopleFailure: (error: string) => void
        createInsight: (filters: Record<string, any>) => void
        setFilters: (filters: Record<string, any>) => void
        loadMorePeople: () => void
        updatePeople: (people: any) => void
        updateRetention: (retention: RetentionTablePayload[] | RetentionTrendPayload[]) => void
        clearPeople: () => void
        clearRetention: () => void
    }
    constants: {}
    defaults: {
        results: RetentionTablePayload[] | RetentionTrendPayload[]
        resultsLoading: boolean
        people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        peopleLoading: boolean
        filters: Record<string, any>
        loadingMore: boolean
    }
    events: {
        afterMount: () => void
    }
    key: unknown
    listeners: {
        setFilters: ((
            action: {
                type: 'set filters (scenes.retention.retentionTableLogic)'
                payload: {
                    filters: Record<string, any>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadResults: ((
            action: {
                type: 'load results (scenes.retention.retentionTableLogic)'
                payload: any
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadMorePeople: ((
            action: {
                type: 'load more people (scenes.retention.retentionTableLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        'refresh all dashboard items (models.dashboardItemsModel)': ((
            action: {
                type: 'refresh all dashboard items (models.dashboardItemsModel)'
                payload: Record<string, any>
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'retention', 'retentionTableLogic']
    pathString: 'scenes.retention.retentionTableLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        results: RetentionTablePayload[] | RetentionTrendPayload[]
        resultsLoading: boolean
        people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        peopleLoading: boolean
        filters: Record<string, any>
        loadingMore: boolean
    }
    reducerOptions: {}
    reducers: {
        results: (
            state: RetentionTablePayload[] | RetentionTrendPayload[],
            action: any,
            fullState: any
        ) => RetentionTablePayload[] | RetentionTrendPayload[]
        resultsLoading: (state: boolean, action: any, fullState: any) => boolean
        people: (
            state: RetentionTablePeoplePayload | RetentionTrendPeoplePayload,
            action: any,
            fullState: any
        ) => RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        peopleLoading: (state: boolean, action: any, fullState: any) => boolean
        filters: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        loadingMore: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        results: RetentionTablePayload[] | RetentionTrendPayload[]
        resultsLoading: boolean
        people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        peopleLoading: boolean
        filters: Record<string, any>
        loadingMore: boolean
    }
    selectors: {
        results: (state: any, props?: any) => RetentionTablePayload[] | RetentionTrendPayload[]
        resultsLoading: (state: any, props?: any) => boolean
        people: (state: any, props?: any) => RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        peopleLoading: (state: any, props?: any) => boolean
        filters: (state: any, props?: any) => Record<string, any>
        loadingMore: (state: any, props?: any) => boolean
        actions: (state: any, props?: any) => ActionType[]
        actionsLookup: (state: any, props?: any) => any
    }
    sharedListeners: {}
    values: {
        results: RetentionTablePayload[] | RetentionTrendPayload[]
        resultsLoading: boolean
        people: RetentionTablePeoplePayload | RetentionTrendPeoplePayload
        peopleLoading: boolean
        filters: Record<string, any>
        loadingMore: boolean
        actions: ActionType[]
        actionsLookup: any
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        actionsLookup: (actions: any) => any
    }
    __keaTypeGenInternalReducerActions: {
        'refresh all dashboard items (models.dashboardItemsModel)': (
            filters: Record<string, any>
        ) => {
            type: 'refresh all dashboard items (models.dashboardItemsModel)'
            payload: Record<string, any>
        }
    }
}
