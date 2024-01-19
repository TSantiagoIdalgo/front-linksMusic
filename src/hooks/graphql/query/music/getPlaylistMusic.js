import { gql } from "@apollo/client";

export const GET_PLAYLIST_MUSIC = gql`
query($getPlaylistMusicId: ID!) {
  getPlaylistMusic(id: $getPlaylistMusicId) {
    id
    tittle
    description
    music {
      id
      image
      name
      album
      duration
    }
  }
}
`