import { StyleSheet ,View, Image } from "react-native";
import theme from "../theme";
import RepositoryItemCountInfo from "./RepositoryItemCountInfo.jsx";
import Text from "./Text";



const RepositoryItem = ({item}) => {

    const styles = StyleSheet.create({
        logo:{
            width: 50,
            height: 50,
            borderRadius: 5
        },
        itemContainer:{
            padding: 10,
            marginBottom: 8,
            backgroundColor: '#fff'
        },
        imageContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 16
        },
        itemInfoContainer:{
            flexShrink: 1,
            display: "flex",
            marginLeft: 16
        },
        numbersInfo: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly' 
        },
         info:{
            marginBottom: 8
         },
        language: {
            padding: 8,
            marginRight: 'auto',
            marginBottom: 8,
            color: "#fff",
            backgroundColor: theme.colors.primary,
            borderRadius: 5,   
        },
        
    
    });



    return(
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={{uri: item.ownerAvatarUrl}}/>
                <View style={styles.itemInfoContainer}>
                    <Text fontWeight="bold" fontSize="subheading" style={styles.info}> {item.fullName} </Text>
                    <Text color={"textSecondary"} style={styles.info}> {item.description} </Text>
                    <Text style={styles.language}> {item.language} </Text>
                </View>
            </View>
            <View style={styles.numbersInfo}>
                <RepositoryItemCountInfo itemInfoCount={item.stargazersCount} info="Stars"/>
                <RepositoryItemCountInfo itemInfoCount={item.forksCount} info="Forks"/>
                <RepositoryItemCountInfo itemInfoCount={item.reviewCount} info="Reviews"/>
                <RepositoryItemCountInfo itemInfoCount={item.ratingAverage} info="Rating"/>
            </View>
        </View>
    );
};

export default RepositoryItem;