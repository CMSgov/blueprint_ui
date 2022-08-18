import React from "react";
import { useEffect, useState } from "react";
import RequestService from "../services/RequestService";
import ErrorMessage from "../molecules/ErrorMessage";

export function DeleteComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    RequestService.delete(`fake-url.com`, (response) => {
      setData(response.data);
    });
  }, []);

  if (data) {
    return <div>Test Component data: {data}</div>;
  }
  return <ErrorMessage />;
}

export function GetComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    RequestService.get(`fake-url.com`, (response) => {
      setData(response.data);
    });
  }, []);

  if (data) {
    return <div>Test Component data: {data}</div>;
  }
  return <ErrorMessage />;
}

export function PostComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    RequestService.post(`fake-url.com`, (response) => {
      setData(response.data);
    });
  }, []);

  if (data) {
    return <div>Test Component data: {data}</div>;
  }
  return <ErrorMessage />;
}
