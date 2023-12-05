import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  query getLogin($email: String!, $passwordHash: String!) {
    getUserLogin(email: $email, passwordHash: $passwordHash) {
        token
    }
  }
`