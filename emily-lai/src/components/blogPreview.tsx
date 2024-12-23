import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";
import Link from "next/link";
import type { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      {/* <Link href={`/blog/${props.slug}`}> */}
      <h3 className={style["blog-title"]}>{props.title}</h3>
      <div className={style["blog-img"]}>
        {/* <Image src={props.image} alt={props.title} width={200} height={200} /> */}
        <Image
          src={props.image}
          alt={props.title}
          width={200}
          height={200}
          unoptimized
        />
      </div>
      <p className={style["blog-description"]}>{props.description}</p>
      <p className={style["blog-description"]}>
        Posted on: {new Date(props.date).toLocaleDateString()}
      </p>
      {/* </Link> */}
    </div>
  );
}
