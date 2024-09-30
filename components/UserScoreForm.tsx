import React from "react";

import styles from "@/styles/UserScoreForm.module.scss";

export default function UserScoreForm() {
  return (
    <div className={styles.user_score_form}>
      <p className={styles.user_rating}>9.4</p>
      <div className={styles.vr}></div>
      <hr />
      <div className={styles.form}>
        <h3>Как тебе сериал?</h3>
        <p>Оценка улучшит твои рекомендации</p>
        <div className={styles.numbers_container}>
          {(Array.from({length: 10}, (_, i) => i + 1)).map((number, key) => (
            <button className={styles.number} key={key}>{number}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
