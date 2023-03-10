import React, { useState, useEffect } from "react";
import PaginationTable from "./components/PaginationTable";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setIsLoading(true)
    fetch("https://api.publicapis.org/entries").then((res) =>
      res.json().then((data) => setData(data?.entries))
    ).catch(err => {
      throw Error('could not fetch data')
    }).finally(
      setIsLoading(false)
    );
  }, []);
  return (
    <>
      <div style={{ marginTop: "200px" }}>
        <div style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
          <PaginationTable isFetching={isLoading} data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
