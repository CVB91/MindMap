import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  console.log(imagePath)

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          
        </div>
      </Link>
    </li>
  )
}

export default PostItem
