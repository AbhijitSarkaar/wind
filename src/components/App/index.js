import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const { value } = useSelector((state) => state);
  return <div>value: {value}</div>;
}
