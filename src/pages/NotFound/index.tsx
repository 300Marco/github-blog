import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotFoundContainer, NotFoundContent, ReturnMessage } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  const goHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <h2>404</h2>
        <p>Me parece que você requisitou uma página do futuro.</p>

        <ReturnMessage>
          <span>Não se preocupe!</span>

          <p>
            Irei te manter no presente e te guiar de volta para onde temos
            conteúdos existentes.
          </p>
        </ReturnMessage>

        <button onClick={goHome}>Retornar para página inicial</button>
        {/* <NavLink to="/">Retornar para página inicial</NavLink> */}
      </NotFoundContent>
    </NotFoundContainer>
  )
}
