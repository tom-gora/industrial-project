import { type CollectionEntry } from "astro:content";

export function getAllTags(posts: CollectionEntry<"blog">[]) {
  const tags: string[] = [...new Set(posts.flatMap((post) => post.tags || []).filter(Boolean))];
  return tags
    .map((tag) => {
      return {
        name: tag,
        id: tag
      };
    })
    .filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === pos;
    });
}

export function getPostsByTag(posts: CollectionEntry<"blog">[], tagId: string) {
  const filteredPosts: CollectionEntry<"blog">[] = posts.filter((post) => (post.tags || []).map((tag) => slugify(tag)).includes(tagId));
  return filteredPosts;
}
