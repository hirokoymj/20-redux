import React, { useState, useEffect } from "react";

export const UsersView = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http//example.com";
    const getData = async () => {
      try {
        const response = fetch("url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: "example" }),
        });
        if (!response.ok) throw Error(`HTTP error`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
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
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {data.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
