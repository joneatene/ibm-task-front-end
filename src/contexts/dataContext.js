import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState();
  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/search?q=example&token=1bb4cbc54b61c6428441adf8fd8c8954"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setOriginalData(data.articles);
      });
  }, []);
  return (
    <DataContext.Provider value={{ data, setData, originalData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
