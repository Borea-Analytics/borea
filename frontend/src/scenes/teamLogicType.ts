// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface teamLogicType<TeamType> extends Logic {
    actionCreators: {
        deleteCurrentTeam: () => {
            type: 'delete current team (scenes.teamLogic)'
            payload: {
                value: boolean
            }
        }
        loadCurrentTeam: () => {
            type: 'load current team (scenes.teamLogic)'
            payload: any
        }
        loadCurrentTeamSuccess: (
            currentTeam: TeamType | null
        ) => {
            type: 'load current team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType | null
            }
        }
        loadCurrentTeamFailure: (
            error: string
        ) => {
            type: 'load current team failure (scenes.teamLogic)'
            payload: {
                error: string
            }
        }
        patchCurrentTeam: (
            patch: Partial<TeamType>
        ) => {
            type: 'patch current team (scenes.teamLogic)'
            payload: Partial<TeamType>
        }
        patchCurrentTeamSuccess: (
            currentTeam: TeamType | null
        ) => {
            type: 'patch current team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType | null
            }
        }
        patchCurrentTeamFailure: (
            error: string
        ) => {
            type: 'patch current team failure (scenes.teamLogic)'
            payload: {
                error: string
            }
        }
        renameCurrentTeam: (
            newName: string
        ) => {
            type: 'rename current team (scenes.teamLogic)'
            payload: string
        }
        renameCurrentTeamSuccess: (
            currentTeam: TeamType | null
        ) => {
            type: 'rename current team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType | null
            }
        }
        renameCurrentTeamFailure: (
            error: string
        ) => {
            type: 'rename current team failure (scenes.teamLogic)'
            payload: {
                error: string
            }
        }
        createTeam: (
            name: string
        ) => {
            type: 'create team (scenes.teamLogic)'
            payload: string
        }
        createTeamSuccess: (
            currentTeam: TeamType
        ) => {
            type: 'create team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType
            }
        }
        createTeamFailure: (
            error: string
        ) => {
            type: 'create team failure (scenes.teamLogic)'
            payload: {
                error: string
            }
        }
        resetToken: () => {
            type: 'reset token (scenes.teamLogic)'
            payload: any
        }
        resetTokenSuccess: (
            currentTeam: TeamType | null
        ) => {
            type: 'reset token success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType | null
            }
        }
        resetTokenFailure: (
            error: string
        ) => {
            type: 'reset token failure (scenes.teamLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'delete current team (scenes.teamLogic)': 'deleteCurrentTeam'
        'load current team (scenes.teamLogic)': 'loadCurrentTeam'
        'load current team success (scenes.teamLogic)': 'loadCurrentTeamSuccess'
        'load current team failure (scenes.teamLogic)': 'loadCurrentTeamFailure'
        'patch current team (scenes.teamLogic)': 'patchCurrentTeam'
        'patch current team success (scenes.teamLogic)': 'patchCurrentTeamSuccess'
        'patch current team failure (scenes.teamLogic)': 'patchCurrentTeamFailure'
        'rename current team (scenes.teamLogic)': 'renameCurrentTeam'
        'rename current team success (scenes.teamLogic)': 'renameCurrentTeamSuccess'
        'rename current team failure (scenes.teamLogic)': 'renameCurrentTeamFailure'
        'create team (scenes.teamLogic)': 'createTeam'
        'create team success (scenes.teamLogic)': 'createTeamSuccess'
        'create team failure (scenes.teamLogic)': 'createTeamFailure'
        'reset token (scenes.teamLogic)': 'resetToken'
        'reset token success (scenes.teamLogic)': 'resetTokenSuccess'
        'reset token failure (scenes.teamLogic)': 'resetTokenFailure'
    }
    actionTypes: {
        deleteCurrentTeam: 'delete current team (scenes.teamLogic)'
        loadCurrentTeam: 'load current team (scenes.teamLogic)'
        loadCurrentTeamSuccess: 'load current team success (scenes.teamLogic)'
        loadCurrentTeamFailure: 'load current team failure (scenes.teamLogic)'
        patchCurrentTeam: 'patch current team (scenes.teamLogic)'
        patchCurrentTeamSuccess: 'patch current team success (scenes.teamLogic)'
        patchCurrentTeamFailure: 'patch current team failure (scenes.teamLogic)'
        renameCurrentTeam: 'rename current team (scenes.teamLogic)'
        renameCurrentTeamSuccess: 'rename current team success (scenes.teamLogic)'
        renameCurrentTeamFailure: 'rename current team failure (scenes.teamLogic)'
        createTeam: 'create team (scenes.teamLogic)'
        createTeamSuccess: 'create team success (scenes.teamLogic)'
        createTeamFailure: 'create team failure (scenes.teamLogic)'
        resetToken: 'reset token (scenes.teamLogic)'
        resetTokenSuccess: 'reset token success (scenes.teamLogic)'
        resetTokenFailure: 'reset token failure (scenes.teamLogic)'
    }
    actions: {
        deleteCurrentTeam: () => void
        loadCurrentTeam: () => void
        loadCurrentTeamSuccess: (currentTeam: TeamType | null) => void
        loadCurrentTeamFailure: (error: string) => void
        patchCurrentTeam: (patch: Partial<TeamType>) => void
        patchCurrentTeamSuccess: (currentTeam: TeamType | null) => void
        patchCurrentTeamFailure: (error: string) => void
        renameCurrentTeam: (newName: string) => void
        renameCurrentTeamSuccess: (currentTeam: TeamType | null) => void
        renameCurrentTeamFailure: (error: string) => void
        createTeam: (name: string) => void
        createTeamSuccess: (currentTeam: TeamType) => void
        createTeamFailure: (error: string) => void
        resetToken: () => void
        resetTokenSuccess: (currentTeam: TeamType | null) => void
        resetTokenFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        currentTeam: TeamType | null
        currentTeamLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        deleteCurrentTeam: ((
            action: {
                type: 'delete current team (scenes.teamLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        renameCurrentTeamSuccess: ((
            action: {
                type: 'rename current team success (scenes.teamLogic)'
                payload: {
                    currentTeam: TeamType | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        createTeamSuccess: ((
            action: {
                type: 'create team success (scenes.teamLogic)'
                payload: {
                    currentTeam: TeamType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'teamLogic']
    pathString: 'scenes.teamLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        currentTeam: TeamType | null
        currentTeamLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        currentTeam: (state: TeamType | null, action: any, fullState: any) => TeamType | null
        currentTeamLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        currentTeam: TeamType | null
        currentTeamLoading: boolean
    }
    selectors: {
        currentTeam: (state: any, props?: any) => TeamType | null
        currentTeamLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        currentTeam: TeamType | null
        currentTeamLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
