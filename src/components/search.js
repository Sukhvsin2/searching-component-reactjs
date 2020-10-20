import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function Search(props) {
  function handleChange(e) {
    props.setSearch(e.target.value);
    fetchData(props.search);
  }
  function fetchData(search) {
    const gettoken = {
      header: {
        Accept: "application/json",
        "api-token":
          "3HuC-UFWQ_dtPQbtkCL6-ICHtsK-n-1Sxyrplmms0z52MWQkTw5sdtxoufSjbgQ9lpk",
        "user-email": "higog76250@pasatmao.com"
      }
    };
    let config = {
      headers: {
        Authorization: ""
      }
    };
    axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", gettoken)
      .then((res) => {
        config.headers.Authorization = "Bearer " + res.data.auth_token;
        console.log(config);
      })
      .catch((e) => console.log(e));
    console.log(config);

    setTimeout(() => {
      axios
        .get(`https://www.universal-tutorial.com/api/states/countries/`, config)
        .then((res) => console.log(res))
        .catch((e) => console.log("err" + e));
    }, 1000);
  }

  return (
    <div className="searchBox">
      <div className="searchBox__container">
        <input
          type="text"
          onChange={handleChange}
          value={props.search}
          className="searchBox__input"
        />
        <SearchIcon />
      </div>
      <Autocomplete
        id="combo-box-demo"
        style={{ margin: "10px" }}
        options={props.data.map((item) => item.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={handleChange}
            label="Combo box"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
