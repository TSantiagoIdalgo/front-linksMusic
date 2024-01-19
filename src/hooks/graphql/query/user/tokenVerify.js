import { gql } from '@apollo/client'

export const TOKEN_VERIFY = gql`
query($token: String!) {
  userTokenVerify(token: $token)
}
`