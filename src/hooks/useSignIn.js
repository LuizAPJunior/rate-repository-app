import { useMutation } from "@apollo/client";

import { AUNTHENTICATE } from "../graphql/mutations";


const useSignIn = () => {
    const [authentication, result] = useMutation(AUNTHENTICATE);
   
    const signIn =  ({ username, password }) => {
        authentication({variables:{username, password}});
        if(result) {
            return result;
        }
    };
    return [signIn, result];
}

export default useSignIn;