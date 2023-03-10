import { useState, useEffect } from 'react';



const useRepositories =  (result) => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  
  const fetchRepositories =  () => {
    setLoading(true);
    const {data} = result;
    const repositoriesResult = data? data.repositories : "";
    
    setLoading(false);
    setRepositories(repositoriesResult);
  };

  useEffect(() => {
    fetchRepositories();
  }, [result]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;