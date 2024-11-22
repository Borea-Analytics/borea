import { CardContainer } from 'scenes/ingestion/CardContainer'
import { Alert, Collapse, Tag } from 'antd'
import React from 'react'
import { useActions, useValues } from 'kea'
import { ingestionLogic } from 'scenes/ingestion/ingestionLogic'
import { BulbOutlined, BookOutlined } from '@ant-design/icons'
import { Link } from 'lib/components/Link'
import { JSInstructions } from '../frameworks'
import { JSSnippet } from 'lib/components/JSSnippet'
import { JSBookmarklet } from 'lib/components/JSBookmarklet'
import { userLogic } from 'scenes/userLogic'
import { eventUsageLogic } from 'lib/utils/eventUsageLogic'

export function AutocapturePanel(): JSX.Element {
    const { index, totalSteps } = useValues(ingestionLogic)
    const { setPlatform, setVerify } = useActions(ingestionLogic)
    const { user } = useValues(userLogic)
    const { reportIngestionBookmarkletCollapsible } = useActions(eventUsageLogic)

    // const handlePanelChange = (shownPanels: string | string[]): void => {
    //     if (typeof shownPanels === 'string') {
    //         reportIngestionBookmarkletCollapsible([shownPanels])
    //     } else {
    //         reportIngestionBookmarkletCollapsible(shownPanels)
    //     }
    // }

    return (
        <CardContainer
            index={index}
            totalSteps={totalSteps}
            nextButton={true}
            onSubmit={() => setVerify(true)}
            onBack={() => setPlatform(null)}
        >
            {/* {user?.team && (
                <Collapse onChange={handlePanelChange}>
                    <Collapse.Panel
                        header={
                            <>
                                <BulbOutlined style={{ color: 'var(--warning)' }} /> <b>Just exploring?</b> Immediately
                                run Borea on your website for some initial exploring.
                            </>
                        }
                        key="bookmarklet"
                    >
                        If you want to quickly test Borea in your website <b>without changing any code</b>, try out
                        our bookmarklet.
                        <div>
                            <b>Steps:</b>
                        </div>
                        <ol>
                            <li>
                                <b>Drag</b> the link (<BookOutlined />) below to your bookmarks toolbar.{' '}
                            </li>
                            <li>Open the website you want to track and click on the bookmark you just added.</li>
                            <li>Click continue below and see events coming in.</li>
                        </ol>
                        <div className="mt">
                            <JSBookmarklet team={user.team} />
                        </div>
                        <div className="mt">
                            <Alert
                                type="warning"
                                message={
                                    <>
                                        Please note this installation is only{' '}
                                        <b>temporary, intended just for testing</b>. It will only work for the current
                                        page and only in your browser session.
                                    </>
                                }
                            />
                        </div>
                    </Collapse.Panel>
                </Collapse>
            )} */}
            <div style={{ marginTop: 16 }}>
                <h2>
                    Option 1. Code snippet <Tag color="green">Recommended</Tag>
                </h2>
                <p>
                    Borea utilizes a fork of Posthog's open-source tracking script to ingest your user data.{' '}
                    <b>This is a temporary solution.</b> We are bulding our own script and SDKs.{' '}
                </p>
                <p>
                    Faster option. Particularly recommended for new projects where you don't know what your analytics
                    will look like just yet. Just add this snippet to your website and we'll{' '}
                    <b>automatically capture page views, sessions and all relevant interactions</b> within your website.{' '}
                    {/* <Link
                        to="https://posthog.com/product-features/event-autocapture?utm_medium=in-product&utm_campaign=ingestion-web"
                        target="_blank"
                        rel="noopener"
                    >
                        Learn more
                    </Link>
                    . */}
                </p>
                <b>Steps:</b>
                <ol>
                    <li>
                        Insert this snippet in your website within the <code className="code">&lt;head&gt;</code> tag.{' '}
                        <JSSnippet />
                    </li>
                    <li>
                        <b>Visit your site</b> to generate some initial events.
                    </li>
                    <li>
                        If there are specific elements you don't want captured, add the <b>ph-no-capture</b> class name
                        to the element.
                    </li>
                </ol>
            </div>
            <div style={{ marginTop: 32 }}>
                <h2>Option 2. Javascript Library</h2>
                <p>
                    Our JavaScript library is currently under development and is not supported in this version. However,
                    because we utilize PostHog's data ingestion infrastructure, you can use their JS library to identify
                    unique users.
                </p>
                <JSInstructions />
            </div>
        </CardContainer>
    )
}
