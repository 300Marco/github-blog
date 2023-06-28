import { ArrowSquareOut } from '../../../../components/icons/ArrowSquareOut'
import { Back } from '../../../../components/icons/Back'
import { Calendar } from '../../../../components/icons/Calendar'
import { Comments } from '../../../../components/icons/Comments'
import { GitHub } from '../../../../components/icons/GitHub'

import { NavigationLinks, PostInformationBox, TitleBoxStatus } from './styles'

export function PostInformation() {
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
            <a href="#">
              ver no github
              <ArrowSquareOut width={12} height={12} />
            </a>
          </li>
        </ul>
      </NavigationLinks>

      <h2>JavaScript data types and data structures</h2>

      <TitleBoxStatus>
        <li>
          <GitHub size={18} />
          cameronwll
        </li>

        <li>
          <Calendar size={18} />
          Há 1 dia
        </li>

        <li>
          <Comments size={18} /> 5 comentários
        </li>
      </TitleBoxStatus>
    </PostInformationBox>
  )
}
