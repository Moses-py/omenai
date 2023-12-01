export const form_data = [
  {
    label: "Title",
    description: "What is the title of your post?",
    placeholder: "Name the title of your post",
    type: "text",
    name: "title",
    required: true,
  },
  {
    label: "Summary",
    description: "Summarize your post",
    placeholder: "Give a short summary",
    type: "text",
    name: "summary",
    required: true,
  },
  {
    label: "Slug",
    description:
      "Select a slug for this editorial post, such as post-1, post-2, etc.",

    placeholder: "Slug e.g post-1",
    type: "text",
    name: "slug",
    required: true,
  },
  {
    label: "Minutes read",
    description:
      "How long would it take an average reader to consume this article",

    placeholder: "e.g 5",
    type: "text",
    name: "minutes",
    required: true,
  },
  {
    label: "Cover image",
    description: "Got a nice image for your post?",
    placeholder: "Select an image",
    type: "file",
    name: "cover",
    required: false,
  },
];

export const blog_category = [
  "Technology",
  "Games",
  "Anime",
  "Sports",
  "Travel",
  "Wildlife",
  "Foods",
];

export const category_listing = [
  { name: "Technology", image: "tech" },
  { name: "Games", image: "games" },
  { name: "Anime", image: "anime" },
  { name: "Sports", image: "sports" },
  { name: "Travel", image: "travel" },
  { name: "Wildlife", image: "wildlife" },
  { name: "Foods", image: "foods" },
];
