import SearchLibrary from "../templates/SearchLibrary";
import { useState, useEffect } from "react";
import Config from "../config";
import { useLocation } from "react-router-dom";

const ComponentLibrary = () => {
  const urlParams = useLocation();
  const [error, setError] = useState(false);
  const [componentList, setComponentList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const getParams = urlParams.search;

  function getSearch() {
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
          throw new Error("Error loading the list of components");
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  function getTypes() {
    fetch(`${Config("backendUrl")}/components/types/`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return setTypeList(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  useEffect(() => {
    try {
      getSearch();
      getTypes();
    } catch (error) {
      return setError(true);
    }
  }, []);

  let totalItemCount = 0;
  let lastItem = componentList[componentList.length - 1];
  if (lastItem !== undefined && lastItem.total_item_count !== undefined) {
    totalItemCount = lastItem.total_item_count;
  }

  return (
    <>
      <h1>Component Library</h1>
      <SearchLibrary
        componentList={componentList}
        typeList={typeList}
        totalItemCount={totalItemCount}
      />
    </>
  );
};

export default ComponentLibrary;
