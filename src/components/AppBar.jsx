import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight+16,
    paddingHorizontal: 10,
    paddingBottom: 16,
    backgroundColor: theme.colors.appBarBg,
  }
});

const AppBar = () => {
  return(
        <View style={styles.container}>
            <AppBarTab>Repositories</AppBarTab>
        </View>
    );
};

export default AppBar;