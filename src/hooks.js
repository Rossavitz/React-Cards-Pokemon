import { useState } from "react";
import axios from "axios";

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
};

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async (endpointUrl = "") => {
    const res = await axios.get(`${url}${endpointUrl}`);
    setData((data) => [...data, res.data]);
  };
  return [data, addData];
};

export default useFlip;
export { useAxios };
