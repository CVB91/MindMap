import classes from './posts-list.module.css'
import PostItem from './post-item';


function PostsList(props) {
  const { posts } = props;
  console.log(posts)
  return (
    <ul className={classes.flex}>
      {/* {posts.map(post => <PostItem key={post.slug} post={post}/>)} */}
      {posts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
    </ul>
  )
}

export default PostsList;