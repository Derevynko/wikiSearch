import React from "react";
import { Input } from "antd";
import "./UserInput.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updataUserInput, updataRequest } from "../store/UserInputSlice";
import { useSearchParams } from "react-router-dom";

function UserInput() {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  let value = useSelector((state) => state.userInput.userInput);
  const url = "https://en.wikipedia.org/w/api.php";
  const params = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: value || searchParams.get("search"),
    format: "json",
    origin: "*",
    srlimit: 30,
  });
  {
    (value === "") & (searchParams.get("search") === null)
      ? null
      : axios
          .get(`${url}?${params}`)
          .then((response) => {
            dispatch(updataRequest(response.data.query.search));
          })
          .catch(function (error) {
            alert(error);
          });
  }
  function debounce(func, delay) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }
  function updateInput(e) {
    value = e.target.value;
    console.log(value);
    history.pushState(
      value,
      "page 2",
      `?search=${value}&page=${searchParams.get("page") || 1}`
    );
    dispatch(updataUserInput(value));
  }
  return (
    <Input
      placeholder="Введите запрос для поиска в Википедии"
      onChange={debounce(updateInput, 1000)}
      defaultValue={searchParams.get("search")}
      style={{ width: 400 }}
    />
  );
}
export default UserInput;
