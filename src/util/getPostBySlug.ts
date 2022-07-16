import { join } from "path";
import { getMarkdownBySlug, PostMarkdown } from "util/getMarkdownBySlug";

const postsDirectory = join(process.cwd(), "_content");

export const getPostBySlug = (slug: string, fields: string[]) =>
  getMarkdownBySlug(postsDirectory, slug, fields) as PostMarkdown;
