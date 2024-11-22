// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface preflightLogicType<PreflightStatus> extends Logic {
    actionCreators: {
        loadPreflight: () => {
            type: 'load preflight (scenes.PreflightCheck.logic)'
            payload: any
        }
        loadPreflightSuccess: (
            preflight: PreflightStatus | null
        ) => {
            type: 'load preflight success (scenes.PreflightCheck.logic)'
            payload: {
                preflight: PreflightStatus | null
            }
        }
        loadPreflightFailure: (
            error: string
        ) => {
            type: 'load preflight failure (scenes.PreflightCheck.logic)'
            payload: {
                error: string
            }
        }
        resetPreflight: () => {
            type: 'reset preflight (scenes.PreflightCheck.logic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'load preflight (scenes.PreflightCheck.logic)': 'loadPreflight'
        'load preflight success (scenes.PreflightCheck.logic)': 'loadPreflightSuccess'
        'load preflight failure (scenes.PreflightCheck.logic)': 'loadPreflightFailure'
        'reset preflight (scenes.PreflightCheck.logic)': 'resetPreflight'
    }
    actionTypes: {
        loadPreflight: 'load preflight (scenes.PreflightCheck.logic)'
        loadPreflightSuccess: 'load preflight success (scenes.PreflightCheck.logic)'
        loadPreflightFailure: 'load preflight failure (scenes.PreflightCheck.logic)'
        resetPreflight: 'reset preflight (scenes.PreflightCheck.logic)'
    }
    actions: {
        loadPreflight: () => void
        loadPreflightSuccess: (preflight: PreflightStatus | null) => void
        loadPreflightFailure: (error: string) => void
        resetPreflight: () => void
    }
    constants: {}
    defaults: {
        preflight: PreflightStatus | null
        preflightLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        resetPreflight: ((
            action: {
                type: 'reset preflight (scenes.PreflightCheck.logic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'PreflightCheck', 'logic']
    pathString: 'scenes.PreflightCheck.logic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        preflight: PreflightStatus | null
        preflightLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        preflight: (state: PreflightStatus | null, action: any, fullState: any) => PreflightStatus | null
        preflightLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        preflight: PreflightStatus | null
        preflightLoading: boolean
    }
    selectors: {
        preflight: (state: any, props?: any) => PreflightStatus | null
        preflightLoading: (state: any, props?: any) => boolean
        socialAuthAvailable: (state: any, props?: any) => number | null
    }
    sharedListeners: {}
    values: {
        preflight: PreflightStatus | null
        preflightLoading: boolean
        socialAuthAvailable: number | null
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        socialAuthAvailable: (preflight: PreflightStatus | null) => number | null
    }
}
