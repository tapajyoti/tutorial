import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY436_FMwebp_QL65_.jpg"
    alt="Power"
  />
);

const Title = () => <h4>The Power of Your Subconscious Mind</h4>;
const Author = () => <h3>Joseph Murphy</h3>;

ReactDom.render(<BookList />, document.getElementById("root"));
