// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface sessionsPlayLogicType<SessionPlayerData, EventIndex, SessionType> extends Logic {
    actionCreators: {
        fetchNextSessions: () => {
            type: 'fetch next sessions (scenes.sessions.sessionsPlayLogic)'
            payload: {
                value: boolean
            }
        }
        appendNewSessions: (
            sessions: any
        ) => {
            type: 'append new sessions (scenes.sessions.sessionsPlayLogic)'
            payload: {
                sessions: any
            }
        }
        closeSessionPlayer: () => {
            type: 'close session player (scenes.sessions.sessionsPlayLogic)'
            payload: {
                value: boolean
            }
        }
        loadSessionEvents: (
            session: SessionType
        ) => {
            type: 'load session events (scenes.sessions.sessionsPlayLogic)'
            payload: {
                session: SessionType
            }
        }
        toggleAddingTagShown: () => {
            type: 'toggle adding tag shown (scenes.sessions.sessionsPlayLogic)'
            payload: void
        }
        setAddingTag: (
            payload: string
        ) => {
            type: 'set adding tag (scenes.sessions.sessionsPlayLogic)'
            payload: {
                payload: string
            }
        }
        goToNext: () => {
            type: 'go to next (scenes.sessions.sessionsPlayLogic)'
            payload: {
                value: boolean
            }
        }
        goToPrevious: () => {
            type: 'go to previous (scenes.sessions.sessionsPlayLogic)'
            payload: {
                value: boolean
            }
        }
        openNextRecordingOnLoad: () => {
            type: 'open next recording on load (scenes.sessions.sessionsPlayLogic)'
            payload: {
                value: boolean
            }
        }
        createTag: () => {
            type: 'create tag (scenes.sessions.sessionsPlayLogic)'
            payload: any
        }
        createTagSuccess: (
            tags: string[]
        ) => {
            type: 'create tag success (scenes.sessions.sessionsPlayLogic)'
            payload: {
                tags: string[]
            }
        }
        createTagFailure: (
            error: string
        ) => {
            type: 'create tag failure (scenes.sessions.sessionsPlayLogic)'
            payload: {
                error: string
            }
        }
        loadRecording: (
            sessionRecordingId: string
        ) => {
            type: 'load recording (scenes.sessions.sessionsPlayLogic)'
            payload: string
        }
        loadRecordingSuccess: (
            sessionPlayerData: SessionPlayerData
        ) => {
            type: 'load recording success (scenes.sessions.sessionsPlayLogic)'
            payload: {
                sessionPlayerData: SessionPlayerData
            }
        }
        loadRecordingFailure: (
            error: string
        ) => {
            type: 'load recording failure (scenes.sessions.sessionsPlayLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'fetch next sessions (scenes.sessions.sessionsPlayLogic)': 'fetchNextSessions'
        'append new sessions (scenes.sessions.sessionsPlayLogic)': 'appendNewSessions'
        'close session player (scenes.sessions.sessionsPlayLogic)': 'closeSessionPlayer'
        'load session events (scenes.sessions.sessionsPlayLogic)': 'loadSessionEvents'
        'toggle adding tag shown (scenes.sessions.sessionsPlayLogic)': 'toggleAddingTagShown'
        'set adding tag (scenes.sessions.sessionsPlayLogic)': 'setAddingTag'
        'go to next (scenes.sessions.sessionsPlayLogic)': 'goToNext'
        'go to previous (scenes.sessions.sessionsPlayLogic)': 'goToPrevious'
        'open next recording on load (scenes.sessions.sessionsPlayLogic)': 'openNextRecordingOnLoad'
        'create tag (scenes.sessions.sessionsPlayLogic)': 'createTag'
        'create tag success (scenes.sessions.sessionsPlayLogic)': 'createTagSuccess'
        'create tag failure (scenes.sessions.sessionsPlayLogic)': 'createTagFailure'
        'load recording (scenes.sessions.sessionsPlayLogic)': 'loadRecording'
        'load recording success (scenes.sessions.sessionsPlayLogic)': 'loadRecordingSuccess'
        'load recording failure (scenes.sessions.sessionsPlayLogic)': 'loadRecordingFailure'
    }
    actionTypes: {
        fetchNextSessions: 'fetch next sessions (scenes.sessions.sessionsPlayLogic)'
        appendNewSessions: 'append new sessions (scenes.sessions.sessionsPlayLogic)'
        closeSessionPlayer: 'close session player (scenes.sessions.sessionsPlayLogic)'
        loadSessionEvents: 'load session events (scenes.sessions.sessionsPlayLogic)'
        toggleAddingTagShown: 'toggle adding tag shown (scenes.sessions.sessionsPlayLogic)'
        setAddingTag: 'set adding tag (scenes.sessions.sessionsPlayLogic)'
        goToNext: 'go to next (scenes.sessions.sessionsPlayLogic)'
        goToPrevious: 'go to previous (scenes.sessions.sessionsPlayLogic)'
        openNextRecordingOnLoad: 'open next recording on load (scenes.sessions.sessionsPlayLogic)'
        createTag: 'create tag (scenes.sessions.sessionsPlayLogic)'
        createTagSuccess: 'create tag success (scenes.sessions.sessionsPlayLogic)'
        createTagFailure: 'create tag failure (scenes.sessions.sessionsPlayLogic)'
        loadRecording: 'load recording (scenes.sessions.sessionsPlayLogic)'
        loadRecordingSuccess: 'load recording success (scenes.sessions.sessionsPlayLogic)'
        loadRecordingFailure: 'load recording failure (scenes.sessions.sessionsPlayLogic)'
    }
    actions: {
        fetchNextSessions: () => void
        appendNewSessions: (sessions: any) => void
        closeSessionPlayer: () => void
        loadSessionEvents: (session: SessionType) => void
        toggleAddingTagShown: () => void
        setAddingTag: (payload: string) => void
        goToNext: () => void
        goToPrevious: () => void
        openNextRecordingOnLoad: () => void
        createTag: () => void
        createTagSuccess: (tags: string[]) => void
        createTagFailure: (error: string) => void
        loadRecording: (sessionRecordingId: string) => void
        loadRecordingSuccess: (sessionPlayerData: SessionPlayerData) => void
        loadRecordingFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        sessionRecordingId: SessionRecordingId | null
        sessionPlayerData: null | SessionPlayerData
        addingTagShown: boolean
        addingTag: string
        loadingNextRecording: boolean
        tags: string[]
        tagsLoading: boolean
        sessionPlayerDataLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {
        toggleAddingTagShown: ((
            action: {
                type: 'toggle adding tag shown (scenes.sessions.sessionsPlayLogic)'
                payload: void
            },
            previousState: any
        ) => void | Promise<void>)[]
        goToNext: ((
            action: {
                type: 'go to next (scenes.sessions.sessionsPlayLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        goToPrevious: ((
            action: {
                type: 'go to previous (scenes.sessions.sessionsPlayLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        appendNewSessions: ((
            action: {
                type: 'append new sessions (scenes.sessions.sessionsPlayLogic)'
                payload: {
                    sessions: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'sessions', 'sessionsPlayLogic']
    pathString: 'scenes.sessions.sessionsPlayLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        sessionRecordingId: SessionRecordingId | null
        sessionPlayerData: null | SessionPlayerData
        addingTagShown: boolean
        addingTag: string
        loadingNextRecording: boolean
        tags: string[]
        tagsLoading: boolean
        sessionPlayerDataLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        sessionRecordingId: (state: SessionRecordingId | null, action: any, fullState: any) => SessionRecordingId | null
        sessionPlayerData: (state: null | SessionPlayerData, action: any, fullState: any) => null | SessionPlayerData
        addingTagShown: (state: boolean, action: any, fullState: any) => boolean
        addingTag: (state: string, action: any, fullState: any) => string
        loadingNextRecording: (state: boolean, action: any, fullState: any) => boolean
        tags: (state: string[], action: any, fullState: any) => string[]
        tagsLoading: (state: boolean, action: any, fullState: any) => boolean
        sessionPlayerDataLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        sessionRecordingId: SessionRecordingId | null
        sessionPlayerData: null | SessionPlayerData
        addingTagShown: boolean
        addingTag: string
        loadingNextRecording: boolean
        tags: string[]
        tagsLoading: boolean
        sessionPlayerDataLoading: boolean
    }
    selectors: {
        sessionRecordingId: (state: any, props?: any) => SessionRecordingId | null
        sessionPlayerData: (state: any, props?: any) => null | SessionPlayerData
        addingTagShown: (state: any, props?: any) => boolean
        addingTag: (state: any, props?: any) => string
        loadingNextRecording: (state: any, props?: any) => boolean
        tags: (state: any, props?: any) => string[]
        tagsLoading: (state: any, props?: any) => boolean
        sessionPlayerDataLoading: (state: any, props?: any) => boolean
        sessions: (state: any, props?: any) => SessionType[]
        pagination: (state: any, props?: any) => Record<string, any> | null
        loadedSessionEvents: (state: any, props?: any) => Record<string, EventType[] | undefined>
        orderedSessionRecordingIds: (state: any, props?: any) => string[]
        sessionDate: (state: any, props?: any) => string | null
        eventIndex: (state: any, props?: any) => EventIndex
        recordingIndex: (state: any, props?: any) => number
        showPrev: (state: any, props?: any) => boolean
        showNext: (state: any, props?: any) => boolean
        session: (state: any, props?: any) => SessionType | null
        shouldLoadSessionEvents: (state: any, props?: any) => boolean | null
        highlightedSessionEvents: (state: any, props?: any) => any[]
        shownPlayerEvents: (state: any, props?: any) => { playerTime: number; text: string; color: string }[]
    }
    sharedListeners: {}
    values: {
        sessionRecordingId: SessionRecordingId | null
        sessionPlayerData: null | SessionPlayerData
        addingTagShown: boolean
        addingTag: string
        loadingNextRecording: boolean
        tags: string[]
        tagsLoading: boolean
        sessionPlayerDataLoading: boolean
        sessions: SessionType[]
        pagination: Record<string, any> | null
        loadedSessionEvents: Record<string, EventType[] | undefined>
        orderedSessionRecordingIds: string[]
        sessionDate: string | null
        eventIndex: EventIndex
        recordingIndex: number
        showPrev: boolean
        showNext: boolean
        session: SessionType | null
        shouldLoadSessionEvents: boolean | null
        highlightedSessionEvents: any[]
        shownPlayerEvents: { playerTime: number; text: string; color: string }[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        sessionDate: (sessionPlayerData: SessionPlayerData | null) => string | null
        eventIndex: (sessionPlayerData: SessionPlayerData | null) => EventIndex
        recordingIndex: (orderedSessionRecordingIds: string[], sessionRecordingId: any) => number
        showPrev: (recordingIndex: number) => boolean
        showNext: (
            recordingIndex: number,
            orderedSessionRecordingIds: string[],
            pagination: Record<string, any> | null
        ) => boolean
        session: (sessionRecordingId: any, sessions: SessionType[]) => SessionType | null
        shouldLoadSessionEvents: (
            session: SessionType | null,
            loadedSessionEvents: Record<string, any[] | undefined>
        ) => boolean | null
        highlightedSessionEvents: (
            session: SessionType | null,
            loadedSessionEvents: Record<string, any[] | undefined>
        ) => any[]
        shownPlayerEvents: (
            sessionPlayerData: SessionPlayerData | null,
            eventIndex: EventIndex,
            highlightedSessionEvents: any[]
        ) => { playerTime: number; text: string; color: string }[]
    }
}
