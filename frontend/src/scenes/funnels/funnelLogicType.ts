// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface funnelLogicType extends Logic {
    actionCreators: {
        setSteps: (
            steps: any
        ) => {
            type: 'set steps (scenes.funnels.funnelLogic)'
            payload: {
                steps: any
            }
        }
        clearFunnel: () => {
            type: 'clear funnel (scenes.funnels.funnelLogic)'
            payload: {
                value: boolean
            }
        }
        setFilters: (
            filters: any,
            refresh?: any
        ) => {
            type: 'set filters (scenes.funnels.funnelLogic)'
            payload: {
                filters: any
                refresh: boolean
            }
        }
        saveFunnelInsight: (
            name: any
        ) => {
            type: 'save funnel insight (scenes.funnels.funnelLogic)'
            payload: {
                name: any
            }
        }
        createInsight: (
            filters: Record<string, any>
        ) => {
            type: 'create insight (scenes.funnels.funnelLogic)'
            payload: {
                filters: Record<string, any>
            }
        }
        loadFunnels: () => {
            type: 'load funnels (scenes.funnels.funnelLogic)'
            payload: any
        }
        loadResults: (
            refresh?: any
        ) => {
            type: 'load results (scenes.funnels.funnelLogic)'
            payload: any
        }
        loadResultsSuccess: (
            results: any
        ) => {
            type: 'load results success (scenes.funnels.funnelLogic)'
            payload: {
                results: any
            }
        }
        loadResultsFailure: (
            error: string
        ) => {
            type: 'load results failure (scenes.funnels.funnelLogic)'
            payload: {
                error: string
            }
        }
        loadPeople: (
            steps: any
        ) => {
            type: 'load people (scenes.funnels.funnelLogic)'
            payload: any
        }
        loadPeopleSuccess: (
            people: any
        ) => {
            type: 'load people success (scenes.funnels.funnelLogic)'
            payload: {
                people: any
            }
        }
        loadPeopleFailure: (
            error: string
        ) => {
            type: 'load people failure (scenes.funnels.funnelLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set steps (scenes.funnels.funnelLogic)': 'setSteps'
        'clear funnel (scenes.funnels.funnelLogic)': 'clearFunnel'
        'set filters (scenes.funnels.funnelLogic)': 'setFilters'
        'save funnel insight (scenes.funnels.funnelLogic)': 'saveFunnelInsight'
        'create insight (scenes.funnels.funnelLogic)': 'createInsight'
        'load funnels (scenes.funnels.funnelLogic)': 'loadFunnels'
        'load results (scenes.funnels.funnelLogic)': 'loadResults'
        'load results success (scenes.funnels.funnelLogic)': 'loadResultsSuccess'
        'load results failure (scenes.funnels.funnelLogic)': 'loadResultsFailure'
        'load people (scenes.funnels.funnelLogic)': 'loadPeople'
        'load people success (scenes.funnels.funnelLogic)': 'loadPeopleSuccess'
        'load people failure (scenes.funnels.funnelLogic)': 'loadPeopleFailure'
    }
    actionTypes: {
        setSteps: 'set steps (scenes.funnels.funnelLogic)'
        clearFunnel: 'clear funnel (scenes.funnels.funnelLogic)'
        setFilters: 'set filters (scenes.funnels.funnelLogic)'
        saveFunnelInsight: 'save funnel insight (scenes.funnels.funnelLogic)'
        createInsight: 'create insight (scenes.funnels.funnelLogic)'
        loadFunnels: 'load funnels (scenes.funnels.funnelLogic)'
        loadResults: 'load results (scenes.funnels.funnelLogic)'
        loadResultsSuccess: 'load results success (scenes.funnels.funnelLogic)'
        loadResultsFailure: 'load results failure (scenes.funnels.funnelLogic)'
        loadPeople: 'load people (scenes.funnels.funnelLogic)'
        loadPeopleSuccess: 'load people success (scenes.funnels.funnelLogic)'
        loadPeopleFailure: 'load people failure (scenes.funnels.funnelLogic)'
    }
    actions: {
        setSteps: (steps: any) => void
        clearFunnel: () => void
        setFilters: (filters: any, refresh?: any) => void
        saveFunnelInsight: (name: any) => void
        createInsight: (filters: Record<string, any>) => void
        loadFunnels: () => void
        loadResults: (refresh?: any) => void
        loadResultsSuccess: (results: any) => void
        loadResultsFailure: (error: string) => void
        loadPeople: (steps: any) => void
        loadPeopleSuccess: (people: any) => void
        loadPeopleFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        results: any
        resultsLoading: boolean
        people: any
        peopleLoading: boolean
        filters: any
        stepsWithCount: any[]
        stepsWithCountLoading: boolean
    }
    events: {}
    key: any
    listeners: {
        setSteps: ((
            action: {
                type: 'set steps (scenes.funnels.funnelLogic)'
                payload: {
                    steps: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setFilters: ((
            action: {
                type: 'set filters (scenes.funnels.funnelLogic)'
                payload: {
                    filters: any
                    refresh: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveFunnelInsight: ((
            action: {
                type: 'save funnel insight (scenes.funnels.funnelLogic)'
                payload: {
                    name: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        clearFunnel: ((
            action: {
                type: 'clear funnel (scenes.funnels.funnelLogic)'
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
    path: ['scenes', 'funnels', 'funnelLogic']
    pathString: 'scenes.funnels.funnelLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        results: any
        resultsLoading: boolean
        people: any
        peopleLoading: boolean
        filters: any
        stepsWithCount: any[]
        stepsWithCountLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        results: (state: any, action: any, fullState: any) => any
        resultsLoading: (state: boolean, action: any, fullState: any) => boolean
        people: (state: any, action: any, fullState: any) => any
        peopleLoading: (state: boolean, action: any, fullState: any) => boolean
        filters: (state: any, action: any, fullState: any) => any
        stepsWithCount: (state: any[], action: any, fullState: any) => any[]
        stepsWithCountLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        results: any
        resultsLoading: boolean
        people: any
        peopleLoading: boolean
        filters: any
        stepsWithCount: any[]
        stepsWithCountLoading: boolean
    }
    selectors: {
        results: (state: any, props?: any) => any
        resultsLoading: (state: any, props?: any) => boolean
        people: (state: any, props?: any) => any
        peopleLoading: (state: any, props?: any) => boolean
        filters: (state: any, props?: any) => any
        stepsWithCount: (state: any, props?: any) => any[]
        stepsWithCountLoading: (state: any, props?: any) => boolean
        peopleSorted: (state: any, props?: any) => any
        isStepsEmpty: (state: any, props?: any) => boolean
        propertiesForUrl: (state: any, props?: any) => any
    }
    sharedListeners: {}
    values: {
        results: any
        resultsLoading: boolean
        people: any
        peopleLoading: boolean
        filters: any
        stepsWithCount: any[]
        stepsWithCountLoading: boolean
        peopleSorted: any
        isStepsEmpty: boolean
        propertiesForUrl: any
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalReducerActions: {
        'refresh all dashboard items (models.dashboardItemsModel)': (
            filters: Record<string, any>
        ) => {
            type: 'refresh all dashboard items (models.dashboardItemsModel)'
            payload: Record<string, any>
        }
    }
}
