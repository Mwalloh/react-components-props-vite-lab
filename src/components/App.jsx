import React from "react";
import blogData from "../data/blog";
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import ArticleList from "./ArticleList/ArticleList.jsx";

console.log(blogData);

function App() {
	return (
		<div className="App">
			<Header name={blogData.name}></Header>
			<About image={blogData.image} about={blogData.about}></About>
			<ArticleList posts={blogData.posts}></ArticleList>
		</div>
	);
}

export default App;
