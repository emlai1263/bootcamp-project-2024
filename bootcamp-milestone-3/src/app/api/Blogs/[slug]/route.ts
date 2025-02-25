import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await BlogModel.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ message: 'Blog not found.' }, { status: 404 });
  }
}