// const instagram = 'https://www.instagram.com/thenourishednotebook/';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer::before"></div>
			<div className="footer-links">
				<a href="/contact">contact me</a>
				<a href="/about">about me</a>
				<a href="https://instagram.com">Instagram</a>
			</div>
			<p>&copy; {new Date().getFullYear()} Privacy - Terms</p>
		</footer>
	)
}

export default Footer
