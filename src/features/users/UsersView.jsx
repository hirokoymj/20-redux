import React, { useState, useEffect } from "react";

export const UsersView = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/1"
  //       );
  //       if (!response.ok) throw Error(`HTTP error ${response.status}`);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error(`HTTP error`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
