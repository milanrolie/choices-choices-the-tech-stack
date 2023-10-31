import Cosmic from "cosmicjs";
const api = Cosmic();

const bucket = api.bucket({
  slug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: import.meta.env.PUBLIC_COSMIC_READ_KEY,
});

export async function getAllPosts() {
    const data = await bucket.objects
      .find({
        type: "posts",
      })
      .props("title,slug,content,metadata")
    return data.objects;
  }