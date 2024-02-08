// const instagram = 'https://www.instagram.com/thenourishednotebook/';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer::before"></div>
			<div className="footer-links">
				<a href="/contact">contact me</a>
				<a href="/about">about me</a>
				<a href="https://www.instagram.com/thenourishednotebook/">Instagram</a>
			</div>
			<div className="privacy">
				<p>Privacy - Terms</p>
				<p>&copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
}

export default Footer;
