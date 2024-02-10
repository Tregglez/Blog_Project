

function Layout2({ title, text, imageUrls }) {
  return (
    <div className="blog-container">
      <h1 className="blog-title">{title}</h1>
      <div className="layout2-images-container">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Content piece ${index + 1}`} className="layout2-img" />
        ))}
      </div>
      <p className="blog-text">{text}</p>
    </div>
  );
}

export default Layout2;
