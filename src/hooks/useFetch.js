import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (token) {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });
        const receivedData = await res.json();
        setData(receivedData);
        setLoading(false);
        console.log(receivedData);
        console.log("this ran with token");
      } else {
        const res = await fetch(url);
        const receivedData = await res.json();
        setData(receivedData);
        setLoading(false);
        console.log(receivedData);
        console.log("this ran without token");
      }
    };
    setTimeout(() => {
      getData().catch((error)=>{
        setError('Oooops something went wrong!')
        setLoading(false)
        console.log(error);
      });
    }, 2000);
  }, [url]);

  return { data, loading, error };
};
