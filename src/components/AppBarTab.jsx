import { StyleSheet, Pressable } from "react-native";
import Text from './Text';


const styles = StyleSheet.create({
     text:{
      color: '#fff'
     }
  });


const AppBarTab = ({children}) => {
    return(
        <Pressable onPress={()=> console.log("This is tab: ", children)}>
                <Text fontWeight="bold" style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default AppBarTab;