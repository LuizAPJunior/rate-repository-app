import { StyleSheet,View, Pressable} from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Formik} from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";
import { useEffect } from 'react';


const styles = StyleSheet.create({
  button:{
    backgroundColor: theme.colors.primary,
    marginTop: 16,
    marginHorizontal: 16,
    paddingLeft: 16,
    paddingVertical: 16,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff"
  }
})

const SignInForm = ({onSubmit}) => {

  return (
    <View>
      <FormikTextInput name="username" placeholder="Username"/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText} >Sign In</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 letters.')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn,result] = useSignIn();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  useEffect(()=>{
    const logged = async (data) =>{
      await authStorage.setAccessToken(data.authenticate.accessToken);
      navigate("/");
      apolloClient.resetStore(); 
    } 
    if(result.data !==undefined){
       logged(result.data);
    } 
  },[result]);

  const onSubmit = async (values) => {
    const { username, password } = values;
   
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  }

  return (
      <Formik 
      initialValues={{
        username: '',
        password: ''
      }} 
      validationSchema = {validationSchema}
      onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
  )
};

export default SignIn;