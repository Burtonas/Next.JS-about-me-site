import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/oskar.png'
          alt="Image showing Oskar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oskar</h1>
      <p>That's my project written using Next.js and React!</p>
    </section>
  );
}

export default Hero;
