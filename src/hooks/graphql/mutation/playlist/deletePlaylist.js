import { gql } from "@apollo/client";

export const DELETE_PLAYLIST = gql`
mutation($deletePlaylistId: ID!) {
  deletePlaylist(id: $deletePlaylistId) {
    id
  }
}
`