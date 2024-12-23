import React from "react";
import "./globals.css";
import BlogPreview from "@/components/blogPreview";
import blogs from "./blogData";

const Index: React.FC = () => {
  return (
    <>
      <main className="page-title">
        <div className="about-text">
          <h1>Welcome to my page! :D</h1>
          <p>
            Hello! ^^)7 I'm Emily, a <b>4th year computer science major</b> at
            Cal Poly San Luis Obispo, and I <em>love</em> playing video games!
          </p>
          <p>Some of my favorite series are:</p>
          <ul>
            <li>Pokemon</li>
            <li>Ace Attorney</li>
            <li>Infinity Nikki</li>
          </ul>
        </div>
        <h3>Below are my blog posts!</h3>
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </main>
      <footer className="footer">
        © 2024 Emily's Website | All Rights Reserved
      </footer>
    </>
  );
};

export default Index;
