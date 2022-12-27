import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    numbersInfoItem:{
        textAlign: 'center'
    },
})

const RepositoryItemCountInfo = ({itemInfoCount, info}) => {

    return (
        <View>
        <Text fontWeight="bold" style={styles.numbersInfoItem}>{itemInfoCount >= 1000?
        `${parseFloat((itemInfoCount/1000).toFixed(1))}k`: itemInfoCount}
        </Text>
        <Text color="textSecondary">{info}  </Text>
        </View>
    );
};

export default RepositoryItemCountInfo;