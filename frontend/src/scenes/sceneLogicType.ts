// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface sceneLogicType extends Logic {
    actionCreators: {
        loadScene: (
            scene: Scene,
            params: Params
        ) => {
            type: 'load scene (scenes.sceneLogic)'
            payload: {
                scene: Scene
                params: Params
            }
        }
        setScene: (
            scene: Scene,
            params: Params
        ) => {
            type: 'set scene (scenes.sceneLogic)'
            payload: {
                scene: Scene
                params: Params
            }
        }
        setLoadedScene: (
            scene: Scene,
            loadedScene: LoadedScene
        ) => {
            type: 'set loaded scene (scenes.sceneLogic)'
            payload: {
                scene: Scene
                loadedScene: LoadedScene
            }
        }
        showUpgradeModal: (
            featureName: string
        ) => {
            type: 'show upgrade modal (scenes.sceneLogic)'
            payload: {
                featureName: string
            }
        }
        hideUpgradeModal: () => {
            type: 'hide upgrade modal (scenes.sceneLogic)'
            payload: {
                value: boolean
            }
        }
        takeToPricing: () => {
            type: 'take to pricing (scenes.sceneLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'load scene (scenes.sceneLogic)': 'loadScene'
        'set scene (scenes.sceneLogic)': 'setScene'
        'set loaded scene (scenes.sceneLogic)': 'setLoadedScene'
        'show upgrade modal (scenes.sceneLogic)': 'showUpgradeModal'
        'hide upgrade modal (scenes.sceneLogic)': 'hideUpgradeModal'
        'take to pricing (scenes.sceneLogic)': 'takeToPricing'
    }
    actionTypes: {
        loadScene: 'load scene (scenes.sceneLogic)'
        setScene: 'set scene (scenes.sceneLogic)'
        setLoadedScene: 'set loaded scene (scenes.sceneLogic)'
        showUpgradeModal: 'show upgrade modal (scenes.sceneLogic)'
        hideUpgradeModal: 'hide upgrade modal (scenes.sceneLogic)'
        takeToPricing: 'take to pricing (scenes.sceneLogic)'
    }
    actions: {
        loadScene: (scene: Scene, params: Params) => void
        setScene: (scene: Scene, params: Params) => void
        setLoadedScene: (scene: Scene, loadedScene: LoadedScene) => void
        showUpgradeModal: (featureName: string) => void
        hideUpgradeModal: () => void
        takeToPricing: () => void
    }
    constants: {}
    defaults: {
        scene: Scene | null
        params: Params
        loadedScenes: Record<string | number, LoadedScene>
        loadingScene: Scene | null
        upgradeModalFeatureName: string | null
    }
    events: {}
    key: undefined
    listeners: {
        showUpgradeModal: ((
            action: {
                type: 'show upgrade modal (scenes.sceneLogic)'
                payload: {
                    featureName: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        hideUpgradeModal: ((
            action: {
                type: 'hide upgrade modal (scenes.sceneLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        takeToPricing: ((
            action: {
                type: 'take to pricing (scenes.sceneLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setScene: ((
            action: {
                type: 'set scene (scenes.sceneLogic)'
                payload: {
                    scene: Scene
                    params: Params
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadScene: ((
            action: {
                type: 'load scene (scenes.sceneLogic)'
                payload: {
                    scene: Scene
                    params: Params
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'sceneLogic']
    pathString: 'scenes.sceneLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        scene: Scene | null
        params: Params
        loadedScenes: Record<string | number, LoadedScene>
        loadingScene: Scene | null
        upgradeModalFeatureName: string | null
    }
    reducerOptions: {}
    reducers: {
        scene: (state: Scene | null, action: any, fullState: any) => Scene | null
        params: (state: Params, action: any, fullState: any) => Params
        loadedScenes: (
            state: Record<string | number, LoadedScene>,
            action: any,
            fullState: any
        ) => Record<string | number, LoadedScene>
        loadingScene: (state: Scene | null, action: any, fullState: any) => Scene | null
        upgradeModalFeatureName: (state: string | null, action: any, fullState: any) => string | null
    }
    selector: (
        state: any
    ) => {
        scene: Scene | null
        params: Params
        loadedScenes: Record<string | number, LoadedScene>
        loadingScene: Scene | null
        upgradeModalFeatureName: string | null
    }
    selectors: {
        scene: (state: any, props?: any) => Scene | null
        params: (state: any, props?: any) => Params
        loadedScenes: (state: any, props?: any) => Record<string | number, LoadedScene>
        loadingScene: (state: any, props?: any) => Scene | null
        upgradeModalFeatureName: (state: any, props?: any) => string | null
        sceneConfig: (state: any, props?: any) => SceneConfig
    }
    sharedListeners: {}
    values: {
        scene: Scene | null
        params: Params
        loadedScenes: Record<string | number, LoadedScene>
        loadingScene: Scene | null
        upgradeModalFeatureName: string | null
        sceneConfig: SceneConfig
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        sceneConfig: (scene: any) => SceneConfig
    }
}
