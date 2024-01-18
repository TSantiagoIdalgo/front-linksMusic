import { gql } from "@apollo/client";

export const GET_USER_PLAYLIST = gql`
query($getUserPlaylistId: ID!) {
   getUserPlaylist(id: $getUserPlaylistId) {
     id
     tittle
   }
}
`