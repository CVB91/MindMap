import { Fragment } from 'react'
import Head from 'next/head'
import AllPosts from '../components/home-page/all-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>MindMap</title>
        <meta name='description' content='I blog about web development' />
      </Head>
      <Hero />
      <AllPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
