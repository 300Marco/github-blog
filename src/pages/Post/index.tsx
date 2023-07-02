import { useParams } from 'react-router-dom'
import { Content } from './components/Content'
import { PostInformation } from './components/PostInformation'
import { PostContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import { IssuesContext } from '../../contexts/IssuesContexts'

export function Post() {
  const { issueId } = useParams()
  const { fetchIssue } = useContext(IssuesContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      fetchIssue(issueId)
    }

    window.scrollTo(0, 0)
  }, [mounted, fetchIssue, issueId])

  return (
    <PostContainer>
      <PostInformation />
      <Content />
    </PostContainer>
  )
}
