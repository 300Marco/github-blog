// import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Card, Cards, PostsContainer } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContexts'

export function Posts() {
  const { issues } = useContext(IssuesContext)

  return (
    <PostsContainer>
      <Cards>
        {issues.map((issue) => {
          return (
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
          )
        })}
      </Cards>
    </PostsContainer>
  )
}
