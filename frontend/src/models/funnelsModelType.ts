// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface funnelsModelType<SavedFunnel, DashboardItemType> extends Logic {
    actionCreators: {
        loadFunnels: () => {
            type: 'load funnels (models.funnelsModel)'
            payload: any
        }
        loadFunnelsSuccess: (
            funnels: SavedFunnel[]
        ) => {
            type: 'load funnels success (models.funnelsModel)'
            payload: {
                funnels: SavedFunnel[]
            }
        }
        loadFunnelsFailure: (
            error: string
        ) => {
            type: 'load funnels failure (models.funnelsModel)'
            payload: {
                error: string
            }
        }
        deleteFunnel: (
            funnelId: number
        ) => {
            type: 'delete funnel (models.funnelsModel)'
            payload: number
        }
        deleteFunnelSuccess: (
            funnels: SavedFunnel[]
        ) => {
            type: 'delete funnel success (models.funnelsModel)'
            payload: {
                funnels: SavedFunnel[]
            }
        }
        deleteFunnelFailure: (
            error: string
        ) => {
            type: 'delete funnel failure (models.funnelsModel)'
            payload: {
                error: string
            }
        }
        updateInsight: (
            insight: DashboardItemType
        ) => {
            type: 'update insight (models.funnelsModel)'
            payload: {
                insight: DashboardItemType
            }
        }
        setNext: (
            next: any
        ) => {
            type: 'set next (models.funnelsModel)'
            payload: {
                next: any
            }
        }
        loadNext: () => {
            type: 'load next (models.funnelsModel)'
            payload: {
                value: boolean
            }
        }
        appendFunnels: (
            funnels: any
        ) => {
            type: 'append funnels (models.funnelsModel)'
            payload: {
                funnels: any
            }
        }
    }
    actionKeys: {
        'load funnels (models.funnelsModel)': 'loadFunnels'
        'load funnels success (models.funnelsModel)': 'loadFunnelsSuccess'
        'load funnels failure (models.funnelsModel)': 'loadFunnelsFailure'
        'delete funnel (models.funnelsModel)': 'deleteFunnel'
        'delete funnel success (models.funnelsModel)': 'deleteFunnelSuccess'
        'delete funnel failure (models.funnelsModel)': 'deleteFunnelFailure'
        'update insight (models.funnelsModel)': 'updateInsight'
        'set next (models.funnelsModel)': 'setNext'
        'load next (models.funnelsModel)': 'loadNext'
        'append funnels (models.funnelsModel)': 'appendFunnels'
    }
    actionTypes: {
        loadFunnels: 'load funnels (models.funnelsModel)'
        loadFunnelsSuccess: 'load funnels success (models.funnelsModel)'
        loadFunnelsFailure: 'load funnels failure (models.funnelsModel)'
        deleteFunnel: 'delete funnel (models.funnelsModel)'
        deleteFunnelSuccess: 'delete funnel success (models.funnelsModel)'
        deleteFunnelFailure: 'delete funnel failure (models.funnelsModel)'
        updateInsight: 'update insight (models.funnelsModel)'
        setNext: 'set next (models.funnelsModel)'
        loadNext: 'load next (models.funnelsModel)'
        appendFunnels: 'append funnels (models.funnelsModel)'
    }
    actions: {
        loadFunnels: () => void
        loadFunnelsSuccess: (funnels: SavedFunnel[]) => void
        loadFunnelsFailure: (error: string) => void
        deleteFunnel: (funnelId: number) => void
        deleteFunnelSuccess: (funnels: SavedFunnel[]) => void
        deleteFunnelFailure: (error: string) => void
        updateInsight: (insight: DashboardItemType) => void
        setNext: (next: any) => void
        loadNext: () => void
        appendFunnels: (funnels: any) => void
    }
    constants: {}
    defaults: {
        funnels: SavedFunnel[]
        funnelsLoading: boolean
        next: null | string
        loadingMore: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        loadNext: ((
            action: {
                type: 'load next (models.funnelsModel)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateInsight: ((
            action: {
                type: 'update insight (models.funnelsModel)'
                payload: {
                    insight: DashboardItemType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['models', 'funnelsModel']
    pathString: 'models.funnelsModel'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        funnels: SavedFunnel[]
        funnelsLoading: boolean
        next: null | string
        loadingMore: boolean
    }
    reducerOptions: {}
    reducers: {
        funnels: (state: SavedFunnel[], action: any, fullState: any) => SavedFunnel[]
        funnelsLoading: (state: boolean, action: any, fullState: any) => boolean
        next: (state: null | string, action: any, fullState: any) => null | string
        loadingMore: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        funnels: SavedFunnel[]
        funnelsLoading: boolean
        next: null | string
        loadingMore: boolean
    }
    selectors: {
        funnels: (state: any, props?: any) => SavedFunnel[]
        funnelsLoading: (state: any, props?: any) => boolean
        next: (state: any, props?: any) => null | string
        loadingMore: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        funnels: SavedFunnel[]
        funnelsLoading: boolean
        next: null | string
        loadingMore: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
