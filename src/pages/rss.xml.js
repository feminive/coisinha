import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });
  
  return rss({
    title: 'MinimalBlog',
    description: 'A minimalist blog built with Astro',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      published: post.data.published,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}