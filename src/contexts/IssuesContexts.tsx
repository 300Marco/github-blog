import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issues {
  number: number
  title: string
  created_at: string
  body: string
}

interface Issue {
  html_url: string
  title: string
  created_at: string
  comments: number
  body: string
}

interface IssuesContextType {
  issues: Issues[]
  issue: Issue
  issuesNumberList: number[]
  fetchIssues: (query?: string) => Promise<void>
  fetchIssue: (id: string | undefined) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [issuesNumberList, setIssuesNumberList] = useState([])

  async function fetchIssues(query?: string) {
    let response

    if (query) {
      response = await api.get('/search/issues', {
        params: {
          sort: 'created',
          order: 'desc',
          q: `repo:300Marco/github-blog ${query}`,
        },
      })
    } else {
      response = await api.get('/search/issues', {
        params: {
          q: 'repo:300Marco/github-blog',
        },
      })
    }

    const tempList = response.data.items.map((item: Issues) => item.number)
    setIssuesNumberList(tempList)

    setIssues(response.data.items)
  }

  const [issue, setIssue] = useState<Issue>({} as Issue)

  async function fetchIssue(id: string | undefined) {
    const response = await api.get(`/repos/300Marco/github-blog/issues/${id}`)

    setIssue(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{ issues, fetchIssues, issue, fetchIssue, issuesNumberList }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
