import React, { useState } from 'react'
import './Navigation.scss'
import { useActions, useValues } from 'kea'
import { navigationLogic } from './navigationLogic'
import { IconMenu } from 'lib/components/icons'
import { userLogic } from 'scenes/userLogic'
import { Badge } from 'lib/components/Badge'
import { ChangelogModal } from '~/layout/ChangelogModal'
import { router } from 'kea-router'
import { Button, Dropdown } from 'antd'
import { ProjectOutlined, DownOutlined, ToolOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons'
import { sceneLogic } from 'scenes/sceneLogic'
import { CreateProjectModal } from 'scenes/project/CreateProjectModal'
import { CreateOrganizationModal } from 'scenes/organization/CreateOrganizationModal'
import { hot } from 'react-hot-loader/root'
import { Link } from 'lib/components/Link'
import { LinkButton } from 'lib/components/LinkButton'
import { BulkInviteModal } from 'scenes/organization/TeamMembers/BulkInviteModal'
import { UserType } from '~/types'
import { CreateInviteModalWithButton } from 'scenes/organization/TeamMembers/CreateInviteModal'

export function WhoAmI({ user }: { user: UserType }): JSX.Element {
    return (
        <div className="whoami cursor-pointer" data-attr="top-navigation-whoami">
            <div className="pp">{user.name[0]?.toUpperCase()}</div>
            <div className="details hide-lte-lg">
                <span>{user.name}</span>
                <span>{user.organization?.name}</span>
            </div>
        </div>
    )
}

export const TopNavigation = hot(_TopNavigation)
export function _TopNavigation(): JSX.Element {
    const { setMenuCollapsed, setChangelogModalOpen, updateCurrentProject, setInviteMembersModalOpen } = useActions(
        navigationLogic
    )
    const { menuCollapsed, systemStatus, changelogModalOpen, inviteMembersModalOpen } = useValues(navigationLogic)
    const { user } = useValues(userLogic)
    const { logout } = useActions(userLogic)
    const { sceneConfig } = useValues(sceneLogic)
    const { push } = router.actions
    const [projectModalShown, setProjectModalShown] = useState(false) // TODO: Move to Kea (using useState for backwards-compatibility with TopSelectors.tsx)
    const [organizationModalShown, setOrganizationModalShown] = useState(false) // TODO: Same as above

    const whoAmIDropdown = (
        <div className="navigation-top-dropdown whoami-dropdown">
            <div className="whoami" style={{ paddingRight: 16, paddingLeft: 16 }}>
                <div className="pp">{user?.name[0]?.toUpperCase()}</div>
                <div className="details">
                    <span>{user?.email}</span>
                    <span>{user?.organization?.name}</span>
                </div>
            </div>
            <div className="text-center mt" style={{ paddingRight: 16, paddingLeft: 16 }}>
                <div>
                    {user?.email_service_available ? (
                        <Button
                            type="primary"
                            icon={<UserAddOutlined />}
                            onClick={() => setInviteMembersModalOpen(true)}
                            data-attr="top-menu-invite-team-members"
                            style={{ width: '100%' }}
                        >
                            Invite Team Members
                        </Button>
                    ) : (
                        <CreateInviteModalWithButton block />
                    )}
                </div>
                <div style={{ marginTop: 10 }}>
                    <LinkButton
                        to="/organization/members"
                        data-attr="top-menu-item-org-settings"
                        style={{ width: '100%' }}
                        icon={<SettingOutlined />}
                    >
                        Organization Settings
                    </LinkButton>
                </div>
                <div className="mt-05">
                    <Link to="/me/settings" data-attr="top-menu-item-me">
                        My account
                    </Link>
                </div>
            </div>
            <div className="divider mt-05" />
            <div className="text-center">
                <a onClick={logout} data-attr="top-menu-item-logout">
                    Log out
                </a>
            </div>
        </div>
    )

    const projectDropdown = (
        <div className="navigation-top-dropdown project-dropdown">
            <div className="dp-title">SELECT A PROJECT</div>
            <div className="projects">
                {user?.organization?.teams &&
                    user.organization.teams.map((team) => {
                        return (
                            <a onClick={() => updateCurrentProject(team.id, '/')} key={team.id}>
                                <span style={{ flexGrow: 1 }}>{team.name}</span>
                                <span
                                    className="settings"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        if (team.id === user?.team?.id) {
                                            push('/project/settings')
                                        } else {
                                            updateCurrentProject(team.id, '/project/settings')
                                        }
                                    }}
                                >
                                    <ToolOutlined />
                                </span>
                            </a>
                        )
                    })}
            </div>
        </div>
    )

    return (
        <>
            <div className="navigation-spacer" />
            <div className={`navigation-top${sceneConfig.plain ? ' full-width' : ''}`}>
                <div style={{ justifyContent: 'flex-start' }}>
                    <div className="hide-gte-lg menu-toggle" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                        <IconMenu />
                    </div>
                    <div className="hide-lte-lg ml-05">
                        {(!user?.is_multi_tenancy || user.is_staff) && (
                            <Badge
                                data-attr="system-status-badge"
                                type={systemStatus ? 'success' : 'danger'}
                                onClick={() => push('/instance/status')}
                                tooltip={systemStatus ? 'All systems operational' : 'Potential system issue'}
                                className="mr"
                            />
                        )}
                    </div>
                </div>
                <div className="project-chooser">
                    <Dropdown overlay={projectDropdown} trigger={['click']} placement="bottomCenter">
                        <div style={{ height: '100%' }} className="cursor-pointer flexed">
                            <ProjectOutlined className="mr-05" />
                            {user?.team?.name} <DownOutlined className="ml-05" />
                        </div>
                    </Dropdown>
                </div>
                {user && (
                    <div>
                        <Dropdown overlay={whoAmIDropdown} trigger={['click']}>
                            <div>
                                <WhoAmI user={user} />
                            </div>
                        </Dropdown>
                    </div>
                )}
            </div>
            <BulkInviteModal visible={inviteMembersModalOpen} onClose={() => setInviteMembersModalOpen(false)} />
            <CreateProjectModal isVisible={projectModalShown} setIsVisible={setProjectModalShown} />
            <CreateOrganizationModal isVisible={organizationModalShown} setIsVisible={setOrganizationModalShown} />
            {changelogModalOpen && <ChangelogModal onDismiss={() => setChangelogModalOpen(false)} />}
        </>
    )
}
