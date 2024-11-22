// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface editLogicType extends Logic {
    actionCreators: {
        setProperties: (
            index: any,
            properties: any
        ) => {
            type: 'set properties (scenes.experimentation.EditFeatureFlag)'
            payload: {
                index: any
                properties: any
            }
        }
        setRolloutPercentage: (
            index: any,
            rollout_percentage: any
        ) => {
            type: 'set rollout percentage (scenes.experimentation.EditFeatureFlag)'
            payload: {
                index: any
                rollout_percentage: any
            }
        }
        addGroup: () => {
            type: 'add group (scenes.experimentation.EditFeatureFlag)'
            payload: {
                value: boolean
            }
        }
        removeGroup: (
            index: any
        ) => {
            type: 'remove group (scenes.experimentation.EditFeatureFlag)'
            payload: {
                index: any
            }
        }
    }
    actionKeys: {
        'set properties (scenes.experimentation.EditFeatureFlag)': 'setProperties'
        'set rollout percentage (scenes.experimentation.EditFeatureFlag)': 'setRolloutPercentage'
        'add group (scenes.experimentation.EditFeatureFlag)': 'addGroup'
        'remove group (scenes.experimentation.EditFeatureFlag)': 'removeGroup'
    }
    actionTypes: {
        setProperties: 'set properties (scenes.experimentation.EditFeatureFlag)'
        setRolloutPercentage: 'set rollout percentage (scenes.experimentation.EditFeatureFlag)'
        addGroup: 'add group (scenes.experimentation.EditFeatureFlag)'
        removeGroup: 'remove group (scenes.experimentation.EditFeatureFlag)'
    }
    actions: {
        setProperties: (index: any, properties: any) => void
        setRolloutPercentage: (index: any, rollout_percentage: any) => void
        addGroup: () => void
        removeGroup: (index: any) => void
    }
    constants: {}
    defaults: {
        groups: any
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'experimentation', 'EditFeatureFlag']
    pathString: 'scenes.experimentation.EditFeatureFlag'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        groups: any
    }
    reducerOptions: {}
    reducers: {
        groups: (state: any, action: any, fullState: any) => any
    }
    selector: (
        state: any
    ) => {
        groups: any
    }
    selectors: {
        groups: (state: any, props?: any) => any
        hasRollout: (state: any, props?: any) => boolean
        hasProperties: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        groups: any
        hasRollout: boolean
        hasProperties: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
