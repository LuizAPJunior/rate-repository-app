import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';




const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;



const RepositoryList = () => {
  const result =  useQuery(GET_REPOSITORIES,{fetchPolicy: 'cache-and-network'});
  const {repositories} =  useRepositories(result);

   // Get the nodes from the edges array
   const repositoryNodes = repositories
   ? repositories.edges.map(edge => edge.node)
   : [];


  const renderItem = ({item}) => (<RepositoryItem item={item}/>);
  
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;