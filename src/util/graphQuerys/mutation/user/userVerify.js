import { gql } from '@apollo/client';

export const VERIFY_USER = gql`
  mutation userVerify($token: String!) {
    userVerify(token: $token) {
        userName
        verify
    }
}
`