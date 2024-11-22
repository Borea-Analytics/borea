// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic, BreakPointFunction } from 'kea'

export interface cohortLogicType extends Logic {
    actionCreators: {
        saveCohort: (
            cohortParams?: any,
            filterParams?: any
        ) => {
            type: 'save cohort (scenes.persons.cohortLogic)'
            payload: {
                cohortParams: {}
                filterParams: any
            }
        }
        setCohort: (
            cohort: any
        ) => {
            type: 'set cohort (scenes.persons.cohortLogic)'
            payload: {
                cohort: any
            }
        }
        checkIsFinished: (
            cohort: any
        ) => {
            type: 'check is finished (scenes.persons.cohortLogic)'
            payload: {
                cohort: any
            }
        }
        setToastId: (
            toastId: any
        ) => {
            type: 'set toast id (scenes.persons.cohortLogic)'
            payload: {
                toastId: any
            }
        }
        setPollTimeout: (
            pollTimeout: any
        ) => {
            type: 'set poll timeout (scenes.persons.cohortLogic)'
            payload: {
                pollTimeout: any
            }
        }
        setLastSavedAt: (
            lastSavedAt: any
        ) => {
            type: 'set last saved at (scenes.persons.cohortLogic)'
            payload: {
                lastSavedAt: any
            }
        }
    }
    actionKeys: {
        'save cohort (scenes.persons.cohortLogic)': 'saveCohort'
        'set cohort (scenes.persons.cohortLogic)': 'setCohort'
        'check is finished (scenes.persons.cohortLogic)': 'checkIsFinished'
        'set toast id (scenes.persons.cohortLogic)': 'setToastId'
        'set poll timeout (scenes.persons.cohortLogic)': 'setPollTimeout'
        'set last saved at (scenes.persons.cohortLogic)': 'setLastSavedAt'
    }
    actionTypes: {
        saveCohort: 'save cohort (scenes.persons.cohortLogic)'
        setCohort: 'set cohort (scenes.persons.cohortLogic)'
        checkIsFinished: 'check is finished (scenes.persons.cohortLogic)'
        setToastId: 'set toast id (scenes.persons.cohortLogic)'
        setPollTimeout: 'set poll timeout (scenes.persons.cohortLogic)'
        setLastSavedAt: 'set last saved at (scenes.persons.cohortLogic)'
    }
    actions: {
        saveCohort: (cohortParams?: any, filterParams?: any) => void
        setCohort: (cohort: any) => void
        checkIsFinished: (cohort: any) => void
        setToastId: (toastId: any) => void
        setPollTimeout: (pollTimeout: any) => void
        setLastSavedAt: (lastSavedAt: any) => void
    }
    constants: {}
    defaults: {
        pollTimeout: null
        cohort: any
        toastId: null
        lastSavedAt: boolean
    }
    events: {
        afterMount: () => void
        beforeUnmount: () => void
    }
    key: any
    listeners: {
        saveCohort: ((
            action: {
                type: 'save cohort (scenes.persons.cohortLogic)'
                payload: {
                    cohortParams: {}
                    filterParams: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        checkIsFinished: ((
            action: {
                type: 'check is finished (scenes.persons.cohortLogic)'
                payload: {
                    cohort: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'persons', 'cohortLogic']
    pathString: 'scenes.persons.cohortLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        pollTimeout: null
        cohort: any
        toastId: null
        lastSavedAt: boolean
    }
    reducerOptions: {}
    reducers: {
        pollTimeout: (state: null, action: any, fullState: any) => null
        cohort: (state: any, action: any, fullState: any) => any
        toastId: (state: null, action: any, fullState: any) => null
        lastSavedAt: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        pollTimeout: null
        cohort: any
        toastId: null
        lastSavedAt: boolean
    }
    selectors: {
        pollTimeout: (state: any, props?: any) => null
        cohort: (state: any, props?: any) => any
        toastId: (state: any, props?: any) => null
        lastSavedAt: (state: any, props?: any) => boolean
    }
    sharedListeners: {
        pollIsFinished: (
            payload: any,
            breakpoint: BreakPointFunction,
            action: {
                type: string
                payload: any
            },
            previousState: any
        ) => void | Promise<void>
    }
    values: {
        pollTimeout: null
        cohort: any
        toastId: null
        lastSavedAt: boolean
    }
    _isKea: true
    _isKeaWithKey: true
}
