// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface eventsLogicType extends Logic {
    actionCreators: {
        setTab: (
            tab: string
        ) => {
            type: 'set tab (scenes.events.Events)'
            payload: {
                tab: string
            }
        }
    }
    actionKeys: {
        'set tab (scenes.events.Events)': 'setTab'
    }
    actionTypes: {
        setTab: 'set tab (scenes.events.Events)'
    }
    actions: {
        setTab: (tab: string) => void
    }
    constants: {}
    defaults: {
        tab: string
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'events', 'Events']
    pathString: 'scenes.events.Events'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        tab: string
    }
    reducerOptions: {}
    reducers: {
        tab: (state: string, action: any, fullState: any) => string
    }
    selector: (
        state: any
    ) => {
        tab: string
    }
    selectors: {
        tab: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        tab: string
    }
    _isKea: true
    _isKeaWithKey: false
}
