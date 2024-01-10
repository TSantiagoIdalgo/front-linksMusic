import { gql } from "@apollo/client";

export const GET_USER_MUSIC = gql`
  query ($email: String) {
    getUserMusic(email: $email) {
      id
      name
      album
      duration
      image
  }
}
`