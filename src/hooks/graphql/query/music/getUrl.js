import { gql } from "@apollo/client";

export const GET_MUSIC_URL = gql`
    query($getMusicUrlId: String!, $name: String) {
      getMusicURL(id: $getMusicUrlId, name: $name)
    }
`