import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation ($userName: String, $passwordHash: String, $email: String) {
  userCreate(userName: $userName, email: $email, passwordHash: $passwordHash, ) {
    email
    token
  }
}
`