import Article from "./Article/Article.jsx";

function ArticleList({ posts }) {
	return (
		<main>
			{posts.map((post) => {
				return <Article
					key={post.id}
					title={post.title}
					date={post.date}
					preview={post.preview}
				></Article>;
			})}
		</main>
	);
}

export default ArticleList;
