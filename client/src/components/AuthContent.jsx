import { useState, useEffect } from "react";
import {request} from "../axios_helper";

const AuthContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request("GET", "/messages", {}).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="row justify-content-md-center">
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Backend Response</h5>
            <p className="card-text">Content:</p>
            <ul>{data.length > 0 && data.map((line) => <li key={line.id || line}>{line}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
