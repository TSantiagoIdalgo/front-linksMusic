import { gql } from "@apollo/client";

export const DELETE_MUSIC = gql`
mutation($deleteMusicId: ID!, $filename: String!) {
  deleteMusic(id: $deleteMusicId, filename: $filename) {
    httpCode
  }
}
`