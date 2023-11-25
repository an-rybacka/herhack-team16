import React, { useState } from "react";

const FetchDataButton = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://oc7ax6ozx7o5r3ygnr4xupzm4e0mxmph.lambda-url.ap-northeast-2.on.aws/"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>Received Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchDataButton;
