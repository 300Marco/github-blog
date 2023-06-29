import { useContext } from 'react'

import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IssuesContext } from '../../../../contexts/IssuesContexts'
import { ProfileContext } from '../../../../contexts/ProfileContexts'

import { ArrowSquareOut } from '../../../../components/icons/ArrowSquareOut'
import { Back } from '../../../../components/icons/Back'
import { Calendar } from '../../../../components/icons/Calendar'
import { Comments } from '../../../../components/icons/Comments'
import { GitHub } from '../../../../components/icons/GitHub'

import { NavigationLinks, PostInformationBox, TitleBoxStatus } from './styles'

export function PostInformation() {
  const { issue } = useContext(IssuesContext)
  const { profile } = useContext(ProfileContext)

  return (
    <PostInformationBox>
      <NavigationLinks>
        <ul>
          <li>
            <a href="#">
              <Back width={12} height={13} />
              voltar
            </a>
          </li>

          <li>
            <a href={issue.html_url} target="_blank" rel="noreferrer">
              ver no github
              <ArrowSquareOut width={12} height={12} />
            </a>
          </li>
        </ul>
      </NavigationLinks>

      <h2>{issue.title}</h2>

      <TitleBoxStatus>
        <li>
          <GitHub size={18} />
          {profile.login}
        </li>

        <li>
          <Calendar size={18} />
          Há{' '}
          {issue.created_at !== undefined &&
            formatDistanceStrict(new Date(issue.created_at), new Date(), {
              locale: ptBR,
            })}
        </li>

        <li>
          <Comments size={18} />{' '}
          {issue.comments > 0
            ? issue.comments + ' comentários'
            : 'Nenhum Comentário'}
        </li>
      </TitleBoxStatus>
    </PostInformationBox>
  )
}
