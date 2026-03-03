import { useState, useEffect } from 'react';

export function useTrending() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch trending data
    setLoading(false);
  }, []);

  return { data, loading };
}
