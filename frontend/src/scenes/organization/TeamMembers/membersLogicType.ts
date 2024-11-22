// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface membersLogicType extends Logic {
    actionCreators: {
        changeMemberAccessLevel: (
            member: OrganizationMemberType,
            level: OrganizationMembershipLevel
        ) => {
            type: 'change member access level (scenes.organization.TeamMembers.membersLogic)'
            payload: {
                member: OrganizationMemberType
                level: OrganizationMembershipLevel
            }
        }
        loadMembers: () => {
            type: 'load members (scenes.organization.TeamMembers.membersLogic)'
            payload: any
        }
        loadMembersSuccess: (
            members: any[]
        ) => {
            type: 'load members success (scenes.organization.TeamMembers.membersLogic)'
            payload: {
                members: any[]
            }
        }
        loadMembersFailure: (
            error: string
        ) => {
            type: 'load members failure (scenes.organization.TeamMembers.membersLogic)'
            payload: {
                error: string
            }
        }
        removeMember: (
            member: any
        ) => {
            type: 'remove member (scenes.organization.TeamMembers.membersLogic)'
            payload: any
        }
        removeMemberSuccess: (
            members: any[]
        ) => {
            type: 'remove member success (scenes.organization.TeamMembers.membersLogic)'
            payload: {
                members: any[]
            }
        }
        removeMemberFailure: (
            error: string
        ) => {
            type: 'remove member failure (scenes.organization.TeamMembers.membersLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'change member access level (scenes.organization.TeamMembers.membersLogic)': 'changeMemberAccessLevel'
        'load members (scenes.organization.TeamMembers.membersLogic)': 'loadMembers'
        'load members success (scenes.organization.TeamMembers.membersLogic)': 'loadMembersSuccess'
        'load members failure (scenes.organization.TeamMembers.membersLogic)': 'loadMembersFailure'
        'remove member (scenes.organization.TeamMembers.membersLogic)': 'removeMember'
        'remove member success (scenes.organization.TeamMembers.membersLogic)': 'removeMemberSuccess'
        'remove member failure (scenes.organization.TeamMembers.membersLogic)': 'removeMemberFailure'
    }
    actionTypes: {
        changeMemberAccessLevel: 'change member access level (scenes.organization.TeamMembers.membersLogic)'
        loadMembers: 'load members (scenes.organization.TeamMembers.membersLogic)'
        loadMembersSuccess: 'load members success (scenes.organization.TeamMembers.membersLogic)'
        loadMembersFailure: 'load members failure (scenes.organization.TeamMembers.membersLogic)'
        removeMember: 'remove member (scenes.organization.TeamMembers.membersLogic)'
        removeMemberSuccess: 'remove member success (scenes.organization.TeamMembers.membersLogic)'
        removeMemberFailure: 'remove member failure (scenes.organization.TeamMembers.membersLogic)'
    }
    actions: {
        changeMemberAccessLevel: (member: OrganizationMemberType, level: OrganizationMembershipLevel) => void
        loadMembers: () => void
        loadMembersSuccess: (members: any[]) => void
        loadMembersFailure: (error: string) => void
        removeMember: (member: any) => void
        removeMemberSuccess: (members: any[]) => void
        removeMemberFailure: (error: string) => void
    }
    constants: {}
    defaults: {
        members: any[]
        membersLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        changeMemberAccessLevel: ((
            action: {
                type: 'change member access level (scenes.organization.TeamMembers.membersLogic)'
                payload: {
                    member: OrganizationMemberType
                    level: OrganizationMembershipLevel
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'TeamMembers', 'membersLogic']
    pathString: 'scenes.organization.TeamMembers.membersLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        members: any[]
        membersLoading: boolean
    }
    reducerOptions: {}
    reducers: {
        members: (state: any[], action: any, fullState: any) => any[]
        membersLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        members: any[]
        membersLoading: boolean
    }
    selectors: {
        members: (state: any, props?: any) => any[]
        membersLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        members: any[]
        membersLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
