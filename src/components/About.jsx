const logo = "https://via.placeholder.com/215";

function About({ image = logo, about }) {
	return (
		<aside>
			<img src={image} alt="blog logo" />
			<p>{about}</p>
		</aside>
	);
}

export default About;
