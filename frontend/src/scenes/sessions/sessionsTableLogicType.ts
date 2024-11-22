// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface sessionsTableLogicType<
    Moment,
    SessionType,
    SessionRecordingId,
    PropertyFilter,
    SessionsPropertyFilter,
    EventType
> extends Logic {
    actionCreators: {
        setAllFilters: (
            filters: Array<SessionsPropertyFilter>
        ) => {
            type: 'set all filters (scenes.sessions.sessionsTableLogic)'
            payload: {
                filters: SessionsPropertyFilter[]
            }
        }
        loadSessions: (
            _: any
        ) => {
            type: 'load sessions (scenes.sessions.sessionsTableLogic)'
            payload: any
        }
        loadSessionsSuccess: (
            sessions: SessionType[]
        ) => {
            type: 'load sessions success (scenes.sessions.sessionsTableLogic)'
            payload: {
                sessions: SessionType[]
            }
        }
        loadSessionsFailure: (
            error: string
        ) => {
            type: 'load sessions failure (scenes.sessions.sessionsTableLogic)'
            payload: {
                error: string
            }
        }
        setPagination: (
            pagination: Record<string, any> | null
        ) => {
            type: 'set pagination (scenes.sessions.sessionsTableLogic)'
            payload: {
                pagination: Record<string, any> | null
            }
        }
        fetchNextSessions: () => {
            type: 'fetch next sessions (scenes.sessions.sessionsTableLogic)'
            payload: {
                value: boolean
            }
        }
        appendNewSessions: (
            sessions: any
        ) => {
            type: 'append new sessions (scenes.sessions.sessionsTableLogic)'
            payload: {
                sessions: any
            }
        }
        previousDay: () => {
            type: 'previous day (scenes.sessions.sessionsTableLogic)'
            payload: {
                value: boolean
            }
        }
        nextDay: () => {
            type: 'next day (scenes.sessions.sessionsTableLogic)'
            payload: {
                value: boolean
            }
        }
        applyFilters: () => {
            type: 'apply filters (scenes.sessions.sessionsTableLogic)'
            payload: {
                value: boolean
            }
        }
        setFilters: (
            properties: Array<PropertyFilter>,
            selectedDate: Moment | null
        ) => {
            type: 'set filters (scenes.sessions.sessionsTableLogic)'
            payload: {
                properties: PropertyFilter[]
                selectedDate: Moment | null
            }
        }
        setSessionRecordingId: (
            sessionRecordingId: SessionRecordingId
        ) => {
            type: 'set session recording id (scenes.sessions.sessionsTableLogic)'
            payload: {
                sessionRecordingId: string
            }
        }
        closeSessionPlayer: () => {
            type: 'close session player (scenes.sessions.sessionsTableLogic)'
            payload: {
                value: boolean
            }
        }
        loadSessionEvents: (
            session: SessionType
        ) => {
            type: 'load session events (scenes.sessions.sessionsTableLogic)'
            payload: {
                session: SessionType
            }
        }
        addSessionEvents: (
            session: SessionType,
            events: EventType[]
        ) => {
            type: 'add session events (scenes.sessions.sessionsTableLogic)'
            payload: {
                session: SessionType
                events: EventType[]
            }
        }
        setLastAppliedFilters: (
            filters: SessionsPropertyFilter[]
        ) => {
            type: 'set last applied filters (scenes.sessions.sessionsTableLogic)'
            payload: {
                filters: SessionsPropertyFilter[]
            }
        }
    }
    actionKeys: {
        'set all filters (scenes.sessions.sessionsTableLogic)': 'setAllFilters'
        'load sessions (scenes.sessions.sessionsTableLogic)': 'loadSessions'
        'load sessions success (scenes.sessions.sessionsTableLogic)': 'loadSessionsSuccess'
        'load sessions failure (scenes.sessions.sessionsTableLogic)': 'loadSessionsFailure'
        'set pagination (scenes.sessions.sessionsTableLogic)': 'setPagination'
        'fetch next sessions (scenes.sessions.sessionsTableLogic)': 'fetchNextSessions'
        'append new sessions (scenes.sessions.sessionsTableLogic)': 'appendNewSessions'
        'previous day (scenes.sessions.sessionsTableLogic)': 'previousDay'
        'next day (scenes.sessions.sessionsTableLogic)': 'nextDay'
        'apply filters (scenes.sessions.sessionsTableLogic)': 'applyFilters'
        'set filters (scenes.sessions.sessionsTableLogic)': 'setFilters'
        'set session recording id (scenes.sessions.sessionsTableLogic)': 'setSessionRecordingId'
        'close session player (scenes.sessions.sessionsTableLogic)': 'closeSessionPlayer'
        'load session events (scenes.sessions.sessionsTableLogic)': 'loadSessionEvents'
        'add session events (scenes.sessions.sessionsTableLogic)': 'addSessionEvents'
        'set last applied filters (scenes.sessions.sessionsTableLogic)': 'setLastAppliedFilters'
    }
    actionTypes: {
        setAllFilters: 'set all filters (scenes.sessions.sessionsTableLogic)'
        loadSessions: 'load sessions (scenes.sessions.sessionsTableLogic)'
        loadSessionsSuccess: 'load sessions success (scenes.sessions.sessionsTableLogic)'
        loadSessionsFailure: 'load sessions failure (scenes.sessions.sessionsTableLogic)'
        setPagination: 'set pagination (scenes.sessions.sessionsTableLogic)'
        fetchNextSessions: 'fetch next sessions (scenes.sessions.sessionsTableLogic)'
        appendNewSessions: 'append new sessions (scenes.sessions.sessionsTableLogic)'
        previousDay: 'previous day (scenes.sessions.sessionsTableLogic)'
        nextDay: 'next day (scenes.sessions.sessionsTableLogic)'
        applyFilters: 'apply filters (scenes.sessions.sessionsTableLogic)'
        setFilters: 'set filters (scenes.sessions.sessionsTableLogic)'
        setSessionRecordingId: 'set session recording id (scenes.sessions.sessionsTableLogic)'
        closeSessionPlayer: 'close session player (scenes.sessions.sessionsTableLogic)'
        loadSessionEvents: 'load session events (scenes.sessions.sessionsTableLogic)'
        addSessionEvents: 'add session events (scenes.sessions.sessionsTableLogic)'
        setLastAppliedFilters: 'set last applied filters (scenes.sessions.sessionsTableLogic)'
    }
    actions: {
        setAllFilters: (filters: Array<SessionsPropertyFilter>) => void
        loadSessions: (_: any) => void
        loadSessionsSuccess: (sessions: SessionType[]) => void
        loadSessionsFailure: (error: string) => void
        setPagination: (pagination: Record<string, any> | null) => void
        fetchNextSessions: () => void
        appendNewSessions: (sessions: any) => void
        previousDay: () => void
        nextDay: () => void
        applyFilters: () => void
        setFilters: (properties: Array<PropertyFilter>, selectedDate: Moment | null) => void
        setSessionRecordingId: (sessionRecordingId: SessionRecordingId) => void
        closeSessionPlayer: () => void
        loadSessionEvents: (session: SessionType) => void
        addSessionEvents: (session: SessionType, events: EventType[]) => void
        setLastAppliedFilters: (filters: SessionsPropertyFilter[]) => void
    }
    constants: {}
    defaults: {
        sessions: SessionType[]
        sessionsLoading: boolean
        isLoadingNext: boolean
        pagination: Record<string, any> | null
        selectedDate: null | Moment
        properties: PropertyFilter[]
        sessionRecordingId: SessionRecordingId | null
        loadedSessionEvents: Record<string, EventType[] | undefined>
        lastAppliedFilters: SessionsPropertyFilter[]
    }
    events: {}
    key: undefined
    listeners: {
        fetchNextSessions: ((
            action: {
                type: 'fetch next sessions (scenes.sessions.sessionsTableLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        applyFilters: ((
            action: {
                type: 'apply filters (scenes.sessions.sessionsTableLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setFilters: ((
            action: {
                type: 'set filters (scenes.sessions.sessionsTableLogic)'
                payload: {
                    properties: PropertyFilter[]
                    selectedDate: Moment | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        previousDay: ((
            action: {
                type: 'previous day (scenes.sessions.sessionsTableLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        nextDay: ((
            action: {
                type: 'next day (scenes.sessions.sessionsTableLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadSessionEvents: ((
            action: {
                type: 'load session events (scenes.sessions.sessionsTableLogic)'
                payload: {
                    session: SessionType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'sessions', 'sessionsTableLogic']
    pathString: 'scenes.sessions.sessionsTableLogic'
    props: {
        personIds?: string[] | undefined
    }
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        sessions: SessionType[]
        sessionsLoading: boolean
        isLoadingNext: boolean
        pagination: Record<string, any> | null
        selectedDate: null | Moment
        properties: PropertyFilter[]
        sessionRecordingId: SessionRecordingId | null
        loadedSessionEvents: Record<string, EventType[] | undefined>
        lastAppliedFilters: SessionsPropertyFilter[]
    }
    reducerOptions: {}
    reducers: {
        sessions: (state: SessionType[], action: any, fullState: any) => SessionType[]
        sessionsLoading: (state: boolean, action: any, fullState: any) => boolean
        isLoadingNext: (state: boolean, action: any, fullState: any) => boolean
        pagination: (state: Record<string, any> | null, action: any, fullState: any) => Record<string, any> | null
        selectedDate: (state: null | Moment, action: any, fullState: any) => null | Moment
        properties: (state: PropertyFilter[], action: any, fullState: any) => PropertyFilter[]
        sessionRecordingId: (state: SessionRecordingId | null, action: any, fullState: any) => SessionRecordingId | null
        loadedSessionEvents: (
            state: Record<string, EventType[] | undefined>,
            action: any,
            fullState: any
        ) => Record<string, EventType[] | undefined>
        lastAppliedFilters: (state: SessionsPropertyFilter[], action: any, fullState: any) => SessionsPropertyFilter[]
    }
    selector: (
        state: any
    ) => {
        sessions: SessionType[]
        sessionsLoading: boolean
        isLoadingNext: boolean
        pagination: Record<string, any> | null
        selectedDate: null | Moment
        properties: PropertyFilter[]
        sessionRecordingId: SessionRecordingId | null
        loadedSessionEvents: Record<string, EventType[] | undefined>
        lastAppliedFilters: SessionsPropertyFilter[]
    }
    selectors: {
        sessions: (state: any, props?: any) => SessionType[]
        sessionsLoading: (state: any, props?: any) => boolean
        isLoadingNext: (state: any, props?: any) => boolean
        pagination: (state: any, props?: any) => Record<string, any> | null
        selectedDate: (state: any, props?: any) => null | Moment
        properties: (state: any, props?: any) => PropertyFilter[]
        sessionRecordingId: (state: any, props?: any) => SessionRecordingId | null
        loadedSessionEvents: (state: any, props?: any) => Record<string, EventType[] | undefined>
        lastAppliedFilters: (state: any, props?: any) => SessionsPropertyFilter[]
        filters: (state: any, props?: any) => Array<SessionsPropertyFilter>
        selectedDateURLparam: (state: any, props?: any) => string | undefined
        orderedSessionRecordingIds: (state: any, props?: any) => string[]
        firstRecordingId: (state: any, props?: any) => string | null
        filtersDirty: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        sessions: SessionType[]
        sessionsLoading: boolean
        isLoadingNext: boolean
        pagination: Record<string, any> | null
        selectedDate: null | Moment
        properties: PropertyFilter[]
        sessionRecordingId: SessionRecordingId | null
        loadedSessionEvents: Record<string, EventType[] | undefined>
        lastAppliedFilters: SessionsPropertyFilter[]
        filters: Array<SessionsPropertyFilter>
        selectedDateURLparam: string | undefined
        orderedSessionRecordingIds: string[]
        firstRecordingId: string | null
        filtersDirty: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        selectedDateURLparam: (selectedDate: moment.Moment | null) => string | undefined
        orderedSessionRecordingIds: (sessions: SessionType[]) => string[]
        firstRecordingId: (orderedSessionRecordingIds: string[]) => string | null
        filtersDirty: (filters: SessionsPropertyFilter[], lastAppliedFilters: SessionsPropertyFilter[]) => boolean
    }
}
