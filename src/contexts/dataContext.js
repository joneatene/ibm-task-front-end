import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState();
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=41ed4aec1ba5473da5d7ac45ff67401a"
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
