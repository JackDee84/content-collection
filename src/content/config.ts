// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';



// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: defineCollection({
    type: 'content', 
    schema: z.object({
      title: z.string().max(60, {
      message: "Maximal 60 Zeichen"}),
      description: z.string().max(160, {
      message: "Maximal 160 Zeichen"}),
      date: z.date(),
      author: reference("team"),
      relatedPosts: z.array(reference("posts")).optional(), 
    }),
  }),
    team: defineCollection({
      type: "data",
      schema: ({image}) => 
        z.object({
          name: z.string(),
          bio: z.string(),
          email: z.string(),
          role: z.enum(["Software", "Design", "Marketing"]),
          headshot: image(),
      })
    })
  };



