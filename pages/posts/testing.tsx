import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Testing.module.css";

export default function Testing() {
  return (
    <div className={styles.postContainer}>
      <h2>Testing React Applications</h2>
      <h3>A Newbies Guide</h3>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
