import { gql } from '@apollo/client';

export const AUNTHENTICATE = gql`
    mutation authentication($username: String!, $password: String!){
        authenticate(credentials: {username: $username, password: $password}){
            accessToken
        }
    }
`;