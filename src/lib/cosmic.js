
import { createBucketClient } from '@cosmicjs/sdk'

//Bucket aanmaken
const cosmic = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY
})


// Data ophalen
export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at,url,beschrijving')
  return data.objects
}


