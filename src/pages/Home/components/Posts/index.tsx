import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

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

  console.log(issues)

  return (
    <PostsContainer>
      <Cards>
        {issues.map((issue) => {
          return (
            <Card key={issue.number}>
              <header>
                <h2>{issue.title}</h2>

                <span>{issue.created_at}</span>
              </header>

              <p>{issue.body.substring(0, 200) + '...'}</p>
            </Card>
          )
        })}
      </Cards>
    </PostsContainer>
  )
}
