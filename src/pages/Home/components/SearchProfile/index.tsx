import { SearchContainer, SearchHeader } from './styles'

export function SearchProfile() {
  return (
    <SearchContainer>
      <SearchHeader>
        <h2>Publicações</h2>

        <span>6 publicações</span>
      </SearchHeader>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
