import "./Article.css";
import Button from "./Button.js";

function Article() {
  return (
    <div className="article">
      <div>
        <p className="article-title">Title</p>
        <p className="article-date">Date</p>
        <p className="article-text">Some text....</p>

        <Button buttonStyle="btn--article btn-small" className="signupButton">
          Read more
        </Button>
      </div>
    </div>
  );
}

export default Article;
