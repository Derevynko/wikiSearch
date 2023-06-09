import React from "react";
import { Input } from "antd";
import "./UserInput.css";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updataUserInput } from "../store/UserInputSlice.mjs";
function UserInput() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  function debounce(func, delay) {
    let timeout;
    return function returnDebounce(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }
  function updateInput(e) {
    const { value } = e.target;
    window.history.pushState(
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
