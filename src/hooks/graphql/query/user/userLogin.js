import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    query getToken($email: String!, $passwordHash: String!) {
        getUserLogin(email: $email, passwordHash: $passwordHash) {
            email
            token
        }
    }
    
`
export const GOOGLE_LOGIN = gql`
    query getGoogleLogin($email: String!, $userName: String!) {
      getUserNetworkLogin(email: $email, userName: $userName)
    }
`