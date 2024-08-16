import { Fragment } from "react";
import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container flex justify-center item-center svh-full" style={{ "--min-height": "64px"}}>
        <h1 className={styles.h1}>Home Page</h1>
      </main>
    </Fragment>
  );
}

export default App;
