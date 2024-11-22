// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface toolbarButtonLogicType extends Logic {
    actionCreators: {
        showHeatmapInfo: () => {
            type: 'show heatmap info (toolbar.button.toolbarButtonLogic)'
            payload: {
                value: boolean
            }
        }
        hideHeatmapInfo: () => {
            type: 'hide heatmap info (toolbar.button.toolbarButtonLogic)'
            payload: {
                value: boolean
            }
        }
        showActionsInfo: () => {
            type: 'show actions info (toolbar.button.toolbarButtonLogic)'
            payload: {
                value: boolean
            }
        }
        hideActionsInfo: () => {
            type: 'hide actions info (toolbar.button.toolbarButtonLogic)'
            payload: {
                value: boolean
            }
        }
        setExtensionPercentage: (
            percentage: number
        ) => {
            type: 'set extension percentage (toolbar.button.toolbarButtonLogic)'
            payload: {
                percentage: number
            }
        }
        saveDragPosition: (
            x: number,
            y: number
        ) => {
            type: 'save drag position (toolbar.button.toolbarButtonLogic)'
            payload: {
                x: number
                y: number
            }
        }
        saveHeatmapPosition: (
            x: number,
            y: number
        ) => {
            type: 'save heatmap position (toolbar.button.toolbarButtonLogic)'
            payload: {
                x: number
                y: number
            }
        }
        saveActionsPosition: (
            x: number,
            y: number
        ) => {
            type: 'save actions position (toolbar.button.toolbarButtonLogic)'
            payload: {
                x: number
                y: number
            }
        }
    }
    actionKeys: {
        'show heatmap info (toolbar.button.toolbarButtonLogic)': 'showHeatmapInfo'
        'hide heatmap info (toolbar.button.toolbarButtonLogic)': 'hideHeatmapInfo'
        'show actions info (toolbar.button.toolbarButtonLogic)': 'showActionsInfo'
        'hide actions info (toolbar.button.toolbarButtonLogic)': 'hideActionsInfo'
        'set extension percentage (toolbar.button.toolbarButtonLogic)': 'setExtensionPercentage'
        'save drag position (toolbar.button.toolbarButtonLogic)': 'saveDragPosition'
        'save heatmap position (toolbar.button.toolbarButtonLogic)': 'saveHeatmapPosition'
        'save actions position (toolbar.button.toolbarButtonLogic)': 'saveActionsPosition'
    }
    actionTypes: {
        showHeatmapInfo: 'show heatmap info (toolbar.button.toolbarButtonLogic)'
        hideHeatmapInfo: 'hide heatmap info (toolbar.button.toolbarButtonLogic)'
        showActionsInfo: 'show actions info (toolbar.button.toolbarButtonLogic)'
        hideActionsInfo: 'hide actions info (toolbar.button.toolbarButtonLogic)'
        setExtensionPercentage: 'set extension percentage (toolbar.button.toolbarButtonLogic)'
        saveDragPosition: 'save drag position (toolbar.button.toolbarButtonLogic)'
        saveHeatmapPosition: 'save heatmap position (toolbar.button.toolbarButtonLogic)'
        saveActionsPosition: 'save actions position (toolbar.button.toolbarButtonLogic)'
    }
    actions: {
        showHeatmapInfo: () => void
        hideHeatmapInfo: () => void
        showActionsInfo: () => void
        hideActionsInfo: () => void
        setExtensionPercentage: (percentage: number) => void
        saveDragPosition: (x: number, y: number) => void
        saveHeatmapPosition: (x: number, y: number) => void
        saveActionsPosition: (x: number, y: number) => void
    }
    constants: {}
    defaults: {
        windowHeight: number
        windowWidth: number
        heatmapInfoVisible: boolean
        actionsInfoVisible: boolean
        extensionPercentage: number
        lastDragPosition: null | {
            x: number
            y: number
        }
        heatmapPosition: {
            x: number
            y: number
        }
        actionsPosition: {
            x: number
            y: number
        }
    }
    events: {}
    key: undefined
    listeners: {
        hideActionsInfo: ((
            action: {
                type: 'hide actions info (toolbar.button.toolbarButtonLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['toolbar', 'button', 'toolbarButtonLogic']
    pathString: 'toolbar.button.toolbarButtonLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        windowHeight: number
        windowWidth: number
        heatmapInfoVisible: boolean
        actionsInfoVisible: boolean
        extensionPercentage: number
        lastDragPosition: null | {
            x: number
            y: number
        }
        heatmapPosition: {
            x: number
            y: number
        }
        actionsPosition: {
            x: number
            y: number
        }
    }
    reducerOptions: {
        lastDragPosition: {
            persist: boolean
        }
    }
    reducers: {
        windowHeight: (state: number, action: any, fullState: any) => number
        windowWidth: (state: number, action: any, fullState: any) => number
        heatmapInfoVisible: (state: boolean, action: any, fullState: any) => boolean
        actionsInfoVisible: (state: boolean, action: any, fullState: any) => boolean
        extensionPercentage: (state: number, action: any, fullState: any) => number
        lastDragPosition: (
            state: null | {
                x: number
                y: number
            },
            action: any,
            fullState: any
        ) => null | {
            x: number
            y: number
        }
        heatmapPosition: (
            state: {
                x: number
                y: number
            },
            action: any,
            fullState: any
        ) => {
            x: number
            y: number
        }
        actionsPosition: (
            state: {
                x: number
                y: number
            },
            action: any,
            fullState: any
        ) => {
            x: number
            y: number
        }
    }
    selector: (
        state: any
    ) => {
        windowHeight: number
        windowWidth: number
        heatmapInfoVisible: boolean
        actionsInfoVisible: boolean
        extensionPercentage: number
        lastDragPosition: null | {
            x: number
            y: number
        }
        heatmapPosition: {
            x: number
            y: number
        }
        actionsPosition: {
            x: number
            y: number
        }
    }
    selectors: {
        windowHeight: (state: any, props?: any) => number
        windowWidth: (state: any, props?: any) => number
        heatmapInfoVisible: (state: any, props?: any) => boolean
        actionsInfoVisible: (state: any, props?: any) => boolean
        extensionPercentage: (state: any, props?: any) => number
        lastDragPosition: (
            state: any,
            props?: any
        ) => null | {
            x: number
            y: number
        }
        heatmapPosition: (
            state: any,
            props?: any
        ) => {
            x: number
            y: number
        }
        actionsPosition: (
            state: any,
            props?: any
        ) => {
            x: number
            y: number
        }
        dragPosition: (state: any, props?: any) => { x: number; y: number }
        toolbarListVerticalPadding: (state: any, props?: any) => number
        helpButtonOnTop: (state: any, props?: any) => boolean
        side: (state: any, props?: any) => 'left' | 'right'
        closeDistance: (state: any, props?: any) => number
        closeRotation: (state: any, props?: any) => number
        inspectExtensionPercentage: (state: any, props?: any) => number
        heatmapExtensionPercentage: (state: any, props?: any) => number
        heatmapWindowVisible: (state: any, props?: any) => boolean
        actionsExtensionPercentage: (state: any, props?: any) => number
        actionsWindowVisible: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        windowHeight: number
        windowWidth: number
        heatmapInfoVisible: boolean
        actionsInfoVisible: boolean
        extensionPercentage: number
        lastDragPosition: null | {
            x: number
            y: number
        }
        heatmapPosition: {
            x: number
            y: number
        }
        actionsPosition: {
            x: number
            y: number
        }
        dragPosition: { x: number; y: number }
        toolbarListVerticalPadding: number
        helpButtonOnTop: boolean
        side: 'left' | 'right'
        closeDistance: number
        closeRotation: number
        inspectExtensionPercentage: number
        heatmapExtensionPercentage: number
        heatmapWindowVisible: boolean
        actionsExtensionPercentage: number
        actionsWindowVisible: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        dragPosition: (
            lastDragPosition: {
                x: number
                y: number
            } | null,
            windowWidth: number,
            windowHeight: number
        ) => { x: number; y: number }
        toolbarListVerticalPadding: (
            dragPosition: {
                x: number
                y: number
            },
            windowHeight: number
        ) => number
        helpButtonOnTop: (
            dragPosition: {
                x: number
                y: number
            },
            windowHeight: number
        ) => boolean
        side: (
            dragPosition: {
                x: number
                y: number
            },
            windowWidth: number
        ) => 'left' | 'right'
        closeDistance: (
            dragPosition: {
                x: number
                y: number
            },
            windowWidth: number
        ) => number
        closeRotation: (
            dragPosition: {
                x: number
                y: number
            },
            windowWidth: number
        ) => number
        inspectExtensionPercentage: (inspectEnabled: boolean, extensionPercentage: number) => number
        heatmapExtensionPercentage: (heatmapEnabled: boolean, extensionPercentage: number) => number
        heatmapWindowVisible: (heatmapInfoVisible: boolean, heatmapEnabled: boolean) => boolean
        actionsExtensionPercentage: (buttonActionsVisible: boolean, extensionPercentage: number) => number
        actionsWindowVisible: (actionsInfoVisible: boolean, buttonActionsVisible: boolean) => boolean
    }
    __keaTypeGenInternalReducerActions: {
        'disable heatmap (toolbar.elements.heatmapLogic)': () => {
            type: 'disable heatmap (toolbar.elements.heatmapLogic)'
            payload: {
                value: boolean
            }
        }
        'enable heatmap (toolbar.elements.heatmapLogic)': () => {
            type: 'enable heatmap (toolbar.elements.heatmapLogic)'
            payload: {
                value: boolean
            }
        }
        'show button actions (toolbar.actions.actionsTabLogic)': () => {
            type: 'show button actions (toolbar.actions.actionsTabLogic)'
            payload: {
                value: boolean
            }
        }
        'hide button actions (toolbar.actions.actionsTabLogic)': () => {
            type: 'hide button actions (toolbar.actions.actionsTabLogic)'
            payload: {
                value: boolean
            }
        }
    }
}
