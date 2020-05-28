import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import twitter_config from "../twitter-config";

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2 className="title">{twitter_config.bot.access_token_key}</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
