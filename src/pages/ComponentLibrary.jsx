import SearchLibrary from "../templates/SearchLibrary";
import { useState, useEffect } from "react";
import Config from "../config";
import { useLocation } from "react-router-dom";

const ComponentLibrary = () => {
  const urlParams = useLocation();
  const [error, setError] = useState(false);
  const [componentList, setComponentList] = useState([]);
  const getParams = urlParams.search;
  useEffect(() => {
    fetch(`${Config("backendUrl")}/components/search/${getParams}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((componentList) => {
        if (componentList !== undefined) {
          return setComponentList(componentList);
        } else {
          return setError(true);
        }
      })
      .catch((error) => {
        return setError(true);
      });
  }, []);

  return (
    <>
      <h1>Component Library</h1>
      <SearchLibrary componentList={componentList} />
    </>
  );
};

export default ComponentLibrary;
