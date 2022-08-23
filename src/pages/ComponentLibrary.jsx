import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { config } from "../config";
import RequestService from "../services/RequestService";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ErrorMessage from "../molecules/ErrorMessage";
import SearchLibrary from "../templates/SearchLibrary";

const ERROR_MESSAGE = "Error loading components";

const ComponentLibrary = () => {
  const urlParams = useLocation();
  const [componentList, setComponentList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [catalogList, setCatalogList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getParams = urlParams.search;

  const getSearch = useCallback(() => {
    RequestService.get(
      `${config.backendUrl}/components/search/${getParams}`,
      (response) => {
        setComponentList(response.data);
      },
      (err) => {
        setHasError(true);
        throw err;
      }
    );
  }, [getParams]);

  const getTypes = () => {
    RequestService.get(
      `${config.backendUrl}/components/types/`,
      (response) => {
        setTypeList(response.data);
      },
      (err) => {
        setHasError(true);
        throw err;
      }
    );
  };

  const getCatalogs = () => {
    RequestService.get(
      `${config.backendUrl}/catalogs/`,
      (response) => {
        setCatalogList(response.data);
      },
      (err) => {
        setHasError(true);
        throw err;
      }
    );
  };

  useEffect(() => {
    try {
      getSearch();
      getTypes();
      getCatalogs();
    } catch (error) {
      setIsLoading(false);
      return setHasError(true);
    }
  }, [getSearch]);

  let totalItemCount = 0;
  let lastItem = componentList[componentList.length - 1];
  if (lastItem !== undefined && lastItem.total_item_count !== undefined) {
    totalItemCount = lastItem.total_item_count;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  } else if (!hasError && componentList) {
    return (
      <>
        <h1>Component Library</h1>
        <SearchLibrary
          componentList={componentList}
          typeList={typeList}
          catalogList={catalogList}
          totalItemCount={totalItemCount}
        />
      </>
    );
  } else {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default ComponentLibrary;
