// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface personsLogicType<PersonPaginatedResponse, PersonType> extends Logic {
    actionCreators: {
        reportPersonDetailViewed: (
            person: PersonType
        ) => {
            type: 'report person detail viewed (scenes.persons.personsLogic)'
            payload: {
                person: PersonType
            }
        }
        setListFilters: (
            payload: any
        ) => {
            type: 'set list filters (scenes.persons.personsLogic)'
            payload: {
                payload: any
            }
        }
        editProperty: (
            key: any,
            newValue: any
        ) => {
            type: 'edit property (scenes.persons.personsLogic)'
            payload: {
                key: any
                newValue: any
            }
        }
        loadPersons: (
            url?: string | null
        ) => {
            type: 'load persons (scenes.persons.personsLogic)'
            payload: string | null
        }
        loadPersonsSuccess: (
            persons: PersonPaginatedResponse
        ) => {
            type: 'load persons success (scenes.persons.personsLogic)'
            payload: {
                persons: PersonPaginatedResponse
            }
        }
        loadPersonsFailure: (
            error: string
        ) => {
            type: 'load persons failure (scenes.persons.personsLogic)'
            payload: {
                error: string
            }
        }
        loadPerson: (
            id: string
        ) => {
            type: 'load person (scenes.persons.personsLogic)'
            payload: string
        }
        loadPersonSuccess: (
            person: PersonType | null
        ) => {
            type: 'load person success (scenes.persons.personsLogic)'
            payload: {
                person: PersonType | null
            }
        }
        loadPersonFailure: (
            error: string
        ) => {
            type: 'load person failure (scenes.persons.personsLogic)'
            payload: {
                error: string
            }
        }
        setPerson: (
            person: PersonType
        ) => {
            type: 'set person (scenes.persons.personsLogic)'
            payload: PersonType
        }
        setPersonSuccess: (
            person: PersonType
        ) => {
            type: 'set person success (scenes.persons.personsLogic)'
            payload: {
                person: PersonType
            }
        }
        setPersonFailure: (
            error: string
        ) => {
            type: 'set person failure (scenes.persons.personsLogic)'
            payload: {
                error: string
            }
        }
        deletePerson: () => {
            type: 'delete person (scenes.persons.personsLogic)'
            payload: any
        }
        deletePersonSuccess: (
            deletedPerson: boolean
        ) => {
            type: 'delete person success (scenes.persons.personsLogic)'
            payload: {
                deletedPerson: boolean
            }
        }
        deletePersonFailure: (
            error: string
        ) => {
            type: 'delete person failure (scenes.persons.personsLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'report person detail viewed (scenes.persons.personsLogic)': 'reportPersonDetailViewed'
        'set list filters (scenes.persons.personsLogic)': 'setListFilters'
        'edit property (scenes.persons.personsLogic)': 'editProperty'
        'load persons (scenes.persons.personsLogic)': 'loadPersons'
        'load persons success (scenes.persons.personsLogic)': 'loadPersonsSuccess'
        'load persons failure (scenes.persons.personsLogic)': 'loadPersonsFailure'
        'load person (scenes.persons.personsLogic)': 'loadPerson'
        'load person success (scenes.persons.personsLogic)': 'loadPersonSuccess'
        'load person failure (scenes.persons.personsLogic)': 'loadPersonFailure'
        'set person (scenes.persons.personsLogic)': 'setPerson'
        'set person success (scenes.persons.personsLogic)': 'setPersonSuccess'
        'set person failure (scenes.persons.personsLogic)': 'setPersonFailure'
        'delete person (scenes.persons.personsLogic)': 'deletePerson'
        'delete person success (scenes.persons.personsLogic)': 'deletePersonSuccess'
        'delete person failure (scenes.persons.personsLogic)': 'deletePersonFailure'
    }
    actionTypes: {
        reportPersonDetailViewed: 'report person detail viewed (scenes.persons.personsLogic)'
        setListFilters: 'set list filters (scenes.persons.personsLogic)'
        editProperty: 'edit property (scenes.persons.personsLogic)'
        loadPersons: 'load persons (scenes.persons.personsLogic)'
        loadPersonsSuccess: 'load persons success (scenes.persons.personsLogic)'
        loadPersonsFailure: 'load persons failure (scenes.persons.personsLogic)'
        loadPerson: 'load person (scenes.persons.personsLogic)'
        loadPersonSuccess: 'load person success (scenes.persons.personsLogic)'
        loadPersonFailure: 'load person failure (scenes.persons.personsLogic)'
        setPerson: 'set person (scenes.persons.personsLogic)'
        setPersonSuccess: 'set person success (scenes.persons.personsLogic)'
        setPersonFailure: 'set person failure (scenes.persons.personsLogic)'
        deletePerson: 'delete person (scenes.persons.personsLogic)'
        deletePersonSuccess: 'delete person success (scenes.persons.personsLogic)'
        deletePersonFailure: 'delete person failure (scenes.persons.personsLogic)'
    }
    actions: {
        reportPersonDetailViewed: (person: PersonType) => void
        setListFilters: (payload: any) => void
        editProperty: (key: any, newValue: any) => void
        loadPersons: (url?: string | null) => void
        loadPersonsSuccess: (persons: PersonPaginatedResponse) => void
        loadPersonsFailure: (error: string) => void
        loadPerson: (id: string) => void
        loadPersonSuccess: (person: PersonType | null) => void
        loadPersonFailure: (error: string) => void
        setPerson: (person: PersonType) => void
        setPersonSuccess: (person: PersonType) => void
        setPersonFailure: (error: string) => void
        deletePerson: () => void
        deletePersonSuccess: (deletedPerson: boolean) => void
        deletePersonFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        listFilters: Record<string, string>
        persons: PersonPaginatedResponse
        personsLoading: boolean
        person: PersonType | null
        personLoading: boolean
        deletedPerson: boolean
        deletedPersonLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {
        editProperty: ((
            action: {
                type: 'edit property (scenes.persons.personsLogic)'
                payload: {
                    key: any
                    newValue: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'persons', 'personsLogic']
    pathString: 'scenes.persons.personsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        listFilters: Record<string, string>
        persons: PersonPaginatedResponse
        personsLoading: boolean
        person: PersonType | null
        personLoading: boolean
        deletedPerson: boolean
        deletedPersonLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        listFilters: (state: Record<string, string>, action: any, fullState: any) => Record<string, string>
        persons: (state: PersonPaginatedResponse, action: any, fullState: any) => PersonPaginatedResponse
        personsLoading: (state: boolean, action: any, fullState: any) => boolean
        person: (state: PersonType | null, action: any, fullState: any) => PersonType | null
        personLoading: (state: boolean, action: any, fullState: any) => boolean
        deletedPerson: (state: boolean, action: any, fullState: any) => boolean
        deletedPersonLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        listFilters: Record<string, string>
        persons: PersonPaginatedResponse
        personsLoading: boolean
        person: PersonType | null
        personLoading: boolean
        deletedPerson: boolean
        deletedPersonLoading: boolean
    }
    selectors: {
        listFilters: (state: any, props?: any) => Record<string, string>
        persons: (state: any, props?: any) => PersonPaginatedResponse
        personsLoading: (state: any, props?: any) => boolean
        person: (state: any, props?: any) => PersonType | null
        personLoading: (state: any, props?: any) => boolean
        deletedPerson: (state: any, props?: any) => boolean
        deletedPersonLoading: (state: any, props?: any) => boolean
        exampleEmail: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        listFilters: Record<string, string>
        persons: PersonPaginatedResponse
        personsLoading: boolean
        person: PersonType | null
        personLoading: boolean
        deletedPerson: boolean
        deletedPersonLoading: boolean
        exampleEmail: string
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        exampleEmail: (persons: PersonPaginatedResponse) => string
    }
}
