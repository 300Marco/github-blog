import ReactMarkdown from 'react-markdown'

import { ContentContainer } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContexts'

export function Content() {
  const { issue } = useContext(IssuesContext)

  return (
    <ContentContainer>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </ContentContainer>
  )
}
