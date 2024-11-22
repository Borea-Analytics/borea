// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface dashboardLogicType extends Logic {
    actionCreators: {
        addNewDashboard: () => {
            type: 'add new dashboard (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        renameDashboard: () => {
            type: 'rename dashboard (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        setIsSharedDashboard: (
            id: any,
            isShared: any
        ) => {
            type: 'set is shared dashboard (scenes.dashboard.dashboardLogic)'
            payload: {
                id: any
                isShared: any
            }
        }
        updateLayouts: (
            layouts: any
        ) => {
            type: 'update layouts (scenes.dashboard.dashboardLogic)'
            payload: {
                layouts: any
            }
        }
        updateContainerWidth: (
            containerWidth: any,
            columns: any
        ) => {
            type: 'update container width (scenes.dashboard.dashboardLogic)'
            payload: {
                containerWidth: any
                columns: any
            }
        }
        saveLayouts: () => {
            type: 'save layouts (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        updateItemColor: (
            id: any,
            color: any
        ) => {
            type: 'update item color (scenes.dashboard.dashboardLogic)'
            payload: {
                id: any
                color: any
            }
        }
        enableDragging: () => {
            type: 'enable dragging (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        enableWobblyDragging: () => {
            type: 'enable wobbly dragging (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        disableDragging: () => {
            type: 'disable dragging (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        refreshDashboardItem: (
            id: any
        ) => {
            type: 'refresh dashboard item (scenes.dashboard.dashboardLogic)'
            payload: {
                id: any
            }
        }
        refreshAllDashboardItems: () => {
            type: 'refresh all dashboard items (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        updateAndRefreshDashboard: () => {
            type: 'update and refresh dashboard (scenes.dashboard.dashboardLogic)'
            payload: {
                value: boolean
            }
        }
        loadDashboardItems: () => {
            type: 'load dashboard items (scenes.dashboard.dashboardLogic)'
            payload: any
        }
        loadDashboardItemsSuccess: (allItems: {}) => {
            type: 'load dashboard items success (scenes.dashboard.dashboardLogic)'
            payload: {
                allItems: {}
            }
        }
        loadDashboardItemsFailure: (
            error: string
        ) => {
            type: 'load dashboard items failure (scenes.dashboard.dashboardLogic)'
            payload: {
                error: string
            }
        }
        updateDashboard: (
            filters: any
        ) => {
            type: 'update dashboard (scenes.dashboard.dashboardLogic)'
            payload: any
        }
        updateDashboardSuccess: (allItems: {}) => {
            type: 'update dashboard success (scenes.dashboard.dashboardLogic)'
            payload: {
                allItems: {}
            }
        }
        updateDashboardFailure: (
            error: string
        ) => {
            type: 'update dashboard failure (scenes.dashboard.dashboardLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'add new dashboard (scenes.dashboard.dashboardLogic)': 'addNewDashboard'
        'rename dashboard (scenes.dashboard.dashboardLogic)': 'renameDashboard'
        'set is shared dashboard (scenes.dashboard.dashboardLogic)': 'setIsSharedDashboard'
        'update layouts (scenes.dashboard.dashboardLogic)': 'updateLayouts'
        'update container width (scenes.dashboard.dashboardLogic)': 'updateContainerWidth'
        'save layouts (scenes.dashboard.dashboardLogic)': 'saveLayouts'
        'update item color (scenes.dashboard.dashboardLogic)': 'updateItemColor'
        'enable dragging (scenes.dashboard.dashboardLogic)': 'enableDragging'
        'enable wobbly dragging (scenes.dashboard.dashboardLogic)': 'enableWobblyDragging'
        'disable dragging (scenes.dashboard.dashboardLogic)': 'disableDragging'
        'refresh dashboard item (scenes.dashboard.dashboardLogic)': 'refreshDashboardItem'
        'refresh all dashboard items (scenes.dashboard.dashboardLogic)': 'refreshAllDashboardItems'
        'update and refresh dashboard (scenes.dashboard.dashboardLogic)': 'updateAndRefreshDashboard'
        'load dashboard items (scenes.dashboard.dashboardLogic)': 'loadDashboardItems'
        'load dashboard items success (scenes.dashboard.dashboardLogic)': 'loadDashboardItemsSuccess'
        'load dashboard items failure (scenes.dashboard.dashboardLogic)': 'loadDashboardItemsFailure'
        'update dashboard (scenes.dashboard.dashboardLogic)': 'updateDashboard'
        'update dashboard success (scenes.dashboard.dashboardLogic)': 'updateDashboardSuccess'
        'update dashboard failure (scenes.dashboard.dashboardLogic)': 'updateDashboardFailure'
    }
    actionTypes: {
        addNewDashboard: 'add new dashboard (scenes.dashboard.dashboardLogic)'
        renameDashboard: 'rename dashboard (scenes.dashboard.dashboardLogic)'
        setIsSharedDashboard: 'set is shared dashboard (scenes.dashboard.dashboardLogic)'
        updateLayouts: 'update layouts (scenes.dashboard.dashboardLogic)'
        updateContainerWidth: 'update container width (scenes.dashboard.dashboardLogic)'
        saveLayouts: 'save layouts (scenes.dashboard.dashboardLogic)'
        updateItemColor: 'update item color (scenes.dashboard.dashboardLogic)'
        enableDragging: 'enable dragging (scenes.dashboard.dashboardLogic)'
        enableWobblyDragging: 'enable wobbly dragging (scenes.dashboard.dashboardLogic)'
        disableDragging: 'disable dragging (scenes.dashboard.dashboardLogic)'
        refreshDashboardItem: 'refresh dashboard item (scenes.dashboard.dashboardLogic)'
        refreshAllDashboardItems: 'refresh all dashboard items (scenes.dashboard.dashboardLogic)'
        updateAndRefreshDashboard: 'update and refresh dashboard (scenes.dashboard.dashboardLogic)'
        loadDashboardItems: 'load dashboard items (scenes.dashboard.dashboardLogic)'
        loadDashboardItemsSuccess: 'load dashboard items success (scenes.dashboard.dashboardLogic)'
        loadDashboardItemsFailure: 'load dashboard items failure (scenes.dashboard.dashboardLogic)'
        updateDashboard: 'update dashboard (scenes.dashboard.dashboardLogic)'
        updateDashboardSuccess: 'update dashboard success (scenes.dashboard.dashboardLogic)'
        updateDashboardFailure: 'update dashboard failure (scenes.dashboard.dashboardLogic)'
    }
    actions: {
        addNewDashboard: () => void
        renameDashboard: () => void
        setIsSharedDashboard: (id: any, isShared: any) => void
        updateLayouts: (layouts: any) => void
        updateContainerWidth: (containerWidth: any, columns: any) => void
        saveLayouts: () => void
        updateItemColor: (id: any, color: any) => void
        enableDragging: () => void
        enableWobblyDragging: () => void
        disableDragging: () => void
        refreshDashboardItem: (id: any) => void
        refreshAllDashboardItems: () => void
        updateAndRefreshDashboard: () => void
        loadDashboardItems: () => void
        loadDashboardItemsSuccess: (allItems: {}) => void
        loadDashboardItemsFailure: (error: string) => void
        updateDashboard: (filters: any) => void
        updateDashboardSuccess: (allItems: {}) => void
        updateDashboardFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        allItems: {}
        allItemsLoading: boolean
        draggingEnabled: () => 'on' | 'off'
        containerWidth: null
        columns: null
    }
    events: {
        afterMount: () => void
        beforeUnmount: () => void
    }
    key: any
    listeners: {
        addNewDashboard: ((
            action: {
                type: 'add new dashboard (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setIsSharedDashboard: ((
            action: {
                type: 'set is shared dashboard (scenes.dashboard.dashboardLogic)'
                payload: {
                    id: any
                    isShared: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        renameDashboard: ((
            action: {
                type: 'rename dashboard (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateLayouts: ((
            action: {
                type: 'update layouts (scenes.dashboard.dashboardLogic)'
                payload: {
                    layouts: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveLayouts: ((
            action: {
                type: 'save layouts (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateItemColor: ((
            action: {
                type: 'update item color (scenes.dashboard.dashboardLogic)'
                payload: {
                    id: any
                    color: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        enableWobblyDragging: ((
            action: {
                type: 'enable wobbly dragging (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        enableDragging: ((
            action: {
                type: 'enable dragging (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        disableDragging: ((
            action: {
                type: 'disable dragging (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        refreshDashboardItem: ((
            action: {
                type: 'refresh dashboard item (scenes.dashboard.dashboardLogic)'
                payload: {
                    id: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        refreshAllDashboardItems: ((
            action: {
                type: 'refresh all dashboard items (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateAndRefreshDashboard: ((
            action: {
                type: 'update and refresh dashboard (scenes.dashboard.dashboardLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'dashboard', 'dashboardLogic']
    pathString: 'scenes.dashboard.dashboardLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        allItems: {}
        allItemsLoading: boolean
        draggingEnabled: () => 'on' | 'off'
        containerWidth: null
        columns: null
    }
    reducerOptions: {}
    reducers: {
        allItems: (state: {}, action: any, fullState: any) => {}
        allItemsLoading: (state: boolean, action: any, fullState: any) => boolean
        draggingEnabled: (state: () => 'on' | 'off', action: any, fullState: any) => () => 'on' | 'off'
        containerWidth: (state: null, action: any, fullState: any) => null
        columns: (state: null, action: any, fullState: any) => null
    }
    selector: (
        state: any
    ) => {
        allItems: {}
        allItemsLoading: boolean
        draggingEnabled: () => 'on' | 'off'
        containerWidth: null
        columns: null
    }
    selectors: {
        allItems: (state: any, props?: any) => {}
        allItemsLoading: (state: any, props?: any) => boolean
        draggingEnabled: (state: any, props?: any) => () => 'on' | 'off'
        containerWidth: (state: any, props?: any) => null
        columns: (state: any, props?: any) => null
        items: (state: any, props?: any) => any
        itemsLoading: (state: any, props?: any) => any
        dashboard: (state: any, props?: any) => any
        breakpoints: (state: any, props?: any) => { lg: number; sm: number; xs: number; xxs: number }
        cols: (state: any, props?: any) => { lg: number; sm: number; xs: number; xxs: number }
        sizeKey: (state: any, props?: any) => string | undefined
        layouts: (state: any, props?: any) => {}
        layout: (state: any, props?: any) => any
        layoutForItem: (state: any, props?: any) => {}
    }
    sharedListeners: {}
    values: {
        allItems: {}
        allItemsLoading: boolean
        draggingEnabled: () => 'on' | 'off'
        containerWidth: null
        columns: null
        items: any
        itemsLoading: any
        dashboard: any
        breakpoints: { lg: number; sm: number; xs: number; xxs: number }
        cols: { lg: number; sm: number; xs: number; xxs: number }
        sizeKey: string | undefined
        layouts: {}
        layout: any
        layoutForItem: {}
    }
    _isKea: true
    _isKeaWithKey: true
}
