import { join } from "path";
import { getPostBySlug } from "util/getPostBySlug";
import fs from "fs";

const postsDirectory = join(process.cwd(), "_content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(fields: string[]) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slugs) => getPostBySlug(slugs, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
