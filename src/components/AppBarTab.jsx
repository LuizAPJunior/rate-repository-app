import { StyleSheet, Pressable } from "react-native";
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
     text:{
      color: '#fff',
      paddingLeft: 8
     }
  });


const AppBarTab = ({children, path}) => {
    return(
        <Pressable>
                <Link to={path}>
                    <Text fontWeight="bold" style={styles.text}>{children}</Text>
                </Link>
        </Pressable>
    );
}

export default AppBarTab;