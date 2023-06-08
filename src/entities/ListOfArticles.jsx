import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import { Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGetWikiSearchQuery } from "../store/wikiAp.js";
import "./ListOfArticles.css";
function ListOfArticles() {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  let value =
    useSelector((state) => state.userInput.userInput) ||
    searchParams.get("search") ||
    "";
  let { dataResponse, isFetching, error } = useGetWikiSearchQuery(`${value}`, {
    skip: value === "",
    selectFromResult: ({ data, isFetching, error }) => ({
      dataResponse: data?.query.search,
      isFetching: isFetching,
      error: error,
    }),
  });
  const userInput = useSelector((state) => state.userInput.userInput);
  function createMarkup(data) {
    return { __html: data };
  }
  const changePage = (page) => {
    history.pushState(
      page,
      "page 1",
      `?search=${userInput || searchParams.get("search")}&page=${page}`
    );
  };

  return error ? (
    <h1>{error.status}</h1>
  ) : (
      <List
        pagination={{
          position: "bottom",
          align: "center",
          onChange: changePage,
          defaultCurrent: Number(pageNumber),
        }}
        dataSource={dataResponse}
        renderItem={(item) => (
          <List.Item>
            <Skeleton loading={isFetching} active>
              <List.Item.Meta
                title={
                  <a href={`https://en.wikipedia.org/?curid=${item.pageid}`}>
                    {item.title}
                  </a>
                }
                description={
                  <div
                    dangerouslySetInnerHTML={createMarkup(`${item.snippet}`)}
                  />
                }
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
  );
}
export default ListOfArticles;
