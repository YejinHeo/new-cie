import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // "2026-01-09" 같은 문자열 가정
  tags?: string[];
  category?: string;
};

export type PostData = PostMeta & {
  contentHtml: string;
  contentMarkdown: string;
};

const postsDirectory = path.join(process.cwd(), "Gallery");

export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostMeta[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const data = matterResult.data as Partial<Omit<PostMeta, "slug">>;

    return {
      slug,
      title: data.title ?? slug,          // title 없으면 slug로 대체
      date: data.date ?? "1970-01-01",     // date 없으면 기본값
      tags: data.tags,
      category: data.category,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  const data = matterResult.data as Partial<Omit<PostMeta, "slug">>;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "1970-01-01",
    tags: data.tags,
    category: data.category,
    contentHtml,
    contentMarkdown: matterResult.content,
  };
}

export function getAllPostSlugs(): { params: { slug: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, "") },
  }));
}

export function postExists(slug: string): boolean {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  return fs.existsSync(fullPath);
}

export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.tags && post.tags.includes(tag));
}

export function getPostsByCategory(category: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.category === category);
}
