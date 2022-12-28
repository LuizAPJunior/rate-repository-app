import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return(
        <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab path="/">Repositories</AppBarTab>
                    <AppBarTab path="/signin">Sign In</AppBarTab>
                    
                </ScrollView>
        </View>
    );
};

export default AppBar;