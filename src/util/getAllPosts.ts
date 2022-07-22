import { join } from "path";
import { getPostBySlug } from "util/getPostBySlug";
import fs from "fs";

const postsDirectory = join(process.cwd(), "_content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export const getAllPosts = (fields: string[]) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slugs) => getPostBySlug(slugs, fields));
  return posts;
};