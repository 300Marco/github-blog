import ReactMarkdown from 'react-markdown'

import { ContentContainer } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContexts'

export function Content() {
  const { issue } = useContext(IssuesContext)

  return (
    <ContentContainer>
      <ReactMarkdown>{issue.body}</ReactMarkdown>

      {/* <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </p>

      <p>
        Dynamic typing JavaScript is a loosely typed and dynamic language.
        Variables in JavaScript are not directly associated with any particular
        value type, and any variable can be assigned (and re-assigned) values of
        all types:
      </p> */}
    </ContentContainer>
  )
}
