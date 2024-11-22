// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface cohortsUrlLogicType extends Logic {
    actionCreators: {
        setOpenCohort: (
            cohort: CohortType
        ) => {
            type: 'set open cohort (scenes.persons.Cohorts)'
            payload: {
                cohort: CohortType
            }
        }
    }
    actionKeys: {
        'set open cohort (scenes.persons.Cohorts)': 'setOpenCohort'
    }
    actionTypes: {
        setOpenCohort: 'set open cohort (scenes.persons.Cohorts)'
    }
    actions: {
        setOpenCohort: (cohort: CohortType) => void
    }
    constants: {}
    defaults: {
        openCohort: boolean
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'persons', 'Cohorts']
    pathString: 'scenes.persons.Cohorts'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        openCohort: boolean
    }
    reducerOptions: {}
    reducers: {
        openCohort: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        openCohort: boolean
    }
    selectors: {
        openCohort: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        openCohort: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
