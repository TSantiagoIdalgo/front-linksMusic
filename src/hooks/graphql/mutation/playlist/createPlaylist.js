import { gql } from "@apollo/client";

export const CREATE_PLAYLIST = gql`
mutation($userId: String, $tittle: String, $description: String) {
  createPlaylist(userId: $userId, tittle: $tittle, description: $description) {
    tittle
  }
}
`