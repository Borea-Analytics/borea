// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface insightLogicType extends Logic {
    actionCreators: {
        setActiveView: (
            type: any
        ) => {
            type: 'set active view (scenes.insights.insightLogic)'
            payload: {
                type: any
            }
        }
        updateActiveView: (
            type: any
        ) => {
            type: 'update active view (scenes.insights.insightLogic)'
            payload: {
                type: any
            }
        }
        setCachedUrl: (
            type: any,
            url: any
        ) => {
            type: 'set cached url (scenes.insights.insightLogic)'
            payload: {
                type: any
                url: any
            }
        }
        setAllFilters: (
            filters: any
        ) => {
            type: 'set all filters (scenes.insights.insightLogic)'
            payload: {
                filters: any
            }
        }
        startQuery: () => {
            type: 'start query (scenes.insights.insightLogic)'
            payload: {
                value: boolean
            }
        }
        endQuery: (
            view: string,
            lastRefresh: string | boolean,
            exception?: Record<string, any>
        ) => {
            type: 'end query (scenes.insights.insightLogic)'
            payload: {
                view: string
                lastRefresh: string | boolean
                exception: Record<string, any> | undefined
            }
        }
        setMaybeShowTimeoutMessage: (
            showTimeoutMessage: boolean
        ) => {
            type: 'set maybe show timeout message (scenes.insights.insightLogic)'
            payload: {
                showTimeoutMessage: boolean
            }
        }
        setShowTimeoutMessage: (
            showTimeoutMessage: boolean
        ) => {
            type: 'set show timeout message (scenes.insights.insightLogic)'
            payload: {
                showTimeoutMessage: boolean
            }
        }
        setShowErrorMessage: (
            showErrorMessage: boolean
        ) => {
            type: 'set show error message (scenes.insights.insightLogic)'
            payload: {
                showErrorMessage: boolean
            }
        }
        setIsLoading: (
            isLoading: boolean
        ) => {
            type: 'set is loading (scenes.insights.insightLogic)'
            payload: {
                isLoading: boolean
            }
        }
        setTimeout: (
            timeout: any
        ) => {
            type: 'set timeout (scenes.insights.insightLogic)'
            payload: {
                timeout: any
            }
        }
        setLastRefresh: (
            lastRefresh: string | boolean
        ) => {
            type: 'set last refresh (scenes.insights.insightLogic)'
            payload: {
                lastRefresh: string | boolean
            }
        }
        setNotFirstLoad: () => {
            type: 'set not first load (scenes.insights.insightLogic)'
            payload: void
        }
    }
    actionKeys: {
        'set active view (scenes.insights.insightLogic)': 'setActiveView'
        'update active view (scenes.insights.insightLogic)': 'updateActiveView'
        'set cached url (scenes.insights.insightLogic)': 'setCachedUrl'
        'set all filters (scenes.insights.insightLogic)': 'setAllFilters'
        'start query (scenes.insights.insightLogic)': 'startQuery'
        'end query (scenes.insights.insightLogic)': 'endQuery'
        'set maybe show timeout message (scenes.insights.insightLogic)': 'setMaybeShowTimeoutMessage'
        'set show timeout message (scenes.insights.insightLogic)': 'setShowTimeoutMessage'
        'set show error message (scenes.insights.insightLogic)': 'setShowErrorMessage'
        'set is loading (scenes.insights.insightLogic)': 'setIsLoading'
        'set timeout (scenes.insights.insightLogic)': 'setTimeout'
        'set last refresh (scenes.insights.insightLogic)': 'setLastRefresh'
        'set not first load (scenes.insights.insightLogic)': 'setNotFirstLoad'
    }
    actionTypes: {
        setActiveView: 'set active view (scenes.insights.insightLogic)'
        updateActiveView: 'update active view (scenes.insights.insightLogic)'
        setCachedUrl: 'set cached url (scenes.insights.insightLogic)'
        setAllFilters: 'set all filters (scenes.insights.insightLogic)'
        startQuery: 'start query (scenes.insights.insightLogic)'
        endQuery: 'end query (scenes.insights.insightLogic)'
        setMaybeShowTimeoutMessage: 'set maybe show timeout message (scenes.insights.insightLogic)'
        setShowTimeoutMessage: 'set show timeout message (scenes.insights.insightLogic)'
        setShowErrorMessage: 'set show error message (scenes.insights.insightLogic)'
        setIsLoading: 'set is loading (scenes.insights.insightLogic)'
        setTimeout: 'set timeout (scenes.insights.insightLogic)'
        setLastRefresh: 'set last refresh (scenes.insights.insightLogic)'
        setNotFirstLoad: 'set not first load (scenes.insights.insightLogic)'
    }
    actions: {
        setActiveView: (type: any) => void
        updateActiveView: (type: any) => void
        setCachedUrl: (type: any, url: any) => void
        setAllFilters: (filters: any) => void
        startQuery: () => void
        endQuery: (view: string, lastRefresh: string | boolean, exception?: Record<string, any>) => void
        setMaybeShowTimeoutMessage: (showTimeoutMessage: boolean) => void
        setShowTimeoutMessage: (showTimeoutMessage: boolean) => void
        setShowErrorMessage: (showErrorMessage: boolean) => void
        setIsLoading: (isLoading: boolean) => void
        setTimeout: (timeout: any) => void
        setLastRefresh: (lastRefresh: string | boolean) => void
        setNotFirstLoad: () => void
    }
    constants: {}
    defaults: {
        showTimeoutMessage: boolean
        maybeShowTimeoutMessage: boolean
        showErrorMessage: boolean
        maybeShowErrorMessage: boolean
        cachedUrls: Record<string, string>
        activeView: ViewType.TRENDS
        timeout: null
        lastRefresh: boolean | string
        isLoading: boolean
        allFilters: Record<string, any>
        isFirstLoad: boolean
    }
    events: {
        beforeUnmount: () => void
    }
    key: undefined
    listeners: {
        setAllFilters: ((
            action: {
                type: 'set all filters (scenes.insights.insightLogic)'
                payload: {
                    filters: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        startQuery: ((
            action: {
                type: 'start query (scenes.insights.insightLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        endQuery: ((
            action: {
                type: 'end query (scenes.insights.insightLogic)'
                payload: {
                    view: string
                    lastRefresh: string | boolean
                    exception: Record<string, any> | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setActiveView: ((
            action: {
                type: 'set active view (scenes.insights.insightLogic)'
                payload: {
                    type: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'insights', 'insightLogic']
    pathString: 'scenes.insights.insightLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        showTimeoutMessage: boolean
        maybeShowTimeoutMessage: boolean
        showErrorMessage: boolean
        maybeShowErrorMessage: boolean
        cachedUrls: Record<string, string>
        activeView: ViewType.TRENDS
        timeout: null
        lastRefresh: boolean | string
        isLoading: boolean
        allFilters: Record<string, any>
        isFirstLoad: boolean
    }
    reducerOptions: {}
    reducers: {
        showTimeoutMessage: (state: boolean, action: any, fullState: any) => boolean
        maybeShowTimeoutMessage: (state: boolean, action: any, fullState: any) => boolean
        showErrorMessage: (state: boolean, action: any, fullState: any) => boolean
        maybeShowErrorMessage: (state: boolean, action: any, fullState: any) => boolean
        cachedUrls: (state: Record<string, string>, action: any, fullState: any) => Record<string, string>
        activeView: (state: ViewType.TRENDS, action: any, fullState: any) => ViewType.TRENDS
        timeout: (state: null, action: any, fullState: any) => null
        lastRefresh: (state: boolean | string, action: any, fullState: any) => boolean | string
        isLoading: (state: boolean, action: any, fullState: any) => boolean
        allFilters: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        isFirstLoad: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        showTimeoutMessage: boolean
        maybeShowTimeoutMessage: boolean
        showErrorMessage: boolean
        maybeShowErrorMessage: boolean
        cachedUrls: Record<string, string>
        activeView: ViewType.TRENDS
        timeout: null
        lastRefresh: boolean | string
        isLoading: boolean
        allFilters: Record<string, any>
        isFirstLoad: boolean
    }
    selectors: {
        showTimeoutMessage: (state: any, props?: any) => boolean
        maybeShowTimeoutMessage: (state: any, props?: any) => boolean
        showErrorMessage: (state: any, props?: any) => boolean
        maybeShowErrorMessage: (state: any, props?: any) => boolean
        cachedUrls: (state: any, props?: any) => Record<string, string>
        activeView: (state: any, props?: any) => ViewType.TRENDS
        timeout: (state: any, props?: any) => null
        lastRefresh: (state: any, props?: any) => boolean | string
        isLoading: (state: any, props?: any) => boolean
        allFilters: (state: any, props?: any) => Record<string, any>
        isFirstLoad: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        showTimeoutMessage: boolean
        maybeShowTimeoutMessage: boolean
        showErrorMessage: boolean
        maybeShowErrorMessage: boolean
        cachedUrls: Record<string, string>
        activeView: ViewType.TRENDS
        timeout: null
        lastRefresh: boolean | string
        isLoading: boolean
        allFilters: Record<string, any>
        isFirstLoad: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
