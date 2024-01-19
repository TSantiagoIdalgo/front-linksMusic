import { gql } from '@apollo/client'

export const UPDATE_PLAYLIST = gql`
  mutation($updatePlaylistId: ID!, $tittle: String, $description: String) {
    updatePlaylist(id: $updatePlaylistId, tittle: $tittle, description: $description) {
      id
      tittle
      description
    }
  }
`