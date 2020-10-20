import React from "react";

export default function Result({ keyword, data }) {
  return (
    <div className="result">
      <h4 className="result__title">{keyword}</h4>
      <p>{data}</p>
    </div>
  );
}
