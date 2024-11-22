// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface sessionsFiltersLogicType<
    SessionsPropertyFilter,
    FilterSelector,
    PersonProperty,
    SavedFilter,
    FilterPropertyType
> extends Logic {
    actionCreators: {
        openFilterSelect: (
            selector: FilterSelector
        ) => {
            type: 'open filter select (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                selector: ToastId
            }
        }
        closeFilterSelect: () => {
            type: 'close filter select (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                value: boolean
            }
        }
        setAllFilters: (
            filters: Array<SessionsPropertyFilter>
        ) => {
            type: 'set all filters (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                filters: SessionsPropertyFilter[]
            }
        }
        updateFilter: (
            property: SessionsPropertyFilter,
            selector: FilterSelector
        ) => {
            type: 'update filter (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                property: SessionsPropertyFilter
                selector: ToastId
            }
        }
        removeFilter: (
            selector: number
        ) => {
            type: 'remove filter (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                selector: number
            }
        }
        dropdownSelected: (
            type: FilterPropertyType,
            id: string | number,
            label: string
        ) => {
            type: 'dropdown selected (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                type: 'person' | 'cohort' | 'action_type' | 'event_type' | 'recording'
                id: ToastId
                label: string
            }
        }
        upsertSessionsFilter: (
            id: number | string | null,
            name: string
        ) => {
            type: 'upsert sessions filter (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                id: string | number | null
                name: string
            }
        }
        deleteSessionsFilter: (
            id: number | string | null
        ) => {
            type: 'delete sessions filter (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                id: string | number | null
            }
        }
        openEditFilter: (
            filter:
                | SavedFilter
                | {
                      id: null
                  }
        ) => {
            type: 'open edit filter (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                filter:
                    | SavedFilter
                    | {
                          id: null
                      }
            }
        }
        closeEditFilter: () => {
            type: 'close edit filter (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                value: boolean
            }
        }
        loadPersonProperties: () => {
            type: 'load person properties (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: any
        }
        loadPersonPropertiesSuccess: (
            personProperties: Array<PersonProperty>
        ) => {
            type: 'load person properties success (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                personProperties: Array<PersonProperty>
            }
        }
        loadPersonPropertiesFailure: (
            error: string
        ) => {
            type: 'load person properties failure (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                error: string
            }
        }
        loadCustomFilters: (
            toastMessage?: string
        ) => {
            type: 'load custom filters (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: string
        }
        loadCustomFiltersSuccess: (
            customFilters: Array<SavedFilter>
        ) => {
            type: 'load custom filters success (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                customFilters: Array<SavedFilter>
            }
        }
        loadCustomFiltersFailure: (
            error: string
        ) => {
            type: 'load custom filters failure (scenes.sessions.filters.sessionsFiltersLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'open filter select (scenes.sessions.filters.sessionsFiltersLogic)': 'openFilterSelect'
        'close filter select (scenes.sessions.filters.sessionsFiltersLogic)': 'closeFilterSelect'
        'set all filters (scenes.sessions.filters.sessionsFiltersLogic)': 'setAllFilters'
        'update filter (scenes.sessions.filters.sessionsFiltersLogic)': 'updateFilter'
        'remove filter (scenes.sessions.filters.sessionsFiltersLogic)': 'removeFilter'
        'dropdown selected (scenes.sessions.filters.sessionsFiltersLogic)': 'dropdownSelected'
        'upsert sessions filter (scenes.sessions.filters.sessionsFiltersLogic)': 'upsertSessionsFilter'
        'delete sessions filter (scenes.sessions.filters.sessionsFiltersLogic)': 'deleteSessionsFilter'
        'open edit filter (scenes.sessions.filters.sessionsFiltersLogic)': 'openEditFilter'
        'close edit filter (scenes.sessions.filters.sessionsFiltersLogic)': 'closeEditFilter'
        'load person properties (scenes.sessions.filters.sessionsFiltersLogic)': 'loadPersonProperties'
        'load person properties success (scenes.sessions.filters.sessionsFiltersLogic)': 'loadPersonPropertiesSuccess'
        'load person properties failure (scenes.sessions.filters.sessionsFiltersLogic)': 'loadPersonPropertiesFailure'
        'load custom filters (scenes.sessions.filters.sessionsFiltersLogic)': 'loadCustomFilters'
        'load custom filters success (scenes.sessions.filters.sessionsFiltersLogic)': 'loadCustomFiltersSuccess'
        'load custom filters failure (scenes.sessions.filters.sessionsFiltersLogic)': 'loadCustomFiltersFailure'
    }
    actionTypes: {
        openFilterSelect: 'open filter select (scenes.sessions.filters.sessionsFiltersLogic)'
        closeFilterSelect: 'close filter select (scenes.sessions.filters.sessionsFiltersLogic)'
        setAllFilters: 'set all filters (scenes.sessions.filters.sessionsFiltersLogic)'
        updateFilter: 'update filter (scenes.sessions.filters.sessionsFiltersLogic)'
        removeFilter: 'remove filter (scenes.sessions.filters.sessionsFiltersLogic)'
        dropdownSelected: 'dropdown selected (scenes.sessions.filters.sessionsFiltersLogic)'
        upsertSessionsFilter: 'upsert sessions filter (scenes.sessions.filters.sessionsFiltersLogic)'
        deleteSessionsFilter: 'delete sessions filter (scenes.sessions.filters.sessionsFiltersLogic)'
        openEditFilter: 'open edit filter (scenes.sessions.filters.sessionsFiltersLogic)'
        closeEditFilter: 'close edit filter (scenes.sessions.filters.sessionsFiltersLogic)'
        loadPersonProperties: 'load person properties (scenes.sessions.filters.sessionsFiltersLogic)'
        loadPersonPropertiesSuccess: 'load person properties success (scenes.sessions.filters.sessionsFiltersLogic)'
        loadPersonPropertiesFailure: 'load person properties failure (scenes.sessions.filters.sessionsFiltersLogic)'
        loadCustomFilters: 'load custom filters (scenes.sessions.filters.sessionsFiltersLogic)'
        loadCustomFiltersSuccess: 'load custom filters success (scenes.sessions.filters.sessionsFiltersLogic)'
        loadCustomFiltersFailure: 'load custom filters failure (scenes.sessions.filters.sessionsFiltersLogic)'
    }
    actions: {
        openFilterSelect: (selector: FilterSelector) => void
        closeFilterSelect: () => void
        setAllFilters: (filters: Array<SessionsPropertyFilter>) => void
        updateFilter: (property: SessionsPropertyFilter, selector: FilterSelector) => void
        removeFilter: (selector: number) => void
        dropdownSelected: (type: FilterPropertyType, id: string | number, label: string) => void
        upsertSessionsFilter: (id: number | string | null, name: string) => void
        deleteSessionsFilter: (id: number | string | null) => void
        openEditFilter: (
            filter:
                | SavedFilter
                | {
                      id: null
                  }
        ) => void
        closeEditFilter: () => void
        loadPersonProperties: () => void
        loadPersonPropertiesSuccess: (personProperties: Array<PersonProperty>) => void
        loadPersonPropertiesFailure: (error: string) => void
        loadCustomFilters: (toastMessage?: string) => void
        loadCustomFiltersSuccess: (customFilters: Array<SavedFilter>) => void
        loadCustomFiltersFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        filters: Array<SessionsPropertyFilter>
        openFilter: null | FilterSelector
        editedFilter:
            | SavedFilter
            | {
                  id: null
              }
            | null
        personProperties: Array<PersonProperty>
        personPropertiesLoading: boolean
        customFilters: Array<SavedFilter>
        customFiltersLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        dropdownSelected: ((
            action: {
                type: 'dropdown selected (scenes.sessions.filters.sessionsFiltersLogic)'
                payload: {
                    type: 'person' | 'cohort' | 'action_type' | 'event_type' | 'recording'
                    id: ToastId
                    label: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        upsertSessionsFilter: ((
            action: {
                type: 'upsert sessions filter (scenes.sessions.filters.sessionsFiltersLogic)'
                payload: {
                    id: string | number | null
                    name: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteSessionsFilter: ((
            action: {
                type: 'delete sessions filter (scenes.sessions.filters.sessionsFiltersLogic)'
                payload: {
                    id: string | number | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'sessions', 'filters', 'sessionsFiltersLogic']
    pathString: 'scenes.sessions.filters.sessionsFiltersLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        filters: Array<SessionsPropertyFilter>
        openFilter: null | FilterSelector
        editedFilter:
            | SavedFilter
            | {
                  id: null
              }
            | null
        personProperties: Array<PersonProperty>
        personPropertiesLoading: boolean
        customFilters: Array<SavedFilter>
        customFiltersLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        filters: (state: Array<SessionsPropertyFilter>, action: any, fullState: any) => Array<SessionsPropertyFilter>
        openFilter: (state: null | FilterSelector, action: any, fullState: any) => null | FilterSelector
        editedFilter: (
            state:
                | SavedFilter
                | {
                      id: null
                  }
                | null,
            action: any,
            fullState: any
        ) =>
            | SavedFilter
            | {
                  id: null
              }
            | null
        personProperties: (state: Array<PersonProperty>, action: any, fullState: any) => Array<PersonProperty>
        personPropertiesLoading: (state: boolean, action: any, fullState: any) => boolean
        customFilters: (state: Array<SavedFilter>, action: any, fullState: any) => Array<SavedFilter>
        customFiltersLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        filters: Array<SessionsPropertyFilter>
        openFilter: null | FilterSelector
        editedFilter:
            | SavedFilter
            | {
                  id: null
              }
            | null
        personProperties: Array<PersonProperty>
        personPropertiesLoading: boolean
        customFilters: Array<SavedFilter>
        customFiltersLoading: boolean
    }
    selectors: {
        filters: (state: any, props?: any) => Array<SessionsPropertyFilter>
        openFilter: (state: any, props?: any) => null | FilterSelector
        editedFilter: (
            state: any,
            props?: any
        ) =>
            | SavedFilter
            | {
                  id: null
              }
            | null
        personProperties: (state: any, props?: any) => Array<PersonProperty>
        personPropertiesLoading: (state: any, props?: any) => boolean
        customFilters: (state: any, props?: any) => Array<SavedFilter>
        customFiltersLoading: (state: any, props?: any) => boolean
        displayedFilterCount: (state: any, props?: any) => number
        displayedFilters: (
            state: any,
            props?: any
        ) => Record<string, { item: SessionsPropertyFilter; selector: number }[]>
        savedFilters: (state: any, props?: any) => SavedFilter[]
        activeFilter: (state: any, props?: any) => SavedFilter | null
    }
    sharedListeners: {}
    values: {
        filters: Array<SessionsPropertyFilter>
        openFilter: null | FilterSelector
        editedFilter:
            | SavedFilter
            | {
                  id: null
              }
            | null
        personProperties: Array<PersonProperty>
        personPropertiesLoading: boolean
        customFilters: Array<SavedFilter>
        customFiltersLoading: boolean
        displayedFilterCount: number
        displayedFilters: Record<string, { item: SessionsPropertyFilter; selector: number }[]>
        savedFilters: SavedFilter[]
        activeFilter: SavedFilter | null
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        displayedFilterCount: (filters: SessionsPropertyFilter[]) => number
        displayedFilters: (
            filters: SessionsPropertyFilter[]
        ) => Record<string, { item: SessionsPropertyFilter; selector: number }[]>
        savedFilters: (customFilters: SavedFilter[]) => SavedFilter[]
        activeFilter: (filters: SessionsPropertyFilter[], savedFilters: SavedFilter[]) => SavedFilter | null
    }
}
