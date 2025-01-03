import { useEffect, useState } from 'react';
import axios from 'axios';

const useCustomReactQueryHook = (urlPath: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setData(response.data.result);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [urlPath]);

  return { data, error, loading };
};

export default useCustomReactQueryHook;