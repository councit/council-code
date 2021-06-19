import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.siteTitle}>Council Codes</h1>
      <Link href="/posts/testing">
        <a>
          <div className={styles.recentPostContainer}>
            <Image
              className={styles.recentPostImage}
              src="/test.jpg"
              alt="test image for title"
              width={400}
              height={200}
            />
            <div className={styles.recentPostSummaryContainer}>
              <h2>Testing React</h2>
              <p className={styles.fullWidthP}>
                A dive into testing best practises in React. Up until I wrote
                this article I had not written a single unit test in my career.
                This post will explain what are the critical elements to testing
                React applications. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Officiis earum quasi repellat consequatur
                itaque sapiente a saepe asperiores exercitationem numquam.
              </p>

              <p className={styles.fullWidthP}>
                A dive into testing best practises in React. Up until I wrote
                this article I had not written a single unit test in my career.
                This post will explain what are the critical elements to testing
                React applications. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Officiis earum quasi repellat consequatur
                itaque sapiente a saepe asperiores exercitationem numquam.
              </p>

              <ul>
                <li>Jest</li>
                <li>TestingLibrary-React</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.postCardsRow}>
        <div className={styles.postCard}>
          <Image src="/vercel.svg" alt="post image" width={250} height={250} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className={styles.postCard}>
          <Image src="/vercel.svg" alt="post image" width={250} height={250} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className={styles.postCard}>
          <Image src="/vercel.svg" alt="post image" width={250} height={250} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
