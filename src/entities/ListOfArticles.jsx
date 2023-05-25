import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import { useSearchParams } from "react-router-dom";
function ListOfArticles() {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  const data = useSelector((state) => state.userInput.requestData);
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
  return (
    <>
      {data.length != 0 ? (
        <List
          pagination={{
            position: "bottom",
            align: "center",
            onChange: changePage,
            defaultCurrent: Number(pageNumber),
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
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
            </List.Item>
          )}
        />
      ) : null}
    </>
  );
}
export default ListOfArticles;
