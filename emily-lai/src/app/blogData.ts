// blog object type
export type Blog = {
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
      "Welcome to my first blog post :) Unfortunately, midterms are about to hit :(",
    //image: "https://c-ssl.dtstatic.com/uploads/blog/202209/24/20220924153611_fdccc.thumb.1000_0.jpg",
    image: "https://media.tenor.com/QncawSYoPCsAAAAj/maltese.gif",
    imageAlt: "Maltese working at a desk",
    slug: "hello-world",
  },
  {
    title: "#2: more about me",
    date: "10-24-2024",
    description:
      "I'm a computer science student at Cal Poly SLO. I love cute characters and video games!",
    image: "/Cherrim.png",
    imageAlt: "A drawing Cherrim (my favorite Pokemon)",
    slug: "more-about-me",
  },
  {
    title: "#3: Happy holidays",
    date: "12-22-2024",
    description:
      "It's been a while ^^ Passed my operating systems class and now I'm on break >:D",
    image:
      "https://i.pinimg.com/736x/7f/e6/87/7fe6874cc37300e85a5de6f2089d6fdc.jpg",
    imageAlt: "Maltese in a santa hat with a wrapped gift",
    slug: "happy-holidays",
  },
];

export default blogs;
