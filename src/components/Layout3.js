function Layout3({ title, text, imageUrl }) {
  return (
    <div className="blog-container layout3-container">
      <h1 className="blog-title">{title}</h1>
      <img src={imageUrl} alt="Blog visual" className="layout3-img" />
      <p className="blog-text">{text}</p>
    </div>
  );
}

export default Layout3;
