// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface dashboardItemsModelType<DashboardItemType> extends Logic {
    actionCreators: {
        renameDashboardItem: (
            item: DashboardItemType
        ) => {
            type: 'rename dashboard item (models.dashboardItemsModel)'
            payload: {
                item: DashboardItemType
            }
        }
        renameDashboardItemSuccess: (
            item: DashboardItemType
        ) => {
            type: 'rename dashboard item success (models.dashboardItemsModel)'
            payload: {
                item: DashboardItemType
            }
        }
        duplicateDashboardItem: (
            item: DashboardItemType,
            dashboardId?: number,
            move?: boolean
        ) => {
            type: 'duplicate dashboard item (models.dashboardItemsModel)'
            payload: {
                item: DashboardItemType
                dashboardId: number | undefined
                move: boolean
            }
        }
        duplicateDashboardItemSuccess: (
            item: DashboardItemType
        ) => {
            type: 'duplicate dashboard item success (models.dashboardItemsModel)'
            payload: {
                item: DashboardItemType
            }
        }
        refreshAllDashboardItems: (
            filters: Record<string, any>
        ) => {
            type: 'refresh all dashboard items (models.dashboardItemsModel)'
            payload: Record<string, any>
        }
    }
    actionKeys: {
        'rename dashboard item (models.dashboardItemsModel)': 'renameDashboardItem'
        'rename dashboard item success (models.dashboardItemsModel)': 'renameDashboardItemSuccess'
        'duplicate dashboard item (models.dashboardItemsModel)': 'duplicateDashboardItem'
        'duplicate dashboard item success (models.dashboardItemsModel)': 'duplicateDashboardItemSuccess'
        'refresh all dashboard items (models.dashboardItemsModel)': 'refreshAllDashboardItems'
    }
    actionTypes: {
        renameDashboardItem: 'rename dashboard item (models.dashboardItemsModel)'
        renameDashboardItemSuccess: 'rename dashboard item success (models.dashboardItemsModel)'
        duplicateDashboardItem: 'duplicate dashboard item (models.dashboardItemsModel)'
        duplicateDashboardItemSuccess: 'duplicate dashboard item success (models.dashboardItemsModel)'
        refreshAllDashboardItems: 'refresh all dashboard items (models.dashboardItemsModel)'
    }
    actions: {
        renameDashboardItem: (item: DashboardItemType) => void
        renameDashboardItemSuccess: (item: DashboardItemType) => void
        duplicateDashboardItem: (item: DashboardItemType, dashboardId?: number, move?: boolean) => void
        duplicateDashboardItemSuccess: (item: DashboardItemType) => void
        refreshAllDashboardItems: (filters: Record<string, any>) => void
    }
    constants: {}
    defaults: {}
    events: {}
    key: undefined
    listeners: {
        renameDashboardItem: ((
            action: {
                type: 'rename dashboard item (models.dashboardItemsModel)'
                payload: {
                    item: DashboardItemType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        duplicateDashboardItem: ((
            action: {
                type: 'duplicate dashboard item (models.dashboardItemsModel)'
                payload: {
                    item: DashboardItemType
                    dashboardId: number | undefined
                    move: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['models', 'dashboardItemsModel']
    pathString: 'models.dashboardItemsModel'
    props: Record<string, unknown>
    reducer: (state: any, action: () => any, fullState: any) => {}
    reducerOptions: {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {}
    sharedListeners: {}
    values: {}
    _isKea: true
    _isKeaWithKey: false
}
