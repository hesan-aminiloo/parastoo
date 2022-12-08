import { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../constants/endpoints";

const useComments = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { data } = await axios.get(endpoints.getComments(id));
        setIsLoading(false);
        setData(data.slice(0, 20));
      } catch (e) {
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

export default useComments;
