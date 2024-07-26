import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";


export interface Genre {
  id: number;
  name: string;
}

interface FecthgenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FecthgenresResponse>("/genres", { signal: controller.signal })
      .then((res) => 
        {
          setGenres(res.data.results)
          setLoading(false)
        })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)

      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
