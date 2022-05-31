import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />
      
      <h2>{post.frontmatter.title}</h2>

      <p>{post.frontmatter.excerpt}</p>
      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>

      
    </div>
  )
}