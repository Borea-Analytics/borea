// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface cohortsModelType<CohortType> extends Logic {
    actionCreators: {
        setPollTimeout: (
            pollTimeout: NodeJS.Timeout | null
        ) => {
            type: 'set poll timeout (models.cohortsModel)'
            payload: {
                pollTimeout: Timeout | null
            }
        }
        updateCohort: (
            cohort: CohortType
        ) => {
            type: 'update cohort (models.cohortsModel)'
            payload: {
                cohort: CohortType
            }
        }
        createCohort: (
            cohort: CohortType
        ) => {
            type: 'create cohort (models.cohortsModel)'
            payload: {
                cohort: CohortType
            }
        }
        loadCohorts: () => {
            type: 'load cohorts (models.cohortsModel)'
            payload: any
        }
        loadCohortsSuccess: (
            cohorts: CohortType[]
        ) => {
            type: 'load cohorts success (models.cohortsModel)'
            payload: {
                cohorts: CohortType[]
            }
        }
        loadCohortsFailure: (
            error: string
        ) => {
            type: 'load cohorts failure (models.cohortsModel)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set poll timeout (models.cohortsModel)': 'setPollTimeout'
        'update cohort (models.cohortsModel)': 'updateCohort'
        'create cohort (models.cohortsModel)': 'createCohort'
        'load cohorts (models.cohortsModel)': 'loadCohorts'
        'load cohorts success (models.cohortsModel)': 'loadCohortsSuccess'
        'load cohorts failure (models.cohortsModel)': 'loadCohortsFailure'
    }
    actionTypes: {
        setPollTimeout: 'set poll timeout (models.cohortsModel)'
        updateCohort: 'update cohort (models.cohortsModel)'
        createCohort: 'create cohort (models.cohortsModel)'
        loadCohorts: 'load cohorts (models.cohortsModel)'
        loadCohortsSuccess: 'load cohorts success (models.cohortsModel)'
        loadCohortsFailure: 'load cohorts failure (models.cohortsModel)'
    }
    actions: {
        setPollTimeout: (pollTimeout: NodeJS.Timeout | null) => void
        updateCohort: (cohort: CohortType) => void
        createCohort: (cohort: CohortType) => void
        loadCohorts: () => void
        loadCohortsSuccess: (cohorts: CohortType[]) => void
        loadCohortsFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        cohorts: CohortType[]
        cohortsLoading: boolean
        pollTimeout: null
    }
    events: {
        afterMount: () => void
        beforeUnmount: () => void
    }
    key: undefined
    listeners: {
        loadCohortsSuccess: ((
            action: {
                type: 'load cohorts success (models.cohortsModel)'
                payload: {
                    cohorts: CohortType[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['models', 'cohortsModel']
    pathString: 'models.cohortsModel'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        cohorts: CohortType[]
        cohortsLoading: boolean
        pollTimeout: null
    }
    reducerOptions: {}
    reducers: {
        cohorts: (state: CohortType[], action: any, fullState: any) => CohortType[]
        cohortsLoading: (state: boolean, action: any, fullState: any) => boolean
        pollTimeout: (state: null, action: any, fullState: any) => null
    }
    selector: (
        state: any
    ) => {
        cohorts: CohortType[]
        cohortsLoading: boolean
        pollTimeout: null
    }
    selectors: {
        cohorts: (state: any, props?: any) => CohortType[]
        cohortsLoading: (state: any, props?: any) => boolean
        pollTimeout: (state: any, props?: any) => null
    }
    sharedListeners: {}
    values: {
        cohorts: CohortType[]
        cohortsLoading: boolean
        pollTimeout: null
    }
    _isKea: true
    _isKeaWithKey: false
}
