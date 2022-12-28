import { StyleSheet, Pressable } from "react-native";
import Text from './Text';
import { Link } from 'react-router-native';
import theme from "../theme";

const styles = StyleSheet.create({
     text:{
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold, 
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