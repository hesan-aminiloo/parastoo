import { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "../constants/endpoints";

const usePost = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const { data } = await axios.get(endpoints.getPost(id));
        setIsLoading(false);
        setData(data);
      } catch (e) {
        setIsLoading(false);
        setError(true);
      }
    };

    if (id) getData();
  }, [id]);

  return {
    isLoading,
    error,
    data,
  };
};

export default usePost;
