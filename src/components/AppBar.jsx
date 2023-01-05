import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import { LOGGED } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight+16,
    paddingHorizontal: 10,
    paddingBottom: 16,
    backgroundColor: theme.colors.appBarBg,
  }
});

const AppBar = () => {
  const result = useQuery(LOGGED, {fetchPolicy: 'cache-and-network'});
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const {data} = result;
  
  if(data?.me === null){
    return(
          <View style={styles.container}>
              <ScrollView horizontal>
                  <AppBarTab path="/">Repositories</AppBarTab>
                  <AppBarTab path="/signin">Sign In</AppBarTab>
              </ScrollView>
          </View>
    );
  }
    
  const handleSignOut = async() => {  
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/signin");
  }

  return(
    <View style={styles.container}>
      <ScrollView horizontal>
          <AppBarTab path="/">Repositories</AppBarTab>
          <AppBarTab handleOnPress={handleSignOut} >Sign Out</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;