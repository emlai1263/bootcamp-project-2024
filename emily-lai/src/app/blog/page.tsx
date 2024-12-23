import React from "react";
import "../globals.css"; // Assuming this is the correct path to your global styles

const BlogPage: React.FC = () => {
  return (
    <main className="page-title">
      <h1>Happy Thursday :3</h1>
      <div id="blog-container"></div>
      <footer className="footer">
        © 2024 Emily's Website | All Rights Reserved
      </footer>
      <script src="./blog.js"></script>
    </main>
  );
};

export default BlogPage;
