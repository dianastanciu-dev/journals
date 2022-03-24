import Button from "./Button.js";
import "./Article.scss";

function Article({ className, title, date, text }) {
  return (
    <div className={`article${className ? " " + className : ""}`}>
      {/*Daca avem className returneaza spatiu+className, altfel nimic*/}
      <h2 className="article-title">{title}</h2>
      <p className="article-date">{date}</p>
      <p className="article-text">{text}</p>

      <Button buttonStyle="btn--article btn-small" className="article-button">
        Read more
      </Button>
    </div>
  );
}

export default Article;
