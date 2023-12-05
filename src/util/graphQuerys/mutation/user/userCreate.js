import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation userCreate($userName: String, $email: String, $passwordHash: String) {
  userCreate(userName: $userName, email: $email, passwordHash: $passwordHash) {
    id
    userName
    email
    passwordHash
  }
}
`