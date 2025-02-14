export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Hello World! My First Blog Post",
    date: "10-24-2024",
    description:
      "Welcome to my first blog post :) Unfortunately, midterms are about to hit :(",
    image: "/pusheen.png",
    imageAlt: "Pusheen the Cat",
    slug: "firstpost",
  },
  // {
  //   title: "#2: more about me",
  //   date: "10-24-2024",
  //   description:
  //     "I'm a computer science student at Cal Poly SLO. I love cute characters and video games!",
  //   image: "/Cherrim.png",
  //   imageAlt: "A drawing Cherrim (my favorite Pokemon)",
  //   slug: "about-me",
  // },
  {
    title: "#2: Happy new year!",
    date: "1-5-2024",
    description:
      "It's a bit late though haha. Even though it jasn't been too long since new years, Cal Poly's winter quarter is about to start :O",
    image: "/dance-maltese.png",
    imageAlt: "A dog dancing",
    slug: "happy-new-year",
  },
];

export default blogs;
