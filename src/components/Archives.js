import React from "react";
import Article from "./Article";
import "./Archives.scss";

function Archives() {
  const articles = [
    { article: "titlu1", date: "data1", text: "text1" },
    { article: "titlu2", date: "data2", text: "text2" },
  ];

  return (
    <>
      <p className="archives-title">ARCHIVES</p>

      <div className="archives">
        {articles.map((item, index) => {
          return (
            <Article
              key={index}
              className="archives-article"
              title={item.title}
              date={item.date}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  );
}

export default Archives;
