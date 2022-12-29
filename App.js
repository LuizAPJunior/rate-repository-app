import { ApolloProvider } from '@apollo/client';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const App =() => {
  const apolloClient = createApolloClient();

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main/>
        </ApolloProvider>
      </NativeRouter>
    </>  
  );
}

export default App;


