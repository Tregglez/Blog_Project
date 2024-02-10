import '../styles/BlogLayouts.css';

function Layout1({ title, text, imageUrl }) {
  return (
    <div className="blog-layout-one">
      <div className="image-container">
        <img src={imageUrl} alt="Featured" className="content-image" />
      </div>
      <div className="text-content">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Layout1;
