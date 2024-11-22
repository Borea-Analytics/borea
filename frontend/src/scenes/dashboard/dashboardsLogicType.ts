// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface dashboardsLogicType extends Logic {
    actionCreators: {
        addNewDashboard: () => {
            type: 'add new dashboard (scenes.dashboard.dashboardsLogic)'
            payload: {
                value: boolean
            }
        }
        setNewDashboardDrawer: (
            shown: any
        ) => {
            type: 'set new dashboard drawer (scenes.dashboard.dashboardsLogic)'
            payload: {
                shown: any
            }
        }
    }
    actionKeys: {
        'add new dashboard (scenes.dashboard.dashboardsLogic)': 'addNewDashboard'
        'set new dashboard drawer (scenes.dashboard.dashboardsLogic)': 'setNewDashboardDrawer'
    }
    actionTypes: {
        addNewDashboard: 'add new dashboard (scenes.dashboard.dashboardsLogic)'
        setNewDashboardDrawer: 'set new dashboard drawer (scenes.dashboard.dashboardsLogic)'
    }
    actions: {
        addNewDashboard: () => void
        setNewDashboardDrawer: (shown: any) => void
    }
    constants: {}
    defaults: {
        newDashboardDrawer: boolean
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'dashboard', 'dashboardsLogic']
    pathString: 'scenes.dashboard.dashboardsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        newDashboardDrawer: boolean
    }
    reducerOptions: {}
    reducers: {
        newDashboardDrawer: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        newDashboardDrawer: boolean
    }
    selectors: {
        newDashboardDrawer: (state: any, props?: any) => boolean
        dashboards: (state: any, props?: any) => DashboardType[]
    }
    sharedListeners: {}
    values: {
        newDashboardDrawer: boolean
        dashboards: DashboardType[]
    }
    _isKea: true
    _isKeaWithKey: false
}
