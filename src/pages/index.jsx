import React from 'react';

import helloMessage from '../lib/hello.txt';
import Header from '../components/Header';
import styles from '../assets/index.scss';
import Game from "../components/game";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1 className={styles.title}>Index</h1>
        <p>{helloMessage}</p>
          <Game/>
      </div>
    );
  }
}

