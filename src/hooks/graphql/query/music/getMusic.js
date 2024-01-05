import { gql } from "@apollo/client";

export const GET_ALL_MUSIC = gql`
  query {
    getAllMusic {
      id
      name
      album
      duration
      image
  }
}
`