import { useState, useEffect } from 'react';
import type { FetchState } from '../types';

// Generic custom hook - works with ANY data type!
const useFetch = <T>(url: string): FetchState<T> => {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result: T = await response.json();
        setData(result);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [url]);  // Re-fetch when URL changes

  return { data, loading, error };
};

export default useFetch;