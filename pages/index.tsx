import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../components/login-form/login-form";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.siteTitle}>Council Code</h1>
      <div className={styles.recentPostContainer}>
        <Image
          className={styles.recentPostImage}
          src="/test.jpg"
          alt="test image for title"
          width={400}
          height={400}
        />
        <div className={styles.recentPostSummaryContainer}>
          <h2>Testing React</h2>
          <p className={styles.fullWidthP}>
            A dive into testing best practises in React. Up until I wrote this
            article I had not written a single unit test in my career. This post
            will explain what are the critical elements to testing React
            applications. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis earum quasi repellat consequatur itaque sapiente a
            saepe asperiores exercitationem numquam.
          </p>

          <p className={styles.fullWidthP}>
            A dive into testing best practises in React. Up until I wrote this
            article I had not written a single unit test in my career. This post
            will explain what are the critical elements to testing React
            applications. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis earum quasi repellat consequatur itaque sapiente a
            saepe asperiores exercitationem numquam.
          </p>

          <ul>
            <li>Jest</li>
            <li>TestingLibrary-React</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
      <main>
        <h3>Matchers</h3>
        <p>
          Matchers are how we can pair what our expected result is with our
          function we are testing. In the example:
        </p>
        <p>
          It is important to think about what expected result you want to test
          for. The matcher toBe, for example, provides an exact equality to
          compare the expect object and your matcher value. toBE uses Object.is.
          Other matchers can test for general equality such as toEqual. toEqual
          will check every key value pair of an object and test to see if your
          matcher value equals the value in the expect object.
        </p>
        <p>
          You can test the inverse of a matcher by using the .not syntax.
          example: expect( 2 + 2 ).not.toBe(6) passed
        </p>
        <p>
          toBe a good tester, you must understand the expect API. There are many
          matchers that handle an array of expected values. Situations like
          truthiness, numbers, strings, arrays and objects, exceptions, and many
          more. A full list of matcher methods and explanations can be found
          here.{" "}
        </p>
        <h3>Asynchronous Code</h3>
        <p>
          When writing tests for async functions, you must have the matcher
          return the data where the promise returns the data. Using ansyn await
          is a great option for this. Since we are awaiting for the promise to
          return the test will not finish until the data is returned.{" "}
        </p>
        <h3>Testing Library - React</h3>
        <p>
          Great, now we know the core of Jest and testing our functions. Given
          that many of the matchers we are using with Jest depend on the
          implementation details of the components (state management, class
          names ect) Imagine if we changed the implementation details of our
          components. Our tests would break, and we would have to rewrite them
          to work with our new feature/fix. That is where Testing Library
          (React) comes in. This library enables you to query our components as
          DOM nodes. Just as a user would access our components. Testing Library
          promotes to pointing to the DOM node to execute out tests. Our tests
          should be aiming at testing the functionality as a user would
          experience the application. This changes the way we think about
          writing tests from the previous examples. We only need to test the
          parts of our application that impacts the user. Read that last
          sentence again and let it sink in. "The more tests resemble the way
          your software is used, the more confidence they can give you".{" "}
        </p>
        <LoginForm />
      </main>
    </div>
  );
}
