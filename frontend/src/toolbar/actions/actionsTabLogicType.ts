// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface actionsTabLogicType<ActionType, ActionForm, ActionFormInstance, AntdFieldData> extends Logic {
    actionCreators: {
        setForm: (
            form: ActionFormInstance
        ) => {
            type: 'set form (toolbar.actions.actionsTabLogic)'
            payload: {
                form: ActionFormInstance
            }
        }
        selectAction: (
            id: number | null
        ) => {
            type: 'select action (toolbar.actions.actionsTabLogic)'
            payload: {
                id: number | null
            }
        }
        newAction: (
            element?: HTMLElement
        ) => {
            type: 'new action (toolbar.actions.actionsTabLogic)'
            payload: {
                element: HTMLElement | null
            }
        }
        inspectForElementWithIndex: (
            index: number | null
        ) => {
            type: 'inspect for element with index (toolbar.actions.actionsTabLogic)'
            payload: {
                index: number | null
            }
        }
        inspectElementSelected: (
            element: HTMLElement,
            index: number | null
        ) => {
            type: 'inspect element selected (toolbar.actions.actionsTabLogic)'
            payload: {
                element: HTMLElement
                index: number | null
            }
        }
        setEditingFields: (
            editingFields: AntdFieldData[]
        ) => {
            type: 'set editing fields (toolbar.actions.actionsTabLogic)'
            payload: {
                editingFields: AntdFieldData[]
            }
        }
        incrementCounter: () => {
            type: 'increment counter (toolbar.actions.actionsTabLogic)'
            payload: {
                value: boolean
            }
        }
        saveAction: (
            formValues: ActionForm
        ) => {
            type: 'save action (toolbar.actions.actionsTabLogic)'
            payload: {
                formValues: ActionForm
            }
        }
        deleteAction: () => {
            type: 'delete action (toolbar.actions.actionsTabLogic)'
            payload: {
                value: boolean
            }
        }
        showButtonActions: () => {
            type: 'show button actions (toolbar.actions.actionsTabLogic)'
            payload: {
                value: boolean
            }
        }
        hideButtonActions: () => {
            type: 'hide button actions (toolbar.actions.actionsTabLogic)'
            payload: {
                value: boolean
            }
        }
        setShowActionsTooltip: (
            showActionsTooltip: boolean
        ) => {
            type: 'set show actions tooltip (toolbar.actions.actionsTabLogic)'
            payload: {
                showActionsTooltip: boolean
            }
        }
    }
    actionKeys: {
        'set form (toolbar.actions.actionsTabLogic)': 'setForm'
        'select action (toolbar.actions.actionsTabLogic)': 'selectAction'
        'new action (toolbar.actions.actionsTabLogic)': 'newAction'
        'inspect for element with index (toolbar.actions.actionsTabLogic)': 'inspectForElementWithIndex'
        'inspect element selected (toolbar.actions.actionsTabLogic)': 'inspectElementSelected'
        'set editing fields (toolbar.actions.actionsTabLogic)': 'setEditingFields'
        'increment counter (toolbar.actions.actionsTabLogic)': 'incrementCounter'
        'save action (toolbar.actions.actionsTabLogic)': 'saveAction'
        'delete action (toolbar.actions.actionsTabLogic)': 'deleteAction'
        'show button actions (toolbar.actions.actionsTabLogic)': 'showButtonActions'
        'hide button actions (toolbar.actions.actionsTabLogic)': 'hideButtonActions'
        'set show actions tooltip (toolbar.actions.actionsTabLogic)': 'setShowActionsTooltip'
    }
    actionTypes: {
        setForm: 'set form (toolbar.actions.actionsTabLogic)'
        selectAction: 'select action (toolbar.actions.actionsTabLogic)'
        newAction: 'new action (toolbar.actions.actionsTabLogic)'
        inspectForElementWithIndex: 'inspect for element with index (toolbar.actions.actionsTabLogic)'
        inspectElementSelected: 'inspect element selected (toolbar.actions.actionsTabLogic)'
        setEditingFields: 'set editing fields (toolbar.actions.actionsTabLogic)'
        incrementCounter: 'increment counter (toolbar.actions.actionsTabLogic)'
        saveAction: 'save action (toolbar.actions.actionsTabLogic)'
        deleteAction: 'delete action (toolbar.actions.actionsTabLogic)'
        showButtonActions: 'show button actions (toolbar.actions.actionsTabLogic)'
        hideButtonActions: 'hide button actions (toolbar.actions.actionsTabLogic)'
        setShowActionsTooltip: 'set show actions tooltip (toolbar.actions.actionsTabLogic)'
    }
    actions: {
        setForm: (form: ActionFormInstance) => void
        selectAction: (id: number | null) => void
        newAction: (element?: HTMLElement) => void
        inspectForElementWithIndex: (index: number | null) => void
        inspectElementSelected: (element: HTMLElement, index: number | null) => void
        setEditingFields: (editingFields: AntdFieldData[]) => void
        incrementCounter: () => void
        saveAction: (formValues: ActionForm) => void
        deleteAction: () => void
        showButtonActions: () => void
        hideButtonActions: () => void
        setShowActionsTooltip: (showActionsTooltip: boolean) => void
    }
    constants: {}
    defaults: {
        buttonActionsVisible: boolean
        selectedActionId: number | 'new' | null
        newActionForElement: HTMLElement | null
        inspectingElement: number | null
        editingFields: AntdFieldData[] | null
        form: ActionFormInstance | null
        counter: number
        showActionsTooltip: boolean
    }
    events: {}
    key: undefined
    listeners: {
        selectAction: ((
            action: {
                type: 'select action (toolbar.actions.actionsTabLogic)'
                payload: {
                    id: number | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        inspectElementSelected: ((
            action: {
                type: 'inspect element selected (toolbar.actions.actionsTabLogic)'
                payload: {
                    element: HTMLElement
                    index: number | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveAction: ((
            action: {
                type: 'save action (toolbar.actions.actionsTabLogic)'
                payload: {
                    formValues: ActionForm
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteAction: ((
            action: {
                type: 'delete action (toolbar.actions.actionsTabLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        showButtonActions: ((
            action: {
                type: 'show button actions (toolbar.actions.actionsTabLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        hideButtonActions: ((
            action: {
                type: 'hide button actions (toolbar.actions.actionsTabLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        'get actions success (toolbar.actions.actionsLogic)': ((
            action: {
                type: 'get actions success (toolbar.actions.actionsLogic)'
                payload: {
                    allActions: ActionType[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setShowActionsTooltip: ((
            action: {
                type: 'set show actions tooltip (toolbar.actions.actionsTabLogic)'
                payload: {
                    showActionsTooltip: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['toolbar', 'actions', 'actionsTabLogic']
    pathString: 'toolbar.actions.actionsTabLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        buttonActionsVisible: boolean
        selectedActionId: number | 'new' | null
        newActionForElement: HTMLElement | null
        inspectingElement: number | null
        editingFields: AntdFieldData[] | null
        form: ActionFormInstance | null
        counter: number
        showActionsTooltip: boolean
    }
    reducerOptions: {}
    reducers: {
        buttonActionsVisible: (state: boolean, action: any, fullState: any) => boolean
        selectedActionId: (state: number | 'new' | null, action: any, fullState: any) => number | 'new' | null
        newActionForElement: (state: HTMLElement | null, action: any, fullState: any) => HTMLElement | null
        inspectingElement: (state: number | null, action: any, fullState: any) => number | null
        editingFields: (state: AntdFieldData[] | null, action: any, fullState: any) => AntdFieldData[] | null
        form: (state: ActionFormInstance | null, action: any, fullState: any) => ActionFormInstance | null
        counter: (state: number, action: any, fullState: any) => number
        showActionsTooltip: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        buttonActionsVisible: boolean
        selectedActionId: number | 'new' | null
        newActionForElement: HTMLElement | null
        inspectingElement: number | null
        editingFields: AntdFieldData[] | null
        form: ActionFormInstance | null
        counter: number
        showActionsTooltip: boolean
    }
    selectors: {
        buttonActionsVisible: (state: any, props?: any) => boolean
        selectedActionId: (state: any, props?: any) => number | 'new' | null
        newActionForElement: (state: any, props?: any) => HTMLElement | null
        inspectingElement: (state: any, props?: any) => number | null
        editingFields: (state: any, props?: any) => AntdFieldData[] | null
        form: (state: any, props?: any) => ActionFormInstance | null
        counter: (state: any, props?: any) => number
        showActionsTooltip: (state: any, props?: any) => boolean
        selectedAction: (state: any, props?: any) => ActionType | null
        initialValuesForForm: (state: any, props?: any) => ActionForm
        selectedEditedAction: (state: any, props?: any) => ActionForm
    }
    sharedListeners: {}
    values: {
        buttonActionsVisible: boolean
        selectedActionId: number | 'new' | null
        newActionForElement: HTMLElement | null
        inspectingElement: number | null
        editingFields: AntdFieldData[] | null
        form: ActionFormInstance | null
        counter: number
        showActionsTooltip: boolean
        selectedAction: ActionType | null
        initialValuesForForm: ActionForm
        selectedEditedAction: ActionForm
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        selectedAction: (
            selectedActionId: number | 'new' | null,
            newActionForElement: HTMLElement | null,
            allActions: ActionType[]
        ) => ActionType | null
        initialValuesForForm: (selectedAction: ActionType | null) => ActionForm
        selectedEditedAction: (
            selectedAction: ActionType | null,
            initialValuesForForm: ActionForm,
            form: ActionFormInstance | null,
            editingFields: AntdFieldData[] | null,
            inspectingElement: number | null,
            counter: number
        ) => ActionForm
    }
    __keaTypeGenInternalReducerActions: {
        'get actions success (toolbar.actions.actionsLogic)': (
            allActions: ActionType[]
        ) => {
            type: 'get actions success (toolbar.actions.actionsLogic)'
            payload: {
                allActions: ActionType[]
            }
        }
    }
}
