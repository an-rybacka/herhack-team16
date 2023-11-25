import React, { useState, useEffect } from "react";
import axios from "axios";

export default async function fetchOffers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dz53ujk4gsr7tu7u6oscal7oni0qfzjb.lambda-url.ap-northeast-2.on.aws/"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {/* Render your data here */}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
            // Adjust the keys and properties based on your API response structure
          ))}
        </ul>
      )}
    </div>
  );
};

