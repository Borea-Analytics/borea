import React from 'react'
import { CodeSnippet, Language } from './CodeSnippet'
import { useValues } from 'kea'
import { userLogic } from 'scenes/userLogic'
import { Link } from 'lib/components/Link'

function JSInstallSnippet(): JSX.Element {
    return (
        <CodeSnippet language={Language.Bash}>
            {['npm install posthog-js@1.8.7', '# OR', 'yarn add posthog-js@1.8.7'].join('\n')}
        </CodeSnippet>
    )
}

function JSSetupSnippet(): JSX.Element {
    const { user } = useValues(userLogic)
    return (
        <CodeSnippet language={Language.JavaScript}>
            {["import posthog from 'posthog-js'", '', `posthog.identify('[user unique id]');`].join('\n')}
        </CodeSnippet>
    )
}

function JSResetSnippet(): JSX.Element {
    return <CodeSnippet language={Language.JavaScript}>{`posthog.reset()`}</CodeSnippet>
}

export function JSInstructions(): JSX.Element {
    return (
        <div>
            <b>Steps:</b>
            <ol>
                <li>
                    Install the package <JSInstallSnippet />
                </li>
                <li>
                    Configure &amp; initialize. Use .identify() in your signup/login page.
                    <JSSetupSnippet />
                </li>
                <li>
                    Reset the user alias if they sign out. <JSResetSnippet />
                </li>
                <li>
                    For more information, review the identify method on PostHog's{' '}
                    <Link
                        to="https://posthog.com/docs/product-analytics/identify"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        official documentation.
                    </Link>
                </li>
            </ol>
        </div>
    )
}
