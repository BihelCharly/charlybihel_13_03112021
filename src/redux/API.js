import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (axiosParams) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUserInfos] = useState(undefined);

  const fetchData = async (params) => {
    try {
      // get & set User Infos Datas
      const urlUser = await axios.request(params);
      setUserInfos(urlUser.data.body);
      // get & set User Activity Datas
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, user };
};
