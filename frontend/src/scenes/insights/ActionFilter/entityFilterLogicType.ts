// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface entityFilterLogicType extends Logic {
    actionCreators: {
        selectFilter: (
            filter: any
        ) => {
            type: 'select filter (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                filter: any
            }
        }
        updateFilterMath: (
            filter: any
        ) => {
            type: 'update filter math (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                type: any
                value: any
                math: any
                math_property: any
                index: any
            }
        }
        updateFilter: (
            filter: any
        ) => {
            type: 'update filter (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                type: any
                index: any
                id: any
                name: any
            }
        }
        removeLocalFilter: (
            filter: any
        ) => {
            type: 'remove local filter (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                value: any
                type: any
                index: any
            }
        }
        addFilter: () => {
            type: 'add filter (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                value: boolean
            }
        }
        updateFilterProperty: (
            filter: any
        ) => {
            type: 'update filter property (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                properties: any
                index: any
            }
        }
        setFilters: (
            filters: any
        ) => {
            type: 'set filters (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                filters: any
            }
        }
        setLocalFilters: (
            filters: any
        ) => {
            type: 'set local filters (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                filters: any
            }
        }
        setEntityFilterVisibility: (
            index: any,
            value: any
        ) => {
            type: 'set entity filter visibility (scenes.insights.ActionFilter.entityFilterLogic)'
            payload: {
                index: any
                value: any
            }
        }
    }
    actionKeys: {
        'select filter (scenes.insights.ActionFilter.entityFilterLogic)': 'selectFilter'
        'update filter math (scenes.insights.ActionFilter.entityFilterLogic)': 'updateFilterMath'
        'update filter (scenes.insights.ActionFilter.entityFilterLogic)': 'updateFilter'
        'remove local filter (scenes.insights.ActionFilter.entityFilterLogic)': 'removeLocalFilter'
        'add filter (scenes.insights.ActionFilter.entityFilterLogic)': 'addFilter'
        'update filter property (scenes.insights.ActionFilter.entityFilterLogic)': 'updateFilterProperty'
        'set filters (scenes.insights.ActionFilter.entityFilterLogic)': 'setFilters'
        'set local filters (scenes.insights.ActionFilter.entityFilterLogic)': 'setLocalFilters'
        'set entity filter visibility (scenes.insights.ActionFilter.entityFilterLogic)': 'setEntityFilterVisibility'
    }
    actionTypes: {
        selectFilter: 'select filter (scenes.insights.ActionFilter.entityFilterLogic)'
        updateFilterMath: 'update filter math (scenes.insights.ActionFilter.entityFilterLogic)'
        updateFilter: 'update filter (scenes.insights.ActionFilter.entityFilterLogic)'
        removeLocalFilter: 'remove local filter (scenes.insights.ActionFilter.entityFilterLogic)'
        addFilter: 'add filter (scenes.insights.ActionFilter.entityFilterLogic)'
        updateFilterProperty: 'update filter property (scenes.insights.ActionFilter.entityFilterLogic)'
        setFilters: 'set filters (scenes.insights.ActionFilter.entityFilterLogic)'
        setLocalFilters: 'set local filters (scenes.insights.ActionFilter.entityFilterLogic)'
        setEntityFilterVisibility: 'set entity filter visibility (scenes.insights.ActionFilter.entityFilterLogic)'
    }
    actions: {
        selectFilter: (filter: any) => void
        updateFilterMath: (filter: any) => void
        updateFilter: (filter: any) => void
        removeLocalFilter: (filter: any) => void
        addFilter: () => void
        updateFilterProperty: (filter: any) => void
        setFilters: (filters: any) => void
        setLocalFilters: (filters: any) => void
        setEntityFilterVisibility: (index: any, value: any) => void
    }
    constants: {}
    defaults: {
        selectedFilter: null
        localFilters: any[]
        entityFilterVisible: {}
    }
    events: {
        afterMount: () => void
    }
    key: any
    listeners: {
        updateFilter: ((
            action: {
                type: 'update filter (scenes.insights.ActionFilter.entityFilterLogic)'
                payload: {
                    type: any
                    index: any
                    id: any
                    name: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateFilterProperty: ((
            action: {
                type: 'update filter property (scenes.insights.ActionFilter.entityFilterLogic)'
                payload: {
                    properties: any
                    index: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateFilterMath: ((
            action: {
                type: 'update filter math (scenes.insights.ActionFilter.entityFilterLogic)'
                payload: {
                    type: any
                    value: any
                    math: any
                    math_property: any
                    index: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        removeLocalFilter: ((
            action: {
                type: 'remove local filter (scenes.insights.ActionFilter.entityFilterLogic)'
                payload: {
                    value: any
                    type: any
                    index: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        addFilter: ((
            action: {
                type: 'add filter (scenes.insights.ActionFilter.entityFilterLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setFilters: ((
            action: {
                type: 'set filters (scenes.insights.ActionFilter.entityFilterLogic)'
                payload: {
                    filters: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'insights', 'ActionFilter', 'entityFilterLogic']
    pathString: 'scenes.insights.ActionFilter.entityFilterLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        selectedFilter: null
        localFilters: any[]
        entityFilterVisible: {}
    }
    reducerOptions: {}
    reducers: {
        selectedFilter: (state: null, action: any, fullState: any) => null
        localFilters: (state: any[], action: any, fullState: any) => any[]
        entityFilterVisible: (state: {}, action: any, fullState: any) => {}
    }
    selector: (
        state: any
    ) => {
        selectedFilter: null
        localFilters: any[]
        entityFilterVisible: {}
    }
    selectors: {
        selectedFilter: (state: any, props?: any) => null
        localFilters: (state: any, props?: any) => any[]
        entityFilterVisible: (state: any, props?: any) => {}
        eventNames: (state: any, props?: any) => string[]
        actions: (state: any, props?: any) => ActionType[]
        entities: (state: any, props?: any) => { [x: string]: any }
        filters: (state: any, props?: any) => { [x: string]: any }
    }
    sharedListeners: {}
    values: {
        selectedFilter: null
        localFilters: any[]
        entityFilterVisible: {}
        eventNames: string[]
        actions: ActionType[]
        entities: { [x: string]: any }
        filters: { [x: string]: any }
    }
    _isKea: true
    _isKeaWithKey: true
}
