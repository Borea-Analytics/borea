// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface insightHistoryLogicType<DashboardItemType> extends Logic {
    actionCreators: {
        loadInsights: () => {
            type: 'load insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: any
        }
        loadInsightsSuccess: (
            insights: DashboardItemType[]
        ) => {
            type: 'load insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insights: DashboardItemType[]
            }
        }
        loadInsightsFailure: (
            error: string
        ) => {
            type: 'load insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                error: string
            }
        }
        loadSavedInsights: () => {
            type: 'load saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: any
        }
        loadSavedInsightsSuccess: (
            savedInsights: DashboardItemType[]
        ) => {
            type: 'load saved insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                savedInsights: DashboardItemType[]
            }
        }
        loadSavedInsightsFailure: (
            error: string
        ) => {
            type: 'load saved insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                error: string
            }
        }
        loadTeamInsights: () => {
            type: 'load team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: any
        }
        loadTeamInsightsSuccess: (
            teamInsights: DashboardItemType[]
        ) => {
            type: 'load team insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                teamInsights: DashboardItemType[]
            }
        }
        loadTeamInsightsFailure: (
            error: string
        ) => {
            type: 'load team insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                error: string
            }
        }
        createInsight: (
            filters: Record<string, any>
        ) => {
            type: 'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                filters: Record<string, any>
            }
        }
        updateInsight: (
            insight: DashboardItemType
        ) => {
            type: 'update insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insight: DashboardItemType
            }
        }
        updateInsightSuccess: (
            insight: DashboardItemType
        ) => {
            type: 'update insight success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insight: DashboardItemType
            }
        }
        deleteInsight: (
            insight: DashboardItemType
        ) => {
            type: 'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insight: DashboardItemType
            }
        }
        loadNextInsights: () => {
            type: 'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                value: boolean
            }
        }
        loadNextSavedInsights: () => {
            type: 'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                value: boolean
            }
        }
        loadNextTeamInsights: () => {
            type: 'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                value: boolean
            }
        }
        setInsightsNext: (
            next: string
        ) => {
            type: 'set insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                next: string
            }
        }
        setSavedInsightsNext: (
            next: string
        ) => {
            type: 'set saved insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                next: string
            }
        }
        setTeamInsightsNext: (
            next: string
        ) => {
            type: 'set team insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                next: string
            }
        }
        updateInsights: (
            insights: DashboardItemType[]
        ) => {
            type: 'update insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insights: DashboardItemType[]
            }
        }
        updateSavedInsights: (
            insights: DashboardItemType[]
        ) => {
            type: 'update saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insights: DashboardItemType[]
            }
        }
        updateTeamInsights: (
            insights: DashboardItemType[]
        ) => {
            type: 'update team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insights: DashboardItemType[]
            }
        }
    }
    actionKeys: {
        'load insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadInsights'
        'load insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadInsightsSuccess'
        'load insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadInsightsFailure'
        'load saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadSavedInsights'
        'load saved insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadSavedInsightsSuccess'
        'load saved insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadSavedInsightsFailure'
        'load team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadTeamInsights'
        'load team insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadTeamInsightsSuccess'
        'load team insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadTeamInsightsFailure'
        'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'createInsight'
        'update insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateInsight'
        'update insight success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateInsightSuccess'
        'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'deleteInsight'
        'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadNextInsights'
        'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadNextSavedInsights'
        'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadNextTeamInsights'
        'set insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'setInsightsNext'
        'set saved insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'setSavedInsightsNext'
        'set team insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'setTeamInsightsNext'
        'update insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateInsights'
        'update saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateSavedInsights'
        'update team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateTeamInsights'
    }
    actionTypes: {
        loadInsights: 'load insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadInsightsSuccess: 'load insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadInsightsFailure: 'load insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadSavedInsights: 'load saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadSavedInsightsSuccess: 'load saved insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadSavedInsightsFailure: 'load saved insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadTeamInsights: 'load team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadTeamInsightsSuccess: 'load team insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadTeamInsightsFailure: 'load team insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        createInsight: 'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateInsight: 'update insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateInsightSuccess: 'update insight success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        deleteInsight: 'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadNextInsights: 'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadNextSavedInsights: 'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadNextTeamInsights: 'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        setInsightsNext: 'set insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        setSavedInsightsNext: 'set saved insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        setTeamInsightsNext: 'set team insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateInsights: 'update insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateSavedInsights: 'update saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateTeamInsights: 'update team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
    }
    actions: {
        loadInsights: () => void
        loadInsightsSuccess: (insights: DashboardItemType[]) => void
        loadInsightsFailure: (error: string) => void
        loadSavedInsights: () => void
        loadSavedInsightsSuccess: (savedInsights: DashboardItemType[]) => void
        loadSavedInsightsFailure: (error: string) => void
        loadTeamInsights: () => void
        loadTeamInsightsSuccess: (teamInsights: DashboardItemType[]) => void
        loadTeamInsightsFailure: (error: string) => void
        createInsight: (filters: Record<string, any>) => void
        updateInsight: (insight: DashboardItemType) => void
        updateInsightSuccess: (insight: DashboardItemType) => void
        deleteInsight: (insight: DashboardItemType) => void
        loadNextInsights: () => void
        loadNextSavedInsights: () => void
        loadNextTeamInsights: () => void
        setInsightsNext: (next: string) => void
        setSavedInsightsNext: (next: string) => void
        setTeamInsightsNext: (next: string) => void
        updateInsights: (insights: DashboardItemType[]) => void
        updateSavedInsights: (insights: DashboardItemType[]) => void
        updateTeamInsights: (insights: DashboardItemType[]) => void
    }
    constants: {}
    defaults: {
        insights: DashboardItemType[]
        insightsLoading: boolean
        savedInsights: DashboardItemType[]
        savedInsightsLoading: boolean
        teamInsights: DashboardItemType[]
        teamInsightsLoading: boolean
        insightsNext: null | string
        loadingMoreInsights: boolean
        savedInsightsNext: null | string
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null | string
        loadingMoreTeamInsights: boolean
    }
    events: {}
    key: undefined
    listeners: {
        createInsight: ((
            action: {
                type: 'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
                payload: {
                    filters: Record<string, any>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateInsight: ((
            action: {
                type: 'update insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
                payload: {
                    insight: DashboardItemType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteInsight: ((
            action: {
                type: 'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
                payload: {
                    insight: DashboardItemType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadNextInsights: ((
            action: {
                type: 'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadNextSavedInsights: ((
            action: {
                type: 'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadNextTeamInsights: ((
            action: {
                type: 'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
                payload: {
                    value: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'insights', 'InsightHistoryPanel', 'insightHistoryLogic']
    pathString: 'scenes.insights.InsightHistoryPanel.insightHistoryLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        insights: DashboardItemType[]
        insightsLoading: boolean
        savedInsights: DashboardItemType[]
        savedInsightsLoading: boolean
        teamInsights: DashboardItemType[]
        teamInsightsLoading: boolean
        insightsNext: null | string
        loadingMoreInsights: boolean
        savedInsightsNext: null | string
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null | string
        loadingMoreTeamInsights: boolean
    }
    reducerOptions: {}
    reducers: {
        insights: (state: DashboardItemType[], action: any, fullState: any) => DashboardItemType[]
        insightsLoading: (state: boolean, action: any, fullState: any) => boolean
        savedInsights: (state: DashboardItemType[], action: any, fullState: any) => DashboardItemType[]
        savedInsightsLoading: (state: boolean, action: any, fullState: any) => boolean
        teamInsights: (state: DashboardItemType[], action: any, fullState: any) => DashboardItemType[]
        teamInsightsLoading: (state: boolean, action: any, fullState: any) => boolean
        insightsNext: (state: null | string, action: any, fullState: any) => null | string
        loadingMoreInsights: (state: boolean, action: any, fullState: any) => boolean
        savedInsightsNext: (state: null | string, action: any, fullState: any) => null | string
        loadingMoreSavedInsights: (state: boolean, action: any, fullState: any) => boolean
        teamInsightsNext: (state: null | string, action: any, fullState: any) => null | string
        loadingMoreTeamInsights: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        insights: DashboardItemType[]
        insightsLoading: boolean
        savedInsights: DashboardItemType[]
        savedInsightsLoading: boolean
        teamInsights: DashboardItemType[]
        teamInsightsLoading: boolean
        insightsNext: null | string
        loadingMoreInsights: boolean
        savedInsightsNext: null | string
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null | string
        loadingMoreTeamInsights: boolean
    }
    selectors: {
        insights: (state: any, props?: any) => DashboardItemType[]
        insightsLoading: (state: any, props?: any) => boolean
        savedInsights: (state: any, props?: any) => DashboardItemType[]
        savedInsightsLoading: (state: any, props?: any) => boolean
        teamInsights: (state: any, props?: any) => DashboardItemType[]
        teamInsightsLoading: (state: any, props?: any) => boolean
        insightsNext: (state: any, props?: any) => null | string
        loadingMoreInsights: (state: any, props?: any) => boolean
        savedInsightsNext: (state: any, props?: any) => null | string
        loadingMoreSavedInsights: (state: any, props?: any) => boolean
        teamInsightsNext: (state: any, props?: any) => null | string
        loadingMoreTeamInsights: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        insights: DashboardItemType[]
        insightsLoading: boolean
        savedInsights: DashboardItemType[]
        savedInsightsLoading: boolean
        teamInsights: DashboardItemType[]
        teamInsightsLoading: boolean
        insightsNext: null | string
        loadingMoreInsights: boolean
        savedInsightsNext: null | string
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null | string
        loadingMoreTeamInsights: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
