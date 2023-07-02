import { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Content } from './components/Content'
import { PostInformation } from './components/PostInformation'
import { IssuesContext } from '../../contexts/IssuesContexts'
import { PostContainer } from './styles'

export function Post() {
  const { issueId } = useParams()
  const { fetchIssue, issuesNumberList } = useContext(IssuesContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      fetchIssue(issueId)
    }

    window.scrollTo(0, 0)
  }, [mounted, fetchIssue, issueId])

  const convertIssueId = Number(issueId)

  const checkContent = issuesNumberList.includes(convertIssueId)

  if (!checkContent) {
    return <Navigate to="/not-found" />
  }

  return (
    <PostContainer>
      <PostInformation />
      <Content />
    </PostContainer>
  )
}
