import { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../../constants/endpoints";

const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { data } = await axios.get(endpoints.getPosts);
        setIsLoading(false);
        setPosts(data.slice(0, 20));
      } catch (e) {
        setError(true);
      }
    };

    getData();
  }, []);

  return {
    isLoading,
    error,
    posts,
  };
};

export default usePosts;
