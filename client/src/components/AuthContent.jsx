import { useState, useEffect } from "react";
import request from "../axios_helper";

const AuthContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request("GET", "/messages", {}).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <ul>{data.length > 0 && data.map((line) => <li key={line.id || line}>{line}</li>)}</ul>
    </div>
  );
};

export default AuthContent;
