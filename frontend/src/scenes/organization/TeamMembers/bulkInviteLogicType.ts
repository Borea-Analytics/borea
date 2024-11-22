// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface bulkInviteLogicType<OrganizationInviteType, InviteRowState> extends Logic {
    actionCreators: {
        updateInviteAtIndex: (
            payload: any,
            index: number
        ) => {
            type: 'update invite at index (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: {
                payload: any
                index: number
            }
        }
        deleteInviteAtIndex: (
            index: number
        ) => {
            type: 'delete invite at index (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: {
                index: number
            }
        }
        appendInviteRow: () => {
            type: 'append invite row (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: {
                value: boolean
            }
        }
        resetInviteRows: () => {
            type: 'reset invite rows (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: {
                value: boolean
            }
        }
        inviteTeamMembers: () => {
            type: 'invite team members (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: any
        }
        inviteTeamMembersSuccess: (
            invitedTeamMembers: OrganizationInviteType[]
        ) => {
            type: 'invite team members success (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: {
                invitedTeamMembers: OrganizationInviteType[]
            }
        }
        inviteTeamMembersFailure: (
            error: string
        ) => {
            type: 'invite team members failure (scenes.organization.TeamMembers.bulkInviteLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'update invite at index (scenes.organization.TeamMembers.bulkInviteLogic)': 'updateInviteAtIndex'
        'delete invite at index (scenes.organization.TeamMembers.bulkInviteLogic)': 'deleteInviteAtIndex'
        'append invite row (scenes.organization.TeamMembers.bulkInviteLogic)': 'appendInviteRow'
        'reset invite rows (scenes.organization.TeamMembers.bulkInviteLogic)': 'resetInviteRows'
        'invite team members (scenes.organization.TeamMembers.bulkInviteLogic)': 'inviteTeamMembers'
        'invite team members success (scenes.organization.TeamMembers.bulkInviteLogic)': 'inviteTeamMembersSuccess'
        'invite team members failure (scenes.organization.TeamMembers.bulkInviteLogic)': 'inviteTeamMembersFailure'
    }
    actionTypes: {
        updateInviteAtIndex: 'update invite at index (scenes.organization.TeamMembers.bulkInviteLogic)'
        deleteInviteAtIndex: 'delete invite at index (scenes.organization.TeamMembers.bulkInviteLogic)'
        appendInviteRow: 'append invite row (scenes.organization.TeamMembers.bulkInviteLogic)'
        resetInviteRows: 'reset invite rows (scenes.organization.TeamMembers.bulkInviteLogic)'
        inviteTeamMembers: 'invite team members (scenes.organization.TeamMembers.bulkInviteLogic)'
        inviteTeamMembersSuccess: 'invite team members success (scenes.organization.TeamMembers.bulkInviteLogic)'
        inviteTeamMembersFailure: 'invite team members failure (scenes.organization.TeamMembers.bulkInviteLogic)'
    }
    actions: {
        updateInviteAtIndex: (payload: any, index: number) => void
        deleteInviteAtIndex: (index: number) => void
        appendInviteRow: () => void
        resetInviteRows: () => void
        inviteTeamMembers: () => void
        inviteTeamMembersSuccess: (invitedTeamMembers: OrganizationInviteType[]) => void
        inviteTeamMembersFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        invites: InviteRowState[]
        invitedTeamMembers: OrganizationInviteType[]
        invitedTeamMembersLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {
        inviteTeamMembersSuccess: ((
            action: {
                type: 'invite team members success (scenes.organization.TeamMembers.bulkInviteLogic)'
                payload: {
                    invitedTeamMembers: OrganizationInviteType[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'TeamMembers', 'bulkInviteLogic']
    pathString: 'scenes.organization.TeamMembers.bulkInviteLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        invites: InviteRowState[]
        invitedTeamMembers: OrganizationInviteType[]
        invitedTeamMembersLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        invites: (state: InviteRowState[], action: any, fullState: any) => InviteRowState[]
        invitedTeamMembers: (state: OrganizationInviteType[], action: any, fullState: any) => OrganizationInviteType[]
        invitedTeamMembersLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        invites: InviteRowState[]
        invitedTeamMembers: OrganizationInviteType[]
        invitedTeamMembersLoading: boolean
    }
    selectors: {
        invites: (state: any, props?: any) => InviteRowState[]
        invitedTeamMembers: (state: any, props?: any) => OrganizationInviteType[]
        invitedTeamMembersLoading: (state: any, props?: any) => boolean
        canSubmit: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        invites: InviteRowState[]
        invitedTeamMembers: OrganizationInviteType[]
        invitedTeamMembersLoading: boolean
        canSubmit: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        canSubmit: (invites: InviteRowState[]) => boolean
    }
}
