import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const requestAPI = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, {});
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestAPI(url);
  }, [url]);

  return [data, isLoading, error];
};
