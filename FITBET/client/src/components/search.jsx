import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [citys, setCitys] = useState([]);
  useEffect(() => {
    handleOnLoad();
  }, []);
  const handleOnLoad = async (event) => {
    try {
      const result = await axios.get("http://localhost:8000/search");
      setCitys(result.data.data); // Assuming your server returns an array of city names
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error gracefully, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <div id="body">
        <input
          type="text"
          placeholder="enter the city"
          // onChange={handleOnChange}
        />
      </div>
      {citys.length > 0 && (
        <div style={{ backgroundColor: "red" }}>
          {citys.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
