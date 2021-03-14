import React from "react";

import styles from "../styles/Home.module.css";

interface Props {
  handleReset: () => void;
}

const Heading = ({ handleReset }: Props): JSX.Element => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Graph Visualiser</h1>
      <p className={styles.description}>
        Simply click on screen to add a node!
      </p>
      <p className={styles.reset} onClick={handleReset}>
        Clear screen
      </p>
    </div>
  );
};

export default Heading;
