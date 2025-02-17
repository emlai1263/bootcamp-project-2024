import mongoose, { Schema } from "mongoose";

// Define the IComment type
export type IComment = {
    _id: string;
    user: string;
    comment: string;
    time: Date;
};

// typescript type (can also be an interface)
type Blog = {
	title: string;
	slug: string; 
	date: Date;
	description: string; // for preview
	content: string; // text content for individual blog page NOT USED
	image: string; // url for string in public
	imageAlt: string; // alt for image
	comments: IComment[]; // array for comments NOT USED
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
	imageAlt: { type: String, required: true },
    content: { type: String, required: true }, // NOT USED
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;