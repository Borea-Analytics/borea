// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface pluginsLogicType<
    PluginType,
    PluginConfigType,
    PluginRepositoryEntry,
    PluginTypeWithConfig,
    PluginInstallationType,
    PluginUpdateStatusType,
    PluginTab,
    PluginForm
> extends Logic {
    actionCreators: {
        editPlugin: (
            id: number | null,
            pluginConfigChanges?: Record<string, any>
        ) => {
            type: 'edit plugin (scenes.plugins.pluginsLogic)'
            payload: {
                id: number | null
                pluginConfigChanges: Record<string, any>
            }
        }
        savePluginConfig: (
            pluginConfigChanges: Record<string, any>
        ) => {
            type: 'save plugin config (scenes.plugins.pluginsLogic)'
            payload: {
                pluginConfigChanges: Record<string, any>
            }
        }
        installPlugin: (
            pluginUrl: string,
            pluginType: PluginInstallationType
        ) => {
            type: 'install plugin (scenes.plugins.pluginsLogic)'
            payload: {
                pluginUrl: string
                pluginType: PluginInstallationType
            }
        }
        uninstallPlugin: (
            name: string
        ) => {
            type: 'uninstall plugin (scenes.plugins.pluginsLogic)'
            payload: {
                name: string
            }
        }
        setCustomPluginUrl: (
            customPluginUrl: string
        ) => {
            type: 'set custom plugin url (scenes.plugins.pluginsLogic)'
            payload: {
                customPluginUrl: string
            }
        }
        setLocalPluginUrl: (
            localPluginUrl: string
        ) => {
            type: 'set local plugin url (scenes.plugins.pluginsLogic)'
            payload: {
                localPluginUrl: string
            }
        }
        setSourcePluginName: (
            sourcePluginName: string
        ) => {
            type: 'set source plugin name (scenes.plugins.pluginsLogic)'
            payload: {
                sourcePluginName: string
            }
        }
        setPluginTab: (
            tab: PluginTab
        ) => {
            type: 'set plugin tab (scenes.plugins.pluginsLogic)'
            payload: {
                tab: PluginTab
            }
        }
        setEditingSource: (
            editingSource: boolean
        ) => {
            type: 'set editing source (scenes.plugins.pluginsLogic)'
            payload: {
                editingSource: boolean
            }
        }
        resetPluginConfigError: (
            id: number
        ) => {
            type: 'reset plugin config error (scenes.plugins.pluginsLogic)'
            payload: {
                id: number
            }
        }
        editPluginSource: (values: {
            id: number
            name: string
            source: string
            configSchema: Record<string, any>
        }) => {
            type: 'edit plugin source (scenes.plugins.pluginsLogic)'
            payload: {
                id: number
                name: string
                source: string
                configSchema: Record<string, any>
            }
        }
        checkForUpdates: (
            checkAll: boolean,
            initialUpdateStatus?: Record<string, PluginUpdateStatusType>
        ) => {
            type: 'check for updates (scenes.plugins.pluginsLogic)'
            payload: {
                checkAll: boolean
                initialUpdateStatus: Record<string, PluginUpdateStatusType>
            }
        }
        checkedForUpdates: () => {
            type: 'checked for updates (scenes.plugins.pluginsLogic)'
            payload: {
                value: boolean
            }
        }
        setUpdateStatus: (
            id: number,
            tag: string,
            latestTag: string
        ) => {
            type: 'set update status (scenes.plugins.pluginsLogic)'
            payload: {
                id: number
                tag: string
                latestTag: string
            }
        }
        setUpdateError: (
            id: number
        ) => {
            type: 'set update error (scenes.plugins.pluginsLogic)'
            payload: {
                id: number
            }
        }
        updatePlugin: (
            id: number
        ) => {
            type: 'update plugin (scenes.plugins.pluginsLogic)'
            payload: {
                id: number
            }
        }
        pluginUpdated: (
            id: number
        ) => {
            type: 'plugin updated (scenes.plugins.pluginsLogic)'
            payload: {
                id: number
            }
        }
        generateApiKeysIfNeeded: (
            form: PluginForm
        ) => {
            type: 'generate api keys if needed (scenes.plugins.pluginsLogic)'
            payload: {
                form: PluginForm
            }
        }
        rearrange: () => {
            type: 'rearrange (scenes.plugins.pluginsLogic)'
            payload: {
                value: boolean
            }
        }
        setTemporaryOrder: (
            temporaryOrder: Record<number, number>,
            movedPluginId: number
        ) => {
            type: 'set temporary order (scenes.plugins.pluginsLogic)'
            payload: {
                temporaryOrder: Record<number, number>
                movedPluginId: number
            }
        }
        savePluginOrders: (
            newOrders: Record<number, number>
        ) => {
            type: 'save plugin orders (scenes.plugins.pluginsLogic)'
            payload: {
                newOrders: Record<number, number>
            }
        }
        cancelRearranging: () => {
            type: 'cancel rearranging (scenes.plugins.pluginsLogic)'
            payload: {
                value: boolean
            }
        }
        loadPlugins: () => {
            type: 'load plugins (scenes.plugins.pluginsLogic)'
            payload: any
        }
        loadPluginsSuccess: (
            plugins: Record<number, PluginType>
        ) => {
            type: 'load plugins success (scenes.plugins.pluginsLogic)'
            payload: {
                plugins: Record<number, PluginType>
            }
        }
        loadPluginsFailure: (
            error: string
        ) => {
            type: 'load plugins failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        installPluginSuccess: (
            plugins: Record<number, PluginType>
        ) => {
            type: 'install plugin success (scenes.plugins.pluginsLogic)'
            payload: {
                plugins: Record<number, PluginType>
            }
        }
        installPluginFailure: (
            error: string
        ) => {
            type: 'install plugin failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        uninstallPluginSuccess: (
            plugins: Record<number, PluginType>
        ) => {
            type: 'uninstall plugin success (scenes.plugins.pluginsLogic)'
            payload: {
                plugins: Record<number, PluginType>
            }
        }
        uninstallPluginFailure: (
            error: string
        ) => {
            type: 'uninstall plugin failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        editPluginSourceSuccess: (
            plugins: Record<number, PluginType>
        ) => {
            type: 'edit plugin source success (scenes.plugins.pluginsLogic)'
            payload: {
                plugins: Record<number, PluginType>
            }
        }
        editPluginSourceFailure: (
            error: string
        ) => {
            type: 'edit plugin source failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        updatePluginSuccess: (
            plugins: Record<number, PluginType>
        ) => {
            type: 'update plugin success (scenes.plugins.pluginsLogic)'
            payload: {
                plugins: Record<number, PluginType>
            }
        }
        updatePluginFailure: (
            error: string
        ) => {
            type: 'update plugin failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        loadPluginConfigs: () => {
            type: 'load plugin configs (scenes.plugins.pluginsLogic)'
            payload: any
        }
        loadPluginConfigsSuccess: (
            pluginConfigs: Record<string, PluginConfigType>
        ) => {
            type: 'load plugin configs success (scenes.plugins.pluginsLogic)'
            payload: {
                pluginConfigs: Record<string, PluginConfigType>
            }
        }
        loadPluginConfigsFailure: (
            error: string
        ) => {
            type: 'load plugin configs failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        savePluginConfigSuccess: (
            pluginConfigs: Record<string, PluginConfigType>
        ) => {
            type: 'save plugin config success (scenes.plugins.pluginsLogic)'
            payload: {
                pluginConfigs: Record<string, PluginConfigType>
            }
        }
        savePluginConfigFailure: (
            error: string
        ) => {
            type: 'save plugin config failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        toggleEnabled: ({
            id,
            enabled,
        }: any) => {
            type: 'toggle enabled (scenes.plugins.pluginsLogic)'
            payload: any
        }
        toggleEnabledSuccess: (
            pluginConfigs: Record<string, PluginConfigType>
        ) => {
            type: 'toggle enabled success (scenes.plugins.pluginsLogic)'
            payload: {
                pluginConfigs: Record<string, PluginConfigType>
            }
        }
        toggleEnabledFailure: (
            error: string
        ) => {
            type: 'toggle enabled failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        resetPluginConfigErrorSuccess: (
            pluginConfigs: Record<string, PluginConfigType>
        ) => {
            type: 'reset plugin config error success (scenes.plugins.pluginsLogic)'
            payload: {
                pluginConfigs: Record<string, PluginConfigType>
            }
        }
        resetPluginConfigErrorFailure: (
            error: string
        ) => {
            type: 'reset plugin config error failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        savePluginOrdersSuccess: (
            pluginConfigs: Record<string, PluginConfigType>
        ) => {
            type: 'save plugin orders success (scenes.plugins.pluginsLogic)'
            payload: {
                pluginConfigs: Record<string, PluginConfigType>
            }
        }
        savePluginOrdersFailure: (
            error: string
        ) => {
            type: 'save plugin orders failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
        loadRepository: () => {
            type: 'load repository (scenes.plugins.pluginsLogic)'
            payload: any
        }
        loadRepositorySuccess: (
            repository: Record<string, PluginRepositoryEntry>
        ) => {
            type: 'load repository success (scenes.plugins.pluginsLogic)'
            payload: {
                repository: Record<string, PluginRepositoryEntry>
            }
        }
        loadRepositoryFailure: (
            error: string
        ) => {
            type: 'load repository failure (scenes.plugins.pluginsLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'edit plugin (scenes.plugins.pluginsLogic)': 'editPlugin'
        'save plugin config (scenes.plugins.pluginsLogic)': 'savePluginConfig'
        'install plugin (scenes.plugins.pluginsLogic)': 'installPlugin'
        'uninstall plugin (scenes.plugins.pluginsLogic)': 'uninstallPlugin'
        'set custom plugin url (scenes.plugins.pluginsLogic)': 'setCustomPluginUrl'
        'set local plugin url (scenes.plugins.pluginsLogic)': 'setLocalPluginUrl'
        'set source plugin name (scenes.plugins.pluginsLogic)': 'setSourcePluginName'
        'set plugin tab (scenes.plugins.pluginsLogic)': 'setPluginTab'
        'set editing source (scenes.plugins.pluginsLogic)': 'setEditingSource'
        'reset plugin config error (scenes.plugins.pluginsLogic)': 'resetPluginConfigError'
        'edit plugin source (scenes.plugins.pluginsLogic)': 'editPluginSource'
        'check for updates (scenes.plugins.pluginsLogic)': 'checkForUpdates'
        'checked for updates (scenes.plugins.pluginsLogic)': 'checkedForUpdates'
        'set update status (scenes.plugins.pluginsLogic)': 'setUpdateStatus'
        'set update error (scenes.plugins.pluginsLogic)': 'setUpdateError'
        'update plugin (scenes.plugins.pluginsLogic)': 'updatePlugin'
        'plugin updated (scenes.plugins.pluginsLogic)': 'pluginUpdated'
        'generate api keys if needed (scenes.plugins.pluginsLogic)': 'generateApiKeysIfNeeded'
        'rearrange (scenes.plugins.pluginsLogic)': 'rearrange'
        'set temporary order (scenes.plugins.pluginsLogic)': 'setTemporaryOrder'
        'save plugin orders (scenes.plugins.pluginsLogic)': 'savePluginOrders'
        'cancel rearranging (scenes.plugins.pluginsLogic)': 'cancelRearranging'
        'load plugins (scenes.plugins.pluginsLogic)': 'loadPlugins'
        'load plugins success (scenes.plugins.pluginsLogic)': 'loadPluginsSuccess'
        'load plugins failure (scenes.plugins.pluginsLogic)': 'loadPluginsFailure'
        'install plugin success (scenes.plugins.pluginsLogic)': 'installPluginSuccess'
        'install plugin failure (scenes.plugins.pluginsLogic)': 'installPluginFailure'
        'uninstall plugin success (scenes.plugins.pluginsLogic)': 'uninstallPluginSuccess'
        'uninstall plugin failure (scenes.plugins.pluginsLogic)': 'uninstallPluginFailure'
        'edit plugin source success (scenes.plugins.pluginsLogic)': 'editPluginSourceSuccess'
        'edit plugin source failure (scenes.plugins.pluginsLogic)': 'editPluginSourceFailure'
        'update plugin success (scenes.plugins.pluginsLogic)': 'updatePluginSuccess'
        'update plugin failure (scenes.plugins.pluginsLogic)': 'updatePluginFailure'
        'load plugin configs (scenes.plugins.pluginsLogic)': 'loadPluginConfigs'
        'load plugin configs success (scenes.plugins.pluginsLogic)': 'loadPluginConfigsSuccess'
        'load plugin configs failure (scenes.plugins.pluginsLogic)': 'loadPluginConfigsFailure'
        'save plugin config success (scenes.plugins.pluginsLogic)': 'savePluginConfigSuccess'
        'save plugin config failure (scenes.plugins.pluginsLogic)': 'savePluginConfigFailure'
        'toggle enabled (scenes.plugins.pluginsLogic)': 'toggleEnabled'
        'toggle enabled success (scenes.plugins.pluginsLogic)': 'toggleEnabledSuccess'
        'toggle enabled failure (scenes.plugins.pluginsLogic)': 'toggleEnabledFailure'
        'reset plugin config error success (scenes.plugins.pluginsLogic)': 'resetPluginConfigErrorSuccess'
        'reset plugin config error failure (scenes.plugins.pluginsLogic)': 'resetPluginConfigErrorFailure'
        'save plugin orders success (scenes.plugins.pluginsLogic)': 'savePluginOrdersSuccess'
        'save plugin orders failure (scenes.plugins.pluginsLogic)': 'savePluginOrdersFailure'
        'load repository (scenes.plugins.pluginsLogic)': 'loadRepository'
        'load repository success (scenes.plugins.pluginsLogic)': 'loadRepositorySuccess'
        'load repository failure (scenes.plugins.pluginsLogic)': 'loadRepositoryFailure'
    }
    actionTypes: {
        editPlugin: 'edit plugin (scenes.plugins.pluginsLogic)'
        savePluginConfig: 'save plugin config (scenes.plugins.pluginsLogic)'
        installPlugin: 'install plugin (scenes.plugins.pluginsLogic)'
        uninstallPlugin: 'uninstall plugin (scenes.plugins.pluginsLogic)'
        setCustomPluginUrl: 'set custom plugin url (scenes.plugins.pluginsLogic)'
        setLocalPluginUrl: 'set local plugin url (scenes.plugins.pluginsLogic)'
        setSourcePluginName: 'set source plugin name (scenes.plugins.pluginsLogic)'
        setPluginTab: 'set plugin tab (scenes.plugins.pluginsLogic)'
        setEditingSource: 'set editing source (scenes.plugins.pluginsLogic)'
        resetPluginConfigError: 'reset plugin config error (scenes.plugins.pluginsLogic)'
        editPluginSource: 'edit plugin source (scenes.plugins.pluginsLogic)'
        checkForUpdates: 'check for updates (scenes.plugins.pluginsLogic)'
        checkedForUpdates: 'checked for updates (scenes.plugins.pluginsLogic)'
        setUpdateStatus: 'set update status (scenes.plugins.pluginsLogic)'
        setUpdateError: 'set update error (scenes.plugins.pluginsLogic)'
        updatePlugin: 'update plugin (scenes.plugins.pluginsLogic)'
        pluginUpdated: 'plugin updated (scenes.plugins.pluginsLogic)'
        generateApiKeysIfNeeded: 'generate api keys if needed (scenes.plugins.pluginsLogic)'
        rearrange: 'rearrange (scenes.plugins.pluginsLogic)'
        setTemporaryOrder: 'set temporary order (scenes.plugins.pluginsLogic)'
        savePluginOrders: 'save plugin orders (scenes.plugins.pluginsLogic)'
        cancelRearranging: 'cancel rearranging (scenes.plugins.pluginsLogic)'
        loadPlugins: 'load plugins (scenes.plugins.pluginsLogic)'
        loadPluginsSuccess: 'load plugins success (scenes.plugins.pluginsLogic)'
        loadPluginsFailure: 'load plugins failure (scenes.plugins.pluginsLogic)'
        installPluginSuccess: 'install plugin success (scenes.plugins.pluginsLogic)'
        installPluginFailure: 'install plugin failure (scenes.plugins.pluginsLogic)'
        uninstallPluginSuccess: 'uninstall plugin success (scenes.plugins.pluginsLogic)'
        uninstallPluginFailure: 'uninstall plugin failure (scenes.plugins.pluginsLogic)'
        editPluginSourceSuccess: 'edit plugin source success (scenes.plugins.pluginsLogic)'
        editPluginSourceFailure: 'edit plugin source failure (scenes.plugins.pluginsLogic)'
        updatePluginSuccess: 'update plugin success (scenes.plugins.pluginsLogic)'
        updatePluginFailure: 'update plugin failure (scenes.plugins.pluginsLogic)'
        loadPluginConfigs: 'load plugin configs (scenes.plugins.pluginsLogic)'
        loadPluginConfigsSuccess: 'load plugin configs success (scenes.plugins.pluginsLogic)'
        loadPluginConfigsFailure: 'load plugin configs failure (scenes.plugins.pluginsLogic)'
        savePluginConfigSuccess: 'save plugin config success (scenes.plugins.pluginsLogic)'
        savePluginConfigFailure: 'save plugin config failure (scenes.plugins.pluginsLogic)'
        toggleEnabled: 'toggle enabled (scenes.plugins.pluginsLogic)'
        toggleEnabledSuccess: 'toggle enabled success (scenes.plugins.pluginsLogic)'
        toggleEnabledFailure: 'toggle enabled failure (scenes.plugins.pluginsLogic)'
        resetPluginConfigErrorSuccess: 'reset plugin config error success (scenes.plugins.pluginsLogic)'
        resetPluginConfigErrorFailure: 'reset plugin config error failure (scenes.plugins.pluginsLogic)'
        savePluginOrdersSuccess: 'save plugin orders success (scenes.plugins.pluginsLogic)'
        savePluginOrdersFailure: 'save plugin orders failure (scenes.plugins.pluginsLogic)'
        loadRepository: 'load repository (scenes.plugins.pluginsLogic)'
        loadRepositorySuccess: 'load repository success (scenes.plugins.pluginsLogic)'
        loadRepositoryFailure: 'load repository failure (scenes.plugins.pluginsLogic)'
    }
    actions: {
        editPlugin: (id: number | null, pluginConfigChanges?: Record<string, any>) => void
        savePluginConfig: (pluginConfigChanges: Record<string, any>) => void
        installPlugin: (pluginUrl: string, pluginType: PluginInstallationType) => void
        uninstallPlugin: (name: string) => void
        setCustomPluginUrl: (customPluginUrl: string) => void
        setLocalPluginUrl: (localPluginUrl: string) => void
        setSourcePluginName: (sourcePluginName: string) => void
        setPluginTab: (tab: PluginTab) => void
        setEditingSource: (editingSource: boolean) => void
        resetPluginConfigError: (id: number) => void
        editPluginSource: (values: {
            id: number
            name: string
            source: string
            configSchema: Record<string, any>
        }) => void
        checkForUpdates: (checkAll: boolean, initialUpdateStatus?: Record<string, PluginUpdateStatusType>) => void
        checkedForUpdates: () => void
        setUpdateStatus: (id: number, tag: string, latestTag: string) => void
        setUpdateError: (id: number) => void
        updatePlugin: (id: number) => void
        pluginUpdated: (id: number) => void
        generateApiKeysIfNeeded: (form: PluginForm) => void
        rearrange: () => void
        setTemporaryOrder: (temporaryOrder: Record<number, number>, movedPluginId: number) => void
        savePluginOrders: (newOrders: Record<number, number>) => void
        cancelRearranging: () => void
        loadPlugins: () => void
        loadPluginsSuccess: (plugins: Record<number, PluginType>) => void
        loadPluginsFailure: (error: string) => void
        installPluginSuccess: (plugins: Record<number, PluginType>) => void
        installPluginFailure: (error: string) => void
        uninstallPluginSuccess: (plugins: Record<number, PluginType>) => void
        uninstallPluginFailure: (error: string) => void
        editPluginSourceSuccess: (plugins: Record<number, PluginType>) => void
        editPluginSourceFailure: (error: string) => void
        updatePluginSuccess: (plugins: Record<number, PluginType>) => void
        updatePluginFailure: (error: string) => void
        loadPluginConfigs: () => void
        loadPluginConfigsSuccess: (pluginConfigs: Record<string, PluginConfigType>) => void
        loadPluginConfigsFailure: (error: string) => void
        savePluginConfigSuccess: (pluginConfigs: Record<string, PluginConfigType>) => void
        savePluginConfigFailure: (error: string) => void
        toggleEnabled: ({ id, enabled }: any) => void
        toggleEnabledSuccess: (pluginConfigs: Record<string, PluginConfigType>) => void
        toggleEnabledFailure: (error: string) => void
        resetPluginConfigErrorSuccess: (pluginConfigs: Record<string, PluginConfigType>) => void
        resetPluginConfigErrorFailure: (error: string) => void
        savePluginOrdersSuccess: (pluginConfigs: Record<string, PluginConfigType>) => void
        savePluginOrdersFailure: (error: string) => void
        loadRepository: () => void
        loadRepositorySuccess: (repository: Record<string, PluginRepositoryEntry>) => void
        loadRepositoryFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        plugins: Record<number, PluginType>
        pluginsLoading: boolean
        pluginConfigs: Record<string, PluginConfigType>
        pluginConfigsLoading: boolean
        repository: Record<string, PluginRepositoryEntry>
        repositoryLoading: boolean
        installingPluginUrl: string | null
        editingPluginId: number | null
        editingPluginInitialChanges: Record<string, any>
        editingSource: boolean
        customPluginUrl: string
        localPluginUrl: string
        sourcePluginName: string
        pluginError: null | string
        pluginTab: PluginTab
        updateStatus: Record<string, PluginUpdateStatusType>
        updatingPlugin: number | null
        checkingForUpdates: boolean
        rearranging: boolean
        temporaryOrder: Record<number, number>
        movedPlugins: Record<number, boolean>
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        checkForUpdates: ((
            action: {
                type: 'check for updates (scenes.plugins.pluginsLogic)'
                payload: {
                    checkAll: boolean
                    initialUpdateStatus: Record<string, PluginUpdateStatusType>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadPluginsSuccess: ((
            action: {
                type: 'load plugins success (scenes.plugins.pluginsLogic)'
                payload: {
                    plugins: Record<number, PluginType>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        generateApiKeysIfNeeded: ((
            action: {
                type: 'generate api keys if needed (scenes.plugins.pluginsLogic)'
                payload: {
                    form: PluginForm
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'plugins', 'pluginsLogic']
    pathString: 'scenes.plugins.pluginsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        plugins: Record<number, PluginType>
        pluginsLoading: boolean
        pluginConfigs: Record<string, PluginConfigType>
        pluginConfigsLoading: boolean
        repository: Record<string, PluginRepositoryEntry>
        repositoryLoading: boolean
        installingPluginUrl: string | null
        editingPluginId: number | null
        editingPluginInitialChanges: Record<string, any>
        editingSource: boolean
        customPluginUrl: string
        localPluginUrl: string
        sourcePluginName: string
        pluginError: null | string
        pluginTab: PluginTab
        updateStatus: Record<string, PluginUpdateStatusType>
        updatingPlugin: number | null
        checkingForUpdates: boolean
        rearranging: boolean
        temporaryOrder: Record<number, number>
        movedPlugins: Record<number, boolean>
    }
    reducerOptions: {}
    reducers: {
        plugins: (state: Record<number, PluginType>, action: any, fullState: any) => Record<number, PluginType>
        pluginsLoading: (state: boolean, action: any, fullState: any) => boolean
        pluginConfigs: (
            state: Record<string, PluginConfigType>,
            action: any,
            fullState: any
        ) => Record<string, PluginConfigType>
        pluginConfigsLoading: (state: boolean, action: any, fullState: any) => boolean
        repository: (
            state: Record<string, PluginRepositoryEntry>,
            action: any,
            fullState: any
        ) => Record<string, PluginRepositoryEntry>
        repositoryLoading: (state: boolean, action: any, fullState: any) => boolean
        installingPluginUrl: (state: string | null, action: any, fullState: any) => string | null
        editingPluginId: (state: number | null, action: any, fullState: any) => number | null
        editingPluginInitialChanges: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        editingSource: (state: boolean, action: any, fullState: any) => boolean
        customPluginUrl: (state: string, action: any, fullState: any) => string
        localPluginUrl: (state: string, action: any, fullState: any) => string
        sourcePluginName: (state: string, action: any, fullState: any) => string
        pluginError: (state: null | string, action: any, fullState: any) => null | string
        pluginTab: (state: PluginTab, action: any, fullState: any) => PluginTab
        updateStatus: (
            state: Record<string, PluginUpdateStatusType>,
            action: any,
            fullState: any
        ) => Record<string, PluginUpdateStatusType>
        updatingPlugin: (state: number | null, action: any, fullState: any) => number | null
        checkingForUpdates: (state: boolean, action: any, fullState: any) => boolean
        rearranging: (state: boolean, action: any, fullState: any) => boolean
        temporaryOrder: (state: Record<number, number>, action: any, fullState: any) => Record<number, number>
        movedPlugins: (state: Record<number, boolean>, action: any, fullState: any) => Record<number, boolean>
    }
    selector: (
        state: any
    ) => {
        plugins: Record<number, PluginType>
        pluginsLoading: boolean
        pluginConfigs: Record<string, PluginConfigType>
        pluginConfigsLoading: boolean
        repository: Record<string, PluginRepositoryEntry>
        repositoryLoading: boolean
        installingPluginUrl: string | null
        editingPluginId: number | null
        editingPluginInitialChanges: Record<string, any>
        editingSource: boolean
        customPluginUrl: string
        localPluginUrl: string
        sourcePluginName: string
        pluginError: null | string
        pluginTab: PluginTab
        updateStatus: Record<string, PluginUpdateStatusType>
        updatingPlugin: number | null
        checkingForUpdates: boolean
        rearranging: boolean
        temporaryOrder: Record<number, number>
        movedPlugins: Record<number, boolean>
    }
    selectors: {
        plugins: (state: any, props?: any) => Record<number, PluginType>
        pluginsLoading: (state: any, props?: any) => boolean
        pluginConfigs: (state: any, props?: any) => Record<string, PluginConfigType>
        pluginConfigsLoading: (state: any, props?: any) => boolean
        repository: (state: any, props?: any) => Record<string, PluginRepositoryEntry>
        repositoryLoading: (state: any, props?: any) => boolean
        installingPluginUrl: (state: any, props?: any) => string | null
        editingPluginId: (state: any, props?: any) => number | null
        editingPluginInitialChanges: (state: any, props?: any) => Record<string, any>
        editingSource: (state: any, props?: any) => boolean
        customPluginUrl: (state: any, props?: any) => string
        localPluginUrl: (state: any, props?: any) => string
        sourcePluginName: (state: any, props?: any) => string
        pluginError: (state: any, props?: any) => null | string
        pluginTab: (state: any, props?: any) => PluginTab
        updateStatus: (state: any, props?: any) => Record<string, PluginUpdateStatusType>
        updatingPlugin: (state: any, props?: any) => number | null
        checkingForUpdates: (state: any, props?: any) => boolean
        rearranging: (state: any, props?: any) => boolean
        temporaryOrder: (state: any, props?: any) => Record<number, number>
        movedPlugins: (state: any, props?: any) => Record<number, boolean>
        installedPlugins: (state: any, props?: any) => PluginTypeWithConfig[]
        enabledPlugins: (state: any, props?: any) => PluginTypeWithConfig[]
        nextPluginOrder: (state: any, props?: any) => number
        disabledPlugins: (state: any, props?: any) => PluginTypeWithConfig[]
        pluginsNeedingUpdates: (state: any, props?: any) => PluginTypeWithConfig[]
        installedPluginUrls: (state: any, props?: any) => Record<string, boolean>
        hasNonSourcePlugins: (state: any, props?: any) => boolean
        uninstalledPlugins: (state: any, props?: any) => PluginRepositoryEntry[]
        editingPlugin: (state: any, props?: any) => PluginTypeWithConfig | null | undefined
        loading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        plugins: Record<number, PluginType>
        pluginsLoading: boolean
        pluginConfigs: Record<string, PluginConfigType>
        pluginConfigsLoading: boolean
        repository: Record<string, PluginRepositoryEntry>
        repositoryLoading: boolean
        installingPluginUrl: string | null
        editingPluginId: number | null
        editingPluginInitialChanges: Record<string, any>
        editingSource: boolean
        customPluginUrl: string
        localPluginUrl: string
        sourcePluginName: string
        pluginError: null | string
        pluginTab: PluginTab
        updateStatus: Record<string, PluginUpdateStatusType>
        updatingPlugin: number | null
        checkingForUpdates: boolean
        rearranging: boolean
        temporaryOrder: Record<number, number>
        movedPlugins: Record<number, boolean>
        installedPlugins: PluginTypeWithConfig[]
        enabledPlugins: PluginTypeWithConfig[]
        nextPluginOrder: number
        disabledPlugins: PluginTypeWithConfig[]
        pluginsNeedingUpdates: PluginTypeWithConfig[]
        installedPluginUrls: Record<string, boolean>
        hasNonSourcePlugins: boolean
        uninstalledPlugins: PluginRepositoryEntry[]
        editingPlugin: PluginTypeWithConfig | null | undefined
        loading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        installedPlugins: (
            plugins: Record<number, PluginType>,
            pluginConfigs: Record<string, PluginConfigType>,
            updateStatus: Record<string, PluginUpdateStatusType>
        ) => PluginTypeWithConfig[]
        enabledPlugins: (
            installedPlugins: PluginTypeWithConfig[],
            movedPlugins: Record<number, boolean>,
            temporaryOrder: Record<number, number>
        ) => PluginTypeWithConfig[]
        nextPluginOrder: (enabledPlugins: PluginTypeWithConfig[]) => number
        disabledPlugins: (installedPlugins: PluginTypeWithConfig[]) => PluginTypeWithConfig[]
        pluginsNeedingUpdates: (installedPlugins: PluginTypeWithConfig[]) => PluginTypeWithConfig[]
        installedPluginUrls: (installedPlugins: PluginTypeWithConfig[]) => Record<string, boolean>
        hasNonSourcePlugins: (installedPluginUrls: Record<string, boolean>) => boolean
        uninstalledPlugins: (
            installedPluginUrls: Record<string, boolean>,
            repository: Record<string, PluginRepositoryEntry>
        ) => PluginRepositoryEntry[]
        editingPlugin: (
            editingPluginId: number | null,
            installedPlugins: PluginTypeWithConfig[]
        ) => PluginTypeWithConfig | null | undefined
        loading: (pluginsLoading: boolean, repositoryLoading: boolean, pluginConfigsLoading: boolean) => boolean
    }
}
