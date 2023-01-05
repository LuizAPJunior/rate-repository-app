import { useMutation } from "@apollo/client";

import { AUNTHENTICATE } from "../graphql/mutations";

import { useApolloClient } from "@apollo/client";
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn =  () => {
    const [authentication, result] = useMutation(AUNTHENTICATE);
    
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const signIn =  async ({ username, password }) => {
        const { data } = await authentication({variables:{username, password}});
        if(data?.authenticate){
            await authStorage.setAccessToken(data.authenticate.accessToken);
            apolloClient.resetStore(); 
        }
    };
    return [signIn, result];
}

export default useSignIn;