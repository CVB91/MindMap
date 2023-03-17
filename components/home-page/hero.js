import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <h1>A Developer's Journey</h1>
      <p>
        I write about web development.
      </p>
    </section>
  )
}

export default Hero
