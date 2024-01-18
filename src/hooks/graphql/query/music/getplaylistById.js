import { gql } from "@apollo/client";

export const GET_PLAYLIST_BY_ID = gql`
query($getPlaylistByIdId: ID!) {
  getPlaylistById(id: $getPlaylistByIdId) {
    tittle
    description
  }
}
`