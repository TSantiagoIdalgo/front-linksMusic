import { gql } from "@apollo/client";

export const ADD_MUSIC_TO_PLAYLIST = gql`
mutation($musicId: String, $playlistId: String) {
  addMusicToPlaylist(musicId: $musicId, playlistId: $playlistId) {
    id
  }
}
`