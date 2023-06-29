import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issues {
  number: number
  title: string
  created_at: string
  body: string
}

interface IssuesContextType {
  issues: Issues[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

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

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
