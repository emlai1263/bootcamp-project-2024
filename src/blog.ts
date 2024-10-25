type Blog = {
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
      "Welcome to my first blog post :) Unfortuantely, midterms are about to hit :(",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F83949980537875068%2F&psig=AOvVaw0s9M7lWEeillpt46ShGKJI&ust=1729909239566000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiTi6O8qIkDFQAAAAAdAAAAABAE",
    imageAlt: "Pusheen the Cat crying",
    slug: "https://pusheen.com",
  },
  {
    title: "#2: more about me",
    date: "10-24-2024",
    description:
      "I'm a computer science student at Cal Poly SLO. I love cute characters and video games!",
    image:
      "C:UsersEmily LaiDocumentsCSHack4Impact\bootcamp-project-2024imagesCherrim.png",
    imageAlt: "A drawing Cherrim (my favorite Pokemon)",
    slug: "https://www.serebii.net/pokedex-swsh/cherrim/",
  },
];
