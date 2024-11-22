// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface onboardingSetupLogicType extends Logic {
    actionCreators: {
        switchToNonDemoProject: (
            dest: any
        ) => {
            type: 'switch to non demo project (scenes.onboarding.onboardingSetupLogic)'
            payload: {
                dest: any
            }
        }
        setProjectModalShown: (
            shown: any
        ) => {
            type: 'set project modal shown (scenes.onboarding.onboardingSetupLogic)'
            payload: {
                shown: any
            }
        }
        setInviteTeamModalShown: (
            shown: any
        ) => {
            type: 'set invite team modal shown (scenes.onboarding.onboardingSetupLogic)'
            payload: {
                shown: any
            }
        }
        completeOnboarding: () => {
            type: 'complete onboarding (scenes.onboarding.onboardingSetupLogic)'
            payload: {
                value: boolean
            }
        }
        callSlack: () => {
            type: 'call slack (scenes.onboarding.onboardingSetupLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'switch to non demo project (scenes.onboarding.onboardingSetupLogic)': 'switchToNonDemoProject'
        'set project modal shown (scenes.onboarding.onboardingSetupLogic)': 'setProjectModalShown'
        'set invite team modal shown (scenes.onboarding.onboardingSetupLogic)': 'setInviteTeamModalShown'
        'complete onboarding (scenes.onboarding.onboardingSetupLogic)': 'completeOnboarding'
        'call slack (scenes.onboarding.onboardingSetupLogic)': 'callSlack'
    }
    actionTypes: {
        switchToNonDemoProject: 'switch to non demo project (scenes.onboarding.onboardingSetupLogic)'
        setProjectModalShown: 'set project modal shown (scenes.onboarding.onboardingSetupLogic)'
        setInviteTeamModalShown: 'set invite team modal shown (scenes.onboarding.onboardingSetupLogic)'
        completeOnboarding: 'complete onboarding (scenes.onboarding.onboardingSetupLogic)'
        callSlack: 'call slack (scenes.onboarding.onboardingSetupLogic)'
    }
    actions: {
        switchToNonDemoProject: (dest: any) => void
        setProjectModalShown: (shown: any) => void
        setInviteTeamModalShown: (shown: any) => void
        completeOnboarding: () => void
        callSlack: () => void
    }
    constants: {}
    defaults: {
        projectModalShown: boolean
        inviteTeamModalShown: boolean
        slackCalled: boolean
    }
    events: {}
    key: undefined
    listeners: {
        switchToNonDemoProject: ((
            action: {
                type: 'switch to non demo project (scenes.onboarding.onboardingSetupLogic)'
                payload: {
                    dest: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        completeOnboarding: ((
            action: {
                type: 'complete onboarding (scenes.onboarding.onboardingSetupLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'onboarding', 'onboardingSetupLogic']
    pathString: 'scenes.onboarding.onboardingSetupLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        projectModalShown: boolean
        inviteTeamModalShown: boolean
        slackCalled: boolean
    }
    reducerOptions: {}
    reducers: {
        projectModalShown: (state: boolean, action: any, fullState: any) => boolean
        inviteTeamModalShown: (state: boolean, action: any, fullState: any) => boolean
        slackCalled: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        projectModalShown: boolean
        inviteTeamModalShown: boolean
        slackCalled: boolean
    }
    selectors: {
        projectModalShown: (state: any, props?: any) => boolean
        inviteTeamModalShown: (state: any, props?: any) => boolean
        slackCalled: (state: any, props?: any) => boolean
        stepProjectSetup: (state: any, props?: any) => boolean
        stepInstallation: (state: any, props?: any) => boolean
        stepVerification: (state: any, props?: any) => boolean
        currentSection: (state: any, props?: any) => number | null
        teamInviteAvailable: (state: any, props?: any) => boolean
        progressPercentage: (state: any, props?: any) => number
    }
    sharedListeners: {}
    values: {
        projectModalShown: boolean
        inviteTeamModalShown: boolean
        slackCalled: boolean
        stepProjectSetup: boolean
        stepInstallation: boolean
        stepVerification: boolean
        currentSection: number | null
        teamInviteAvailable: boolean
        progressPercentage: number
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        stepProjectSetup: (demoOnlyProject: boolean) => boolean
        stepInstallation: (currentOrganization: OrganizationType | null) => boolean
        stepVerification: (currentOrganization: OrganizationType | null, stepInstallation: boolean) => boolean
        currentSection: (currentOrganization: OrganizationType | null) => number | null
        teamInviteAvailable: (user: UserType | null) => boolean
        progressPercentage: (
            teamInviteAvailable: boolean,
            user: UserType | null,
            currentOrganization: OrganizationType | null,
            stepProjectSetup: boolean,
            stepInstallation: boolean,
            stepVerification: boolean,
            slackCalled: boolean
        ) => number
    }
}
