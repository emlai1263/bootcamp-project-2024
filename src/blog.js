// blog object list
var blogs = [
    {
        title: "Hello World! My First Blog Post",
        date: "10-24-2024",
        description: "Welcome to my first blog post :) Unfortuantely, midterms are about to hit :(",
        image: "https://c-ssl.dtstatic.com/uploads/blog/202209/24/20220924153611_fdccc.thumb.1000_0.jpg",
        imageAlt: "Maltese working at a desk",
        slug: "https://www.instagram.com/xiantiao_xiaogou/",
    },
    {
        title: "#2: more about me",
        date: "10-24-2024",
        description: "I'm a computer science student at Cal Poly SLO. I love cute characters and video games!",
        image: "images/Cherrim.png",
        imageAlt: "A drawing Cherrim (my favorite Pokemon)",
        slug: "https://www.serebii.net/pokedex-swsh/cherrim/",
    },
];
function blogAppend(blogs) {
    // get blog container (+ error handling)
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer) {
        console.error("No blog container found");
        return;
    }
    // append each blog to the blog container
    blogs.forEach(function (blog) {
        // make div and assign it blog-container class
        var blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry");
        // title
        var blogTitle = document.createElement("h1");
        blogTitle.textContent = blog.title;
        blogEntry.appendChild(blogTitle);
        // date
        var blogDate = document.createElement("p");
        blogDate.textContent = blog.date;
        blogEntry.appendChild(blogDate);
        // description
        var blogDesc = document.createElement("p");
        blogDesc.textContent = blog.description;
        blogEntry.appendChild(blogDesc);
        // image
        var blogImg = document.createElement("img");
        blogImg.src = blog.image;
        blogImg.alt = blog.imageAlt;
        blogEntry.appendChild(blogImg);
        // slug
        var blogSlug = document.createElement("a");
        blogSlug.href = blog.slug;
        blogSlug.textContent = "Character page";
        blogSlug.target = "_blank";
        blogEntry.appendChild(blogSlug);
        blogContainer.appendChild(blogEntry);
    });
}
blogAppend(blogs);
