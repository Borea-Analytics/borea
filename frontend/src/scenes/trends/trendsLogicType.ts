// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface trendsLogicType<TrendResult, FilterType, ActionType, TrendPeople, PropertyFilter, ToastId>
    extends Logic {
    actionCreators: {
        loadResults: (
            refresh?: any
        ) => {
            type: 'load results (scenes.trends.trendsLogic)'
            payload: any
        }
        loadResultsSuccess: (
            results: TrendResult[]
        ) => {
            type: 'load results success (scenes.trends.trendsLogic)'
            payload: {
                results: TrendResult[]
            }
        }
        loadResultsFailure: (
            error: string
        ) => {
            type: 'load results failure (scenes.trends.trendsLogic)'
            payload: {
                error: string
            }
        }
        setFilters: (
            filters: any,
            mergeFilters?: any
        ) => {
            type: 'set filters (scenes.trends.trendsLogic)'
            payload: {
                filters: any
                mergeFilters: any
            }
        }
        setDisplay: (
            display: any
        ) => {
            type: 'set display (scenes.trends.trendsLogic)'
            payload: {
                display: any
            }
        }
        loadPeople: (
            action: any,
            label: any,
            day: any,
            breakdown_value: any
        ) => {
            type: 'load people (scenes.trends.trendsLogic)'
            payload: {
                action: any
                label: any
                day: any
                breakdown_value: any
            }
        }
        saveCohortWithFilters: (
            cohortName: string
        ) => {
            type: 'save cohort with filters (scenes.trends.trendsLogic)'
            payload: {
                cohortName: string
            }
        }
        loadMorePeople: () => {
            type: 'load more people (scenes.trends.trendsLogic)'
            payload: {
                value: boolean
            }
        }
        refreshCohort: () => {
            type: 'refresh cohort (scenes.trends.trendsLogic)'
            payload: {
                value: boolean
            }
        }
        setLoadingMorePeople: (
            status: any
        ) => {
            type: 'set loading more people (scenes.trends.trendsLogic)'
            payload: {
                status: any
            }
        }
        setShowingPeople: (
            isShowing: any
        ) => {
            type: 'set showing people (scenes.trends.trendsLogic)'
            payload: {
                isShowing: any
            }
        }
        setPeople: (
            people: any,
            count: any,
            action: any,
            label: any,
            day: any,
            breakdown_value: any,
            next: any
        ) => {
            type: 'set people (scenes.trends.trendsLogic)'
            payload: {
                people: any
                count: any
                action: any
                label: any
                day: any
                breakdown_value: any
                next: any
            }
        }
        setIndexedResults: (
            results: IndexedTrendResult[]
        ) => {
            type: 'set indexed results (scenes.trends.trendsLogic)'
            payload: {
                results: IndexedTrendResult[]
            }
        }
        toggleVisibility: (
            index: number
        ) => {
            type: 'toggle visibility (scenes.trends.trendsLogic)'
            payload: {
                index: number
            }
        }
        setVisibilityById: (
            entry: Record<number, boolean>
        ) => {
            type: 'set visibility by id (scenes.trends.trendsLogic)'
            payload: {
                entry: Record<number, boolean>
            }
        }
    }
    actionKeys: {
        'load results (scenes.trends.trendsLogic)': 'loadResults'
        'load results success (scenes.trends.trendsLogic)': 'loadResultsSuccess'
        'load results failure (scenes.trends.trendsLogic)': 'loadResultsFailure'
        'set filters (scenes.trends.trendsLogic)': 'setFilters'
        'set display (scenes.trends.trendsLogic)': 'setDisplay'
        'load people (scenes.trends.trendsLogic)': 'loadPeople'
        'save cohort with filters (scenes.trends.trendsLogic)': 'saveCohortWithFilters'
        'load more people (scenes.trends.trendsLogic)': 'loadMorePeople'
        'refresh cohort (scenes.trends.trendsLogic)': 'refreshCohort'
        'set loading more people (scenes.trends.trendsLogic)': 'setLoadingMorePeople'
        'set showing people (scenes.trends.trendsLogic)': 'setShowingPeople'
        'set people (scenes.trends.trendsLogic)': 'setPeople'
        'set indexed results (scenes.trends.trendsLogic)': 'setIndexedResults'
        'toggle visibility (scenes.trends.trendsLogic)': 'toggleVisibility'
        'set visibility by id (scenes.trends.trendsLogic)': 'setVisibilityById'
    }
    actionTypes: {
        loadResults: 'load results (scenes.trends.trendsLogic)'
        loadResultsSuccess: 'load results success (scenes.trends.trendsLogic)'
        loadResultsFailure: 'load results failure (scenes.trends.trendsLogic)'
        setFilters: 'set filters (scenes.trends.trendsLogic)'
        setDisplay: 'set display (scenes.trends.trendsLogic)'
        loadPeople: 'load people (scenes.trends.trendsLogic)'
        saveCohortWithFilters: 'save cohort with filters (scenes.trends.trendsLogic)'
        loadMorePeople: 'load more people (scenes.trends.trendsLogic)'
        refreshCohort: 'refresh cohort (scenes.trends.trendsLogic)'
        setLoadingMorePeople: 'set loading more people (scenes.trends.trendsLogic)'
        setShowingPeople: 'set showing people (scenes.trends.trendsLogic)'
        setPeople: 'set people (scenes.trends.trendsLogic)'
        setIndexedResults: 'set indexed results (scenes.trends.trendsLogic)'
        toggleVisibility: 'toggle visibility (scenes.trends.trendsLogic)'
        setVisibilityById: 'set visibility by id (scenes.trends.trendsLogic)'
    }
    actions: {
        loadResults: (refresh?: any) => void
        loadResultsSuccess: (results: TrendResult[]) => void
        loadResultsFailure: (error: string) => void
        setFilters: (filters: any, mergeFilters?: any) => void
        setDisplay: (display: any) => void
        loadPeople: (action: any, label: any, day: any, breakdown_value: any) => void
        saveCohortWithFilters: (cohortName: string) => void
        loadMorePeople: () => void
        refreshCohort: () => void
        setLoadingMorePeople: (status: any) => void
        setShowingPeople: (isShowing: any) => void
        setPeople: (people: any, count: any, action: any, label: any, day: any, breakdown_value: any, next: any) => void
        setIndexedResults: (results: IndexedTrendResult[]) => void
        toggleVisibility: (index: number) => void
        setVisibilityById: (entry: Record<number, boolean>) => void
    }
    constants: {}
    defaults: {
        results: TrendResult[]
        resultsLoading: boolean
        filters: Partial<FilterType>
        people: TrendPeople | null
        loadingMorePeople: boolean
        showingPeople: boolean
        indexedResults: any[]
        visibilityMap: Record<number, any>
    }
    events: {
        afterMount: () => void
    }
    key: unknown
    listeners: {
        setDisplay: ((
            action: {
                type: 'set display (scenes.trends.trendsLogic)'
                payload: {
                    display: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        refreshCohort: ((
            action: {
                type: 'refresh cohort (scenes.trends.trendsLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveCohortWithFilters: ((
            action: {
                type: 'save cohort with filters (scenes.trends.trendsLogic)'
                payload: {
                    cohortName: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadPeople: ((
            action: {
                type: 'load people (scenes.trends.trendsLogic)'
                payload: {
                    action: any
                    label: any
                    day: any
                    breakdown_value: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadMorePeople: ((
            action: {
                type: 'load more people (scenes.trends.trendsLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setFilters: ((
            action: {
                type: 'set filters (scenes.trends.trendsLogic)'
                payload: {
                    filters: any
                    mergeFilters: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadResultsSuccess: ((
            action: {
                type: 'load results success (scenes.trends.trendsLogic)'
                payload: {
                    results: TrendResult[]
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
    path: ['scenes', 'trends', 'trendsLogic']
    pathString: 'scenes.trends.trendsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        results: TrendResult[]
        resultsLoading: boolean
        filters: Partial<FilterType>
        people: TrendPeople | null
        loadingMorePeople: boolean
        showingPeople: boolean
        indexedResults: any[]
        visibilityMap: Record<number, any>
    }
    reducerOptions: {}
    reducers: {
        results: (state: TrendResult[], action: any, fullState: any) => TrendResult[]
        resultsLoading: (state: boolean, action: any, fullState: any) => boolean
        filters: (state: Partial<FilterType>, action: any, fullState: any) => Partial<FilterType>
        people: (state: TrendPeople | null, action: any, fullState: any) => TrendPeople | null
        loadingMorePeople: (state: boolean, action: any, fullState: any) => boolean
        showingPeople: (state: boolean, action: any, fullState: any) => boolean
        indexedResults: (state: any[], action: any, fullState: any) => any[]
        visibilityMap: (state: Record<number, any>, action: any, fullState: any) => Record<number, any>
    }
    selector: (
        state: any
    ) => {
        results: TrendResult[]
        resultsLoading: boolean
        filters: Partial<FilterType>
        people: TrendPeople | null
        loadingMorePeople: boolean
        showingPeople: boolean
        indexedResults: any[]
        visibilityMap: Record<number, any>
    }
    selectors: {
        results: (state: any, props?: any) => TrendResult[]
        resultsLoading: (state: any, props?: any) => boolean
        filters: (state: any, props?: any) => Partial<FilterType>
        people: (state: any, props?: any) => TrendPeople | null
        loadingMorePeople: (state: any, props?: any) => boolean
        showingPeople: (state: any, props?: any) => boolean
        indexedResults: (state: any, props?: any) => any[]
        visibilityMap: (state: any, props?: any) => Record<number, any>
        eventNames: (state: any, props?: any) => string[]
        actions: (state: any, props?: any) => ActionType[]
        sessionsPageParams: (
            state: any,
            props?: any
        ) =>
            | { date?: undefined; filters?: undefined }
            | {
                  date: ToastId
                  filters: (
                      | PropertyFilter
                      | { type: string; key: string; value: ToastId; properties: PropertyFilter[]; label: string }
                  )[]
              }
        peopleModalURL: (state: any, props?: any) => { sessions: string; recordings: string }
    }
    sharedListeners: {}
    values: {
        results: TrendResult[]
        resultsLoading: boolean
        filters: Partial<FilterType>
        people: TrendPeople | null
        loadingMorePeople: boolean
        showingPeople: boolean
        indexedResults: any[]
        visibilityMap: Record<number, any>
        eventNames: string[]
        actions: ActionType[]
        sessionsPageParams:
            | { date?: undefined; filters?: undefined }
            | {
                  date: ToastId
                  filters: (
                      | PropertyFilter
                      | { type: string; key: string; value: ToastId; properties: PropertyFilter[]; label: string }
                  )[]
              }
        peopleModalURL: { sessions: string; recordings: string }
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        sessionsPageParams: (
            filters: Partial<FilterType>,
            people: TrendPeople | null
        ) =>
            | { date?: undefined; filters?: undefined }
            | {
                  date: ToastId
                  filters: (
                      | PropertyFilter
                      | { type: string; key: string; value: ToastId; properties: PropertyFilter[]; label: string }
                  )[]
              }
        peopleModalURL: (
            sessionsPageParams:
                | {
                      date?: undefined
                      filters?: undefined
                  }
                | {
                      date: ToastId
                      filters: (
                          | PropertyFilter
                          | { type: string; key: string; value: ToastId; properties: PropertyFilter[]; label: string }
                      )[]
                  }
        ) => { sessions: string; recordings: string }
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
