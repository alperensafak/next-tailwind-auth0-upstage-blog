import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'

export default function PostPage({ post }) {
  const content = useHydrate(post)

  return (
    <article>
      <h1>{post.frontMatter.title}</h1>
      {post.frontMatter.excerpt ? <p>{post.frontMatter.excerpt}</p> : null}
      <hr />
      {content}
    </article>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
