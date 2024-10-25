// blog object type
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// blog object list
const blogs: Blog[] = [
  {
    title: "Hello World! My First Blog Post",
    date: "10-24-2024",
    description:
      "Welcome to my first blog post :) Unfortuantely, midterms are about to hit :(",
    image:
      "https://c-ssl.dtstatic.com/uploads/blog/202209/24/20220924153611_fdccc.thumb.1000_0.jpg",
    imageAlt: "Maltese working at a desk",
    slug: "https://www.instagram.com/xiantiao_xiaogou/",
  },
  {
    title: "#2: more about me",
    date: "10-24-2024",
    description:
      "I'm a computer science student at Cal Poly SLO. I love cute characters and video games!",
    image: "images/Cherrim.png",
    imageAlt: "A drawing Cherrim (my favorite Pokemon)",
    slug: "https://www.serebii.net/pokedex-swsh/cherrim/",
  },
];

function blogAppend(blogs: Blog[]) {
  // get blog container (+ error handling)
  const blogContainer = document.getElementById("blog-container");
  if (!blogContainer) {
    console.error("No blog container found");
    return;
  }

  // append each blog to the blog container
  blogs.forEach((blog) => {
    // make div and assign it blog-container class
    const blogEntry = document.createElement("div");
    blogEntry.classList.add("blog-entry");

    // title
    const blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogEntry.appendChild(blogTitle);

    // date
    const blogDate = document.createElement("p");
    blogDate.textContent = blog.date;
    blogEntry.appendChild(blogDate);

    // description
    const blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;
    blogEntry.appendChild(blogDesc);

    // image
    const blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    blogEntry.appendChild(blogImg);

    // slug
    const blogSlug = document.createElement("a");
    blogSlug.href = blog.slug;
    blogSlug.textContent = "Character page";
    blogSlug.target = "_blank";
    blogEntry.appendChild(blogSlug);

    blogContainer.appendChild(blogEntry);
  });
}

blogAppend(blogs);
