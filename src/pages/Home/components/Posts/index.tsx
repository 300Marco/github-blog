import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { api } from '../../../../lib/axios'
import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Card, Cards, PostsContainer } from './styles'

interface Issues {
  number: number
  title: string
  created_at: string
  body: string
}

export function Posts() {
  const [issues, setIssues] = useState<Issues[]>([])

  async function fetchIssues() {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:300Marco/github-blog',
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

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
