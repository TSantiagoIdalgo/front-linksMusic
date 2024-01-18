import { gql } from "@apollo/client";

export const REMOVE_MUSIC_FROM_PLAYLIST = gql`
mutation($musicId: String, $playlistId: String) {
  removeFromPlaylist(musicId: $musicId, playlistId: $playlistId) {
    id
    name
  }
}
`