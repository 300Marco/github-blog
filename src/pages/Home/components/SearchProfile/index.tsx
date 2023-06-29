import { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { IssuesContext } from '../../../../contexts/IssuesContexts'
import { SearchContainer, SearchHeader } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchProfile() {
  const { issues, fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInput) {
    fetchIssues(data.query)
  }

  return (
    <SearchContainer>
      <SearchHeader>
        <h2>Publicações</h2>

        <span>
          {issues.length > 0
            ? issues.length + ' publicações'
            : 'Nenhuma publicação encontrada'}
        </span>
      </SearchHeader>

      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchContainer>
  )
}
