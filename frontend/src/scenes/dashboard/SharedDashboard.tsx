import '~/global.scss' /* Contains Borea's main styling configurations */
import '~/antd.less' /* Imports Ant Design's components */
import './DashboardItems.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getContext } from 'kea'

import { initKea } from '~/initKea'
import { Dashboard } from './Dashboard'

import { Col, Row } from 'antd'
import { loadPostHogJS } from '~/loadPostHogJS'

loadPostHogJS()
initKea()

const dashboard = (window as any).__SHARED_DASHBOARD__
ReactDOM.render(
    <Provider store={getContext().store}>
        <div style={{ minHeight: '100vh', top: 0 }}>
            <Row style={{ marginBottom: '1rem' }}>
                <Col sm={10} xs={24} style={{ padding: '1rem' }}>
                    <h1 style={{ textAlign: 'left' }}>{dashboard.name}</h1>
                </Col>
                <Col sm={7} xs={0} style={{ padding: '1rem', textAlign: 'right' }}>
                    <span style={{ paddingTop: 15, display: 'inline-block' }}>{dashboard.team_name}</span>
                </Col>
            </Row>
            <div style={{ margin: '0 1rem' }}>
                <Dashboard id={dashboard.id} shareToken={dashboard.share_token} />
            </div>

            <div style={{ textAlign: 'center', paddingBottom: '4rem', marginTop: '1rem' }}>
                Made with <a href="https://borea.dev">Borea - Open Source Session Recording and Product Analytics</a>
            </div>
        </div>
    </Provider>,
    document.getElementById('root')
)
