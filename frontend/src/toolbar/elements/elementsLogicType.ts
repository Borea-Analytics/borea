// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface elementsLogicType<
    ActionStepType,
    ActionForm,
    ActionType,
    ElementWithMetadata,
    ActionElementWithMetadata,
    ActionElementMap,
    ElementMap
> extends Logic {
    actionCreators: {
        enableInspect: () => {
            type: 'enable inspect (toolbar.elements.elementsLogic)'
            payload: {
                value: boolean
            }
        }
        disableInspect: () => {
            type: 'disable inspect (toolbar.elements.elementsLogic)'
            payload: {
                value: boolean
            }
        }
        selectElement: (
            element: HTMLElement | null
        ) => {
            type: 'select element (toolbar.elements.elementsLogic)'
            payload: {
                element: HTMLElement | null
            }
        }
        createAction: (
            element: HTMLElement
        ) => {
            type: 'create action (toolbar.elements.elementsLogic)'
            payload: {
                element: HTMLElement
            }
        }
        updateRects: () => {
            type: 'update rects (toolbar.elements.elementsLogic)'
            payload: {
                value: boolean
            }
        }
        setHoverElement: (
            element: HTMLElement | null
        ) => {
            type: 'set hover element (toolbar.elements.elementsLogic)'
            payload: {
                element: HTMLElement | null
            }
        }
        setHighlightElement: (
            element: HTMLElement | null
        ) => {
            type: 'set highlight element (toolbar.elements.elementsLogic)'
            payload: {
                element: HTMLElement | null
            }
        }
        setSelectedElement: (
            element: HTMLElement | null
        ) => {
            type: 'set selected element (toolbar.elements.elementsLogic)'
            payload: {
                element: HTMLElement | null
            }
        }
    }
    actionKeys: {
        'enable inspect (toolbar.elements.elementsLogic)': 'enableInspect'
        'disable inspect (toolbar.elements.elementsLogic)': 'disableInspect'
        'select element (toolbar.elements.elementsLogic)': 'selectElement'
        'create action (toolbar.elements.elementsLogic)': 'createAction'
        'update rects (toolbar.elements.elementsLogic)': 'updateRects'
        'set hover element (toolbar.elements.elementsLogic)': 'setHoverElement'
        'set highlight element (toolbar.elements.elementsLogic)': 'setHighlightElement'
        'set selected element (toolbar.elements.elementsLogic)': 'setSelectedElement'
    }
    actionTypes: {
        enableInspect: 'enable inspect (toolbar.elements.elementsLogic)'
        disableInspect: 'disable inspect (toolbar.elements.elementsLogic)'
        selectElement: 'select element (toolbar.elements.elementsLogic)'
        createAction: 'create action (toolbar.elements.elementsLogic)'
        updateRects: 'update rects (toolbar.elements.elementsLogic)'
        setHoverElement: 'set hover element (toolbar.elements.elementsLogic)'
        setHighlightElement: 'set highlight element (toolbar.elements.elementsLogic)'
        setSelectedElement: 'set selected element (toolbar.elements.elementsLogic)'
    }
    actions: {
        enableInspect: () => void
        disableInspect: () => void
        selectElement: (element: HTMLElement | null) => void
        createAction: (element: HTMLElement) => void
        updateRects: () => void
        setHoverElement: (element: HTMLElement | null) => void
        setHighlightElement: (element: HTMLElement | null) => void
        setSelectedElement: (element: HTMLElement | null) => void
    }
    constants: {}
    defaults: {
        inspectEnabledRaw: boolean
        rectUpdateCounter: number
        hoverElement: HTMLElement | null
        highlightElement: HTMLElement | null
        selectedElement: HTMLElement | null
        enabledLast: null | 'inspect' | 'heatmap'
    }
    events: {
        afterMount: () => void
        beforeUnmount: () => void
    }
    key: undefined
    listeners: {
        enableInspect: ((
            action: {
                type: 'enable inspect (toolbar.elements.elementsLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        disableInspect: ((
            action: {
                type: 'disable inspect (toolbar.elements.elementsLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        selectElement: ((
            action: {
                type: 'select element (toolbar.elements.elementsLogic)'
                payload: {
                    element: HTMLElement | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        createAction: ((
            action: {
                type: 'create action (toolbar.elements.elementsLogic)'
                payload: {
                    element: HTMLElement
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['toolbar', 'elements', 'elementsLogic']
    pathString: 'toolbar.elements.elementsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        inspectEnabledRaw: boolean
        rectUpdateCounter: number
        hoverElement: HTMLElement | null
        highlightElement: HTMLElement | null
        selectedElement: HTMLElement | null
        enabledLast: null | 'inspect' | 'heatmap'
    }
    reducerOptions: {}
    reducers: {
        inspectEnabledRaw: (state: boolean, action: any, fullState: any) => boolean
        rectUpdateCounter: (state: number, action: any, fullState: any) => number
        hoverElement: (state: HTMLElement | null, action: any, fullState: any) => HTMLElement | null
        highlightElement: (state: HTMLElement | null, action: any, fullState: any) => HTMLElement | null
        selectedElement: (state: HTMLElement | null, action: any, fullState: any) => HTMLElement | null
        enabledLast: (state: null | 'inspect' | 'heatmap', action: any, fullState: any) => null | 'inspect' | 'heatmap'
    }
    selector: (
        state: any
    ) => {
        inspectEnabledRaw: boolean
        rectUpdateCounter: number
        hoverElement: HTMLElement | null
        highlightElement: HTMLElement | null
        selectedElement: HTMLElement | null
        enabledLast: null | 'inspect' | 'heatmap'
    }
    selectors: {
        inspectEnabledRaw: (state: any, props?: any) => boolean
        rectUpdateCounter: (state: any, props?: any) => number
        hoverElement: (state: any, props?: any) => HTMLElement | null
        highlightElement: (state: any, props?: any) => HTMLElement | null
        selectedElement: (state: any, props?: any) => HTMLElement | null
        enabledLast: (state: any, props?: any) => null | 'inspect' | 'heatmap'
        inspectEnabled: (state: any, props?: any) => boolean
        heatmapEnabled: (state: any, props?: any) => boolean
        heatmapElements: (state: any, props?: any) => ElementWithMetadata[]
        allInspectElements: (state: any, props?: any) => HTMLElement[]
        inspectElements: (state: any, props?: any) => ElementWithMetadata[]
        displayActionElements: (state: any, props?: any) => boolean
        allActionElements: (state: any, props?: any) => ElementWithMetadata[]
        actionElements: (state: any, props?: any) => ElementWithMetadata[]
        elementMap: (state: any, props?: any) => ElementMap
        actionsForElementMap: (state: any, props?: any) => ActionElementMap
        elementsWithActions: (state: any, props?: any) => HTMLElement[]
        actionsListElements: (state: any, props?: any) => ActionElementWithMetadata[]
        elementsToDisplayRaw: (state: any, props?: any) => ElementWithMetadata[]
        elementsToDisplay: (state: any, props?: any) => ElementWithMetadata[]
        labelsToDisplay: (state: any, props?: any) => ElementWithMetadata[]
        selectedElementMeta: (
            state: any,
            props?: any
        ) => {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
        hoverElementMeta: (
            state: any,
            props?: any
        ) => {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
        highlightElementMeta: (
            state: any,
            props?: any
        ) => {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
    }
    sharedListeners: {}
    values: {
        inspectEnabledRaw: boolean
        rectUpdateCounter: number
        hoverElement: HTMLElement | null
        highlightElement: HTMLElement | null
        selectedElement: HTMLElement | null
        enabledLast: null | 'inspect' | 'heatmap'
        inspectEnabled: boolean
        heatmapEnabled: boolean
        heatmapElements: ElementWithMetadata[]
        allInspectElements: HTMLElement[]
        inspectElements: ElementWithMetadata[]
        displayActionElements: boolean
        allActionElements: ElementWithMetadata[]
        actionElements: ElementWithMetadata[]
        elementMap: ElementMap
        actionsForElementMap: ActionElementMap
        elementsWithActions: HTMLElement[]
        actionsListElements: ActionElementWithMetadata[]
        elementsToDisplayRaw: ElementWithMetadata[]
        elementsToDisplay: ElementWithMetadata[]
        labelsToDisplay: ElementWithMetadata[]
        selectedElementMeta: {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
        hoverElementMeta: {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
        highlightElementMeta: {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        inspectEnabled: (
            inspectEnabledRaw: boolean,
            inspectingElement: number | null,
            buttonActionsVisible: boolean
        ) => boolean
        heatmapEnabled: (heatmapEnabled: boolean) => boolean
        heatmapElements: (
            countedElements: {
                position: number
                count: number
                element: HTMLElement
                hash: string
                selector: string
                actionStep?: ActionStepType | undefined
            }[],
            rectUpdateCounter: number,
            buttonVisible: boolean
        ) => ElementWithMetadata[]
        allInspectElements: (inspectEnabled: boolean, href: string) => HTMLElement[]
        inspectElements: (
            allInspectElements: HTMLElement[],
            rectUpdateCounter: number,
            buttonVisible: boolean
        ) => ElementWithMetadata[]
        displayActionElements: (buttonActionsVisible: boolean) => boolean
        allActionElements: (displayActionElements: boolean, selectedEditedAction: ActionForm) => ElementWithMetadata[]
        actionElements: (
            allActionElements: ElementWithMetadata[],
            rectUpdateCounter: number,
            buttonVisible: boolean
        ) => ElementWithMetadata[]
        elementMap: (
            heatmapElements: ElementWithMetadata[],
            inspectElements: ElementWithMetadata[],
            actionElements: ElementWithMetadata[],
            actionsListElements: ActionElementWithMetadata[]
        ) => ElementMap
        actionsForElementMap: (
            sortedActions: ActionType[],
            rectUpdateCounter: number,
            buttonVisible: boolean
        ) => ActionElementMap
        elementsWithActions: (actionsForElementMap: ActionElementMap) => HTMLElement[]
        actionsListElements: (actionsForElementMap: ActionElementMap) => ActionElementWithMetadata[]
        elementsToDisplayRaw: (
            displayActionElements: boolean,
            actionElements: ElementWithMetadata[],
            inspectElements: ElementWithMetadata[],
            actionsListElements: ActionElementWithMetadata[],
            selectedAction: ActionType | null
        ) => ElementWithMetadata[]
        elementsToDisplay: (elementsToDisplayRaw: ElementWithMetadata[]) => ElementWithMetadata[]
        labelsToDisplay: (
            displayActionElements: boolean,
            actionElements: ElementWithMetadata[],
            actionsListElements: ActionElementWithMetadata[],
            selectedAction: ActionType | null
        ) => ElementWithMetadata[]
        selectedElementMeta: (
            selectedElement: HTMLElement | null,
            elementMap: ElementMap,
            actionsForElementMap: ActionElementMap
        ) => {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
        hoverElementMeta: (
            hoverElement: HTMLElement | null,
            elementMap: ElementMap,
            actionsForElementMap: ActionElementMap
        ) => {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
        highlightElementMeta: (
            highlightElement: HTMLElement | null,
            elementMap: ElementMap,
            actionsForElementMap: ActionElementMap
        ) => {
            actionStep: ActionStepType
            actions: ActionElementWithMetadata[]
            element: HTMLElement
            rect?: DOMRect | undefined
            index?: number | undefined
            count?: number | undefined
        } | null
    }
    __keaTypeGenInternalReducerActions: {
        'disable heatmap (toolbar.elements.heatmapLogic)': () => {
            type: 'disable heatmap (toolbar.elements.heatmapLogic)'
            payload: {
                value: boolean
            }
        }
        'select action (toolbar.actions.actionsTabLogic)': (
            id: number | null
        ) => {
            type: 'select action (toolbar.actions.actionsTabLogic)'
            payload: {
                id: number | null
            }
        }
        'enable heatmap (toolbar.elements.heatmapLogic)': () => {
            type: 'enable heatmap (toolbar.elements.heatmapLogic)'
            payload: {
                value: boolean
            }
        }
    }
}
