import React, { useContext, useEffect, useState } from "react";

const url = `https://restcountries.eu/rest/v2/name/`;
const urlAll = `https://restcountries.eu/rest/v2/all`;
const Context = React.createContext();
const localTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(``);
  const [error, setError] = useState({ msg: "", show: false });
  const [reg, setReg] = useState("");
  const [theme, setTheme] = useState(localTheme());
  const fetchItems = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 404) {
        setError({ show: true, msg: `${data.message}` });
      } else {
        setError({ show: false, msg: "" });
        setItems(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (query) {
      fetchItems(`${url}${query}`);
    } else {
      fetchItems(`${urlAll}`);
    }
  }, [query, reg]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <Context.Provider
      value={{
        loading,
        items,
        setQuery,
        error,
        setItems,
        reg,
        setReg,
        setTheme,
        theme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Context);
};

export { ContextProvider, useGlobalContext };
