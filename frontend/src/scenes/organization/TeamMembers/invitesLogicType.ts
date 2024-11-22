// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface invitesLogicType extends Logic {
    actionCreators: {
        loadInvites: () => {
            type: 'load invites (scenes.organization.TeamMembers.invitesLogic)'
            payload: any
        }
        loadInvitesSuccess: (
            invites: OrganizationInviteType[]
        ) => {
            type: 'load invites success (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                invites: OrganizationInviteType[]
            }
        }
        loadInvitesFailure: (
            error: string
        ) => {
            type: 'load invites failure (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                error: string
            }
        }
        createInvite: ({
            targetEmail,
        }: {
            targetEmail?: string
        }) => {
            type: 'create invite (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                targetEmail?: string
            }
        }
        createInviteSuccess: (
            invites: OrganizationInviteType[]
        ) => {
            type: 'create invite success (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                invites: OrganizationInviteType[]
            }
        }
        createInviteFailure: (
            error: string
        ) => {
            type: 'create invite failure (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                error: string
            }
        }
        deleteInvite: (
            invite: OrganizationInviteType
        ) => {
            type: 'delete invite (scenes.organization.TeamMembers.invitesLogic)'
            payload: OrganizationInviteType
        }
        deleteInviteSuccess: (
            invites: OrganizationInviteType[]
        ) => {
            type: 'delete invite success (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                invites: OrganizationInviteType[]
            }
        }
        deleteInviteFailure: (
            error: string
        ) => {
            type: 'delete invite failure (scenes.organization.TeamMembers.invitesLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'load invites (scenes.organization.TeamMembers.invitesLogic)': 'loadInvites'
        'load invites success (scenes.organization.TeamMembers.invitesLogic)': 'loadInvitesSuccess'
        'load invites failure (scenes.organization.TeamMembers.invitesLogic)': 'loadInvitesFailure'
        'create invite (scenes.organization.TeamMembers.invitesLogic)': 'createInvite'
        'create invite success (scenes.organization.TeamMembers.invitesLogic)': 'createInviteSuccess'
        'create invite failure (scenes.organization.TeamMembers.invitesLogic)': 'createInviteFailure'
        'delete invite (scenes.organization.TeamMembers.invitesLogic)': 'deleteInvite'
        'delete invite success (scenes.organization.TeamMembers.invitesLogic)': 'deleteInviteSuccess'
        'delete invite failure (scenes.organization.TeamMembers.invitesLogic)': 'deleteInviteFailure'
    }
    actionTypes: {
        loadInvites: 'load invites (scenes.organization.TeamMembers.invitesLogic)'
        loadInvitesSuccess: 'load invites success (scenes.organization.TeamMembers.invitesLogic)'
        loadInvitesFailure: 'load invites failure (scenes.organization.TeamMembers.invitesLogic)'
        createInvite: 'create invite (scenes.organization.TeamMembers.invitesLogic)'
        createInviteSuccess: 'create invite success (scenes.organization.TeamMembers.invitesLogic)'
        createInviteFailure: 'create invite failure (scenes.organization.TeamMembers.invitesLogic)'
        deleteInvite: 'delete invite (scenes.organization.TeamMembers.invitesLogic)'
        deleteInviteSuccess: 'delete invite success (scenes.organization.TeamMembers.invitesLogic)'
        deleteInviteFailure: 'delete invite failure (scenes.organization.TeamMembers.invitesLogic)'
    }
    actions: {
        loadInvites: () => void
        loadInvitesSuccess: (invites: OrganizationInviteType[]) => void
        loadInvitesFailure: (error: string) => void
        createInvite: ({ targetEmail }: { targetEmail?: string }) => void
        createInviteSuccess: (invites: OrganizationInviteType[]) => void
        createInviteFailure: (error: string) => void
        deleteInvite: (invite: OrganizationInviteType) => void
        deleteInviteSuccess: (invites: OrganizationInviteType[]) => void
        deleteInviteFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        createInviteSuccess: ((
            action: {
                type: 'create invite success (scenes.organization.TeamMembers.invitesLogic)'
                payload: {
                    invites: OrganizationInviteType[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'TeamMembers', 'invitesLogic']
    pathString: 'scenes.organization.TeamMembers.invitesLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        invites: (state: OrganizationInviteType[], action: any, fullState: any) => OrganizationInviteType[]
        invitesLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    selectors: {
        invites: (state: any, props?: any) => OrganizationInviteType[]
        invitesLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
