import classes from './all-posts.module.css'
import PostsList from '../posts/posts-list'

function AllPosts(props) {


  return (
    <section className={classes.posts}>
      <PostsList posts={props.posts} />
    </section>
  )
}

export default AllPosts
