// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface annotationsTableLogicType extends Logic {
    actionCreators: {
        loadAnnotations: () => {
            type: 'load annotations (scenes.annotations.logic)'
            payload: any
        }
        loadAnnotationsSuccess: (
            annotations: any[]
        ) => {
            type: 'load annotations success (scenes.annotations.logic)'
            payload: {
                annotations: any[]
            }
        }
        loadAnnotationsFailure: (
            error: string
        ) => {
            type: 'load annotations failure (scenes.annotations.logic)'
            payload: {
                error: string
            }
        }
        updateAnnotation: (
            id: any,
            content: any
        ) => {
            type: 'update annotation (scenes.annotations.logic)'
            payload: {
                id: any
                content: any
            }
        }
        deleteAnnotation: (
            id: any
        ) => {
            type: 'delete annotation (scenes.annotations.logic)'
            payload: {
                id: any
            }
        }
        restoreAnnotation: (
            id: any
        ) => {
            type: 'restore annotation (scenes.annotations.logic)'
            payload: {
                id: any
            }
        }
        loadAnnotationsNext: () => {
            type: 'load annotations next (scenes.annotations.logic)'
            payload: boolean
        }
        setNext: (
            next: any
        ) => {
            type: 'set next (scenes.annotations.logic)'
            payload: {
                next: any
            }
        }
        appendAnnotations: (
            annotations: any
        ) => {
            type: 'append annotations (scenes.annotations.logic)'
            payload: {
                annotations: any
            }
        }
    }
    actionKeys: {
        'load annotations (scenes.annotations.logic)': 'loadAnnotations'
        'load annotations success (scenes.annotations.logic)': 'loadAnnotationsSuccess'
        'load annotations failure (scenes.annotations.logic)': 'loadAnnotationsFailure'
        'update annotation (scenes.annotations.logic)': 'updateAnnotation'
        'delete annotation (scenes.annotations.logic)': 'deleteAnnotation'
        'restore annotation (scenes.annotations.logic)': 'restoreAnnotation'
        'load annotations next (scenes.annotations.logic)': 'loadAnnotationsNext'
        'set next (scenes.annotations.logic)': 'setNext'
        'append annotations (scenes.annotations.logic)': 'appendAnnotations'
    }
    actionTypes: {
        loadAnnotations: 'load annotations (scenes.annotations.logic)'
        loadAnnotationsSuccess: 'load annotations success (scenes.annotations.logic)'
        loadAnnotationsFailure: 'load annotations failure (scenes.annotations.logic)'
        updateAnnotation: 'update annotation (scenes.annotations.logic)'
        deleteAnnotation: 'delete annotation (scenes.annotations.logic)'
        restoreAnnotation: 'restore annotation (scenes.annotations.logic)'
        loadAnnotationsNext: 'load annotations next (scenes.annotations.logic)'
        setNext: 'set next (scenes.annotations.logic)'
        appendAnnotations: 'append annotations (scenes.annotations.logic)'
    }
    actions: {
        loadAnnotations: () => void
        loadAnnotationsSuccess: (annotations: any[]) => void
        loadAnnotationsFailure: (error: string) => void
        updateAnnotation: (id: any, content: any) => void
        deleteAnnotation: (id: any) => void
        restoreAnnotation: (id: any) => void
        loadAnnotationsNext: () => void
        setNext: (next: any) => void
        appendAnnotations: (annotations: any) => void
    }
    constants: {}
    defaults: {
        annotations: any[]
        annotationsLoading: boolean
        next: null
        loadingNext: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        updateAnnotation: ((
            action: {
                type: 'update annotation (scenes.annotations.logic)'
                payload: {
                    id: any
                    content: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        restoreAnnotation: ((
            action: {
                type: 'restore annotation (scenes.annotations.logic)'
                payload: {
                    id: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteAnnotation: ((
            action: {
                type: 'delete annotation (scenes.annotations.logic)'
                payload: {
                    id: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadAnnotationsNext: ((
            action: {
                type: 'load annotations next (scenes.annotations.logic)'
                payload: boolean
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'annotations', 'logic']
    pathString: 'scenes.annotations.logic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        annotations: any[]
        annotationsLoading: boolean
        next: null
        loadingNext: boolean
    }
    reducerOptions: {}
    reducers: {
        annotations: (state: any[], action: any, fullState: any) => any[]
        annotationsLoading: (state: boolean, action: any, fullState: any) => boolean
        next: (state: null, action: any, fullState: any) => null
        loadingNext: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        annotations: any[]
        annotationsLoading: boolean
        next: null
        loadingNext: boolean
    }
    selectors: {
        annotations: (state: any, props?: any) => any[]
        annotationsLoading: (state: any, props?: any) => boolean
        next: (state: any, props?: any) => null
        loadingNext: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        annotations: any[]
        annotationsLoading: boolean
        next: null
        loadingNext: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
