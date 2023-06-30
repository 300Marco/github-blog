import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ReactMarkdown from 'react-markdown'

import { IssuesContext } from '../../../../contexts/IssuesContexts'
import { Card, Cards, PostsContainer } from './styles'

export function Posts() {
  const { issues } = useContext(IssuesContext)

  return (
    <PostsContainer>
      <Cards>
        {issues.map((issue) => {
          return (
            <NavLink key={issue.number} to={`/post/${issue.number}`}>
              <Card key={issue.number}>
                <header>
                  <h2>{issue.title}</h2>

                  <span>
                    Há{' '}
                    {formatDistanceStrict(
                      new Date(issue.created_at),
                      new Date(),
                      {
                        locale: ptBR,
                      },
                    )}
                  </span>
                </header>

                <p>
                  <ReactMarkdown>
                    {issue.body.substring(0, 200) + '...'}
                  </ReactMarkdown>
                </p>
              </Card>
            </NavLink>
          )
        })}
      </Cards>
    </PostsContainer>
  )
}
