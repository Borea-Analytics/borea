// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface pathsLogicType<PathResult, PropertyFilter, FilterType, PathNode> extends Logic {
    actionCreators: {
        createInsight: (
            filters: Record<string, any>
        ) => {
            type: 'create insight (scenes.paths.pathsLogic)'
            payload: {
                filters: Record<string, any>
            }
        }
        loadResults: (
            refresh?: any
        ) => {
            type: 'load results (scenes.paths.pathsLogic)'
            payload: any
        }
        loadResultsSuccess: (
            results: PathResult
        ) => {
            type: 'load results success (scenes.paths.pathsLogic)'
            payload: {
                results: PathResult
            }
        }
        loadResultsFailure: (
            error: string
        ) => {
            type: 'load results failure (scenes.paths.pathsLogic)'
            payload: {
                error: string
            }
        }
        setProperties: (
            properties: any
        ) => {
            type: 'set properties (scenes.paths.pathsLogic)'
            payload: {
                properties: any
            }
        }
        setFilter: (
            filter: any
        ) => {
            type: 'set filter (scenes.paths.pathsLogic)'
            payload: any
        }
    }
    actionKeys: {
        'create insight (scenes.paths.pathsLogic)': 'createInsight'
        'load results (scenes.paths.pathsLogic)': 'loadResults'
        'load results success (scenes.paths.pathsLogic)': 'loadResultsSuccess'
        'load results failure (scenes.paths.pathsLogic)': 'loadResultsFailure'
        'set properties (scenes.paths.pathsLogic)': 'setProperties'
        'set filter (scenes.paths.pathsLogic)': 'setFilter'
    }
    actionTypes: {
        createInsight: 'create insight (scenes.paths.pathsLogic)'
        loadResults: 'load results (scenes.paths.pathsLogic)'
        loadResultsSuccess: 'load results success (scenes.paths.pathsLogic)'
        loadResultsFailure: 'load results failure (scenes.paths.pathsLogic)'
        setProperties: 'set properties (scenes.paths.pathsLogic)'
        setFilter: 'set filter (scenes.paths.pathsLogic)'
    }
    actions: {
        createInsight: (filters: Record<string, any>) => void
        loadResults: (refresh?: any) => void
        loadResultsSuccess: (results: PathResult) => void
        loadResultsFailure: (error: string) => void
        setProperties: (properties: any) => void
        setFilter: (filter: any) => void
    }
    constants: {}
    defaults: {
        results: PathResult
        resultsLoading: boolean
        filter: Partial<FilterType>
        properties: PropertyFilter[]
    }
    events: {
        afterMount: () => void
    }
    key: unknown
    listeners: {
        setProperties: ((
            action: {
                type: 'set properties (scenes.paths.pathsLogic)'
                payload: {
                    properties: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setFilter: ((
            action: {
                type: 'set filter (scenes.paths.pathsLogic)'
                payload: any
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadResults: ((
            action: {
                type: 'load results (scenes.paths.pathsLogic)'
                payload: any
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
    path: ['scenes', 'paths', 'pathsLogic']
    pathString: 'scenes.paths.pathsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        results: PathResult
        resultsLoading: boolean
        filter: Partial<FilterType>
        properties: PropertyFilter[]
    }
    reducerOptions: {}
    reducers: {
        results: (state: PathResult, action: any, fullState: any) => PathResult
        resultsLoading: (state: boolean, action: any, fullState: any) => boolean
        filter: (state: Partial<FilterType>, action: any, fullState: any) => Partial<FilterType>
        properties: (state: PropertyFilter[], action: any, fullState: any) => PropertyFilter[]
    }
    selector: (
        state: any
    ) => {
        results: PathResult
        resultsLoading: boolean
        filter: Partial<FilterType>
        properties: PropertyFilter[]
    }
    selectors: {
        results: (state: any, props?: any) => PathResult
        resultsLoading: (state: any, props?: any) => boolean
        filter: (state: any, props?: any) => Partial<FilterType>
        properties: (state: any, props?: any) => PropertyFilter[]
        paths: (state: any, props?: any) => { nodes: any[]; links: PathNode[]; error: boolean | undefined }
        loadedFilter: (state: any, props?: any) => Partial<FilterType>
        propertiesForUrl: (state: any, props?: any) => Partial<FilterType> | ''
    }
    sharedListeners: {}
    values: {
        results: PathResult
        resultsLoading: boolean
        filter: Partial<FilterType>
        properties: PropertyFilter[]
        paths: { nodes: any[]; links: PathNode[]; error: boolean | undefined }
        loadedFilter: Partial<FilterType>
        propertiesForUrl: Partial<FilterType> | ''
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        paths: (results: PathResult) => { nodes: any[]; links: PathNode[]; error: boolean | undefined }
        loadedFilter: (results: PathResult, filter: Partial<FilterType>) => Partial<FilterType>
        propertiesForUrl: (properties: PropertyFilter[], filter: Partial<FilterType>) => Partial<FilterType> | ''
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
