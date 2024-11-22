// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface navigationLogicType<UserType, SystemStatus, WarningType> extends Logic {
    actionCreators: {
        setMenuCollapsed: (
            collapsed: boolean
        ) => {
            type: 'set menu collapsed (layout.navigation.navigationLogic)'
            payload: {
                collapsed: boolean
            }
        }
        collapseMenu: () => {
            type: 'collapse menu (layout.navigation.navigationLogic)'
            payload: void
        }
        setSystemStatus: (
            status: SystemStatus
        ) => {
            type: 'set system status (layout.navigation.navigationLogic)'
            payload: {
                status: SystemStatus
            }
        }
        setChangelogModalOpen: (
            isOpen: boolean
        ) => {
            type: 'set changelog modal open (layout.navigation.navigationLogic)'
            payload: {
                isOpen: boolean
            }
        }
        updateCurrentOrganization: (
            id: string
        ) => {
            type: 'update current organization (layout.navigation.navigationLogic)'
            payload: {
                id: string
            }
        }
        updateCurrentProject: (
            id: number,
            dest: string
        ) => {
            type: 'update current project (layout.navigation.navigationLogic)'
            payload: {
                id: number
                dest: string
            }
        }
        setToolbarModalOpen: (
            isOpen: boolean
        ) => {
            type: 'set toolbar modal open (layout.navigation.navigationLogic)'
            payload: {
                isOpen: boolean
            }
        }
        setPinnedDashboardsVisible: (
            visible: boolean
        ) => {
            type: 'set pinned dashboards visible (layout.navigation.navigationLogic)'
            payload: {
                visible: boolean
            }
        }
        setInviteMembersModalOpen: (
            isOpen: boolean
        ) => {
            type: 'set invite members modal open (layout.navigation.navigationLogic)'
            payload: {
                isOpen: boolean
            }
        }
        loadLatestVersion: () => {
            type: 'load latest version (layout.navigation.navigationLogic)'
            payload: any
        }
        loadLatestVersionSuccess: (
            latestVersion: string | null
        ) => {
            type: 'load latest version success (layout.navigation.navigationLogic)'
            payload: {
                latestVersion: string | null
            }
        }
        loadLatestVersionFailure: (
            error: string
        ) => {
            type: 'load latest version failure (layout.navigation.navigationLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set menu collapsed (layout.navigation.navigationLogic)': 'setMenuCollapsed'
        'collapse menu (layout.navigation.navigationLogic)': 'collapseMenu'
        'set system status (layout.navigation.navigationLogic)': 'setSystemStatus'
        'set changelog modal open (layout.navigation.navigationLogic)': 'setChangelogModalOpen'
        'update current organization (layout.navigation.navigationLogic)': 'updateCurrentOrganization'
        'update current project (layout.navigation.navigationLogic)': 'updateCurrentProject'
        'set toolbar modal open (layout.navigation.navigationLogic)': 'setToolbarModalOpen'
        'set pinned dashboards visible (layout.navigation.navigationLogic)': 'setPinnedDashboardsVisible'
        'set invite members modal open (layout.navigation.navigationLogic)': 'setInviteMembersModalOpen'
        'load latest version (layout.navigation.navigationLogic)': 'loadLatestVersion'
        'load latest version success (layout.navigation.navigationLogic)': 'loadLatestVersionSuccess'
        'load latest version failure (layout.navigation.navigationLogic)': 'loadLatestVersionFailure'
    }
    actionTypes: {
        setMenuCollapsed: 'set menu collapsed (layout.navigation.navigationLogic)'
        collapseMenu: 'collapse menu (layout.navigation.navigationLogic)'
        setSystemStatus: 'set system status (layout.navigation.navigationLogic)'
        setChangelogModalOpen: 'set changelog modal open (layout.navigation.navigationLogic)'
        updateCurrentOrganization: 'update current organization (layout.navigation.navigationLogic)'
        updateCurrentProject: 'update current project (layout.navigation.navigationLogic)'
        setToolbarModalOpen: 'set toolbar modal open (layout.navigation.navigationLogic)'
        setPinnedDashboardsVisible: 'set pinned dashboards visible (layout.navigation.navigationLogic)'
        setInviteMembersModalOpen: 'set invite members modal open (layout.navigation.navigationLogic)'
        loadLatestVersion: 'load latest version (layout.navigation.navigationLogic)'
        loadLatestVersionSuccess: 'load latest version success (layout.navigation.navigationLogic)'
        loadLatestVersionFailure: 'load latest version failure (layout.navigation.navigationLogic)'
    }
    actions: {
        setMenuCollapsed: (collapsed: boolean) => void
        collapseMenu: () => void
        setSystemStatus: (status: SystemStatus) => void
        setChangelogModalOpen: (isOpen: boolean) => void
        updateCurrentOrganization: (id: string) => void
        updateCurrentProject: (id: number, dest: string) => void
        setToolbarModalOpen: (isOpen: boolean) => void
        setPinnedDashboardsVisible: (visible: boolean) => void
        setInviteMembersModalOpen: (isOpen: boolean) => void
        loadLatestVersion: () => void
        loadLatestVersionSuccess: (latestVersion: string | null) => void
        loadLatestVersionFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        menuCollapsed: boolean
        changelogModalOpen: boolean
        toolbarModalOpen: boolean
        inviteMembersModalOpen: boolean
        pinnedDashboardsVisible: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        collapseMenu: ((
            action: {
                type: 'collapse menu (layout.navigation.navigationLogic)'
                payload: void
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateCurrentOrganization: ((
            action: {
                type: 'update current organization (layout.navigation.navigationLogic)'
                payload: {
                    id: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateCurrentProject: ((
            action: {
                type: 'update current project (layout.navigation.navigationLogic)'
                payload: {
                    id: number
                    dest: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['layout', 'navigation', 'navigationLogic']
    pathString: 'layout.navigation.navigationLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        menuCollapsed: boolean
        changelogModalOpen: boolean
        toolbarModalOpen: boolean
        inviteMembersModalOpen: boolean
        pinnedDashboardsVisible: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        menuCollapsed: (state: boolean, action: any, fullState: any) => boolean
        changelogModalOpen: (state: boolean, action: any, fullState: any) => boolean
        toolbarModalOpen: (state: boolean, action: any, fullState: any) => boolean
        inviteMembersModalOpen: (state: boolean, action: any, fullState: any) => boolean
        pinnedDashboardsVisible: (state: boolean, action: any, fullState: any) => boolean
        latestVersion: (state: string | null, action: any, fullState: any) => string | null
        latestVersionLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        menuCollapsed: boolean
        changelogModalOpen: boolean
        toolbarModalOpen: boolean
        inviteMembersModalOpen: boolean
        pinnedDashboardsVisible: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
    }
    selectors: {
        menuCollapsed: (state: any, props?: any) => boolean
        changelogModalOpen: (state: any, props?: any) => boolean
        toolbarModalOpen: (state: any, props?: any) => boolean
        inviteMembersModalOpen: (state: any, props?: any) => boolean
        pinnedDashboardsVisible: (state: any, props?: any) => boolean
        latestVersion: (state: any, props?: any) => string | null
        latestVersionLoading: (state: any, props?: any) => boolean
        systemStatus: (state: any, props?: any) => boolean
        updateAvailable: (state: any, props?: any) => boolean
        currentTeam: (state: any, props?: any) => number | undefined
        demoWarning: (state: any, props?: any) => WarningType
    }
    sharedListeners: {}
    values: {
        menuCollapsed: boolean
        changelogModalOpen: boolean
        toolbarModalOpen: boolean
        inviteMembersModalOpen: boolean
        pinnedDashboardsVisible: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
        systemStatus: boolean
        updateAvailable: boolean
        currentTeam: number | undefined
        demoWarning: WarningType
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        systemStatus: (systemStatus: SystemStatus[], systemStatusLoading: boolean) => boolean
        updateAvailable: (latestVersion: string | null, latestVersionLoading: boolean, user: UserType | null) => boolean
        currentTeam: (user: UserType | null) => number | undefined
        demoWarning: (user: UserType | null, currentOrganization: OrganizationType | null) => WarningType
    }
}
