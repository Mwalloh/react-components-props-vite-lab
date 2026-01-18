function Article({ title, date = "January 1, 1970", preview, time }) {
	return (
		<article>
			<h3>{title}</h3>
			<small>{date} </small>
			<small>☕{time}mins read</small>
			<p>{preview}</p>
		</article>
	);
}

export default Article;
