import React, { useState } from "react";
import "./styles.css";
import Search from "../src/components/search";
import Result from "../src/components/result";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Search search={search} data={data} setSearch={setSearch} />
      <Result keyword={search} data={data} />
    </div>
  );
}
