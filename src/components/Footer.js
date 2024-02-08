// function Footer() {
//   // const instagram = 'https://www.instagram.com/thenourishednotebook/';

//   return {};

function Footer() {
	return (
		<footer
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "20px",
				backgroundColor: "white",
			}}
		>
			<div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
				<a
					href="/contact"
					style={{ textDecoration: "none", color: "black" }}
				>
					Contact Us
				</a>
				<a
					href="/about"
					style={{ textDecoration: "none", color: "black" }}
				>
					About Us
				</a>
				<a
					href="https://instagram.com"
					style={{ textDecoration: "none", color: "black" }}
				>
					Instagram
				</a>
			</div>
			<div style={{ color: "grey" }}>
				<p>&copy; {new Date().getFullYear()} Privacy - Terms</p>
			</div>
		</footer>
	)
}

export default Footer
