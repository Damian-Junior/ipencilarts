import styles from "./bonusRule.module.css";
const BonusRule = () => {
  5;

  return (
    <div className={styles.bonusRule_wrapper}>
      <div className={styles.purpleDiv}>
        <div className={styles.divText}>$100 Welcome Bonus</div>
        <div style={{ marginTop: 20 }} className={styles.divText}>
          RESERVED FOR @EMMYDOLLAR983ed 😀
        </div>
        <div className={styles.nestWhiteDiv}>
          Click to Open <br />
          (ends in 24 hours)
        </div>
      </div>
      <div className={styles.rulesDiv}>
        <div className={styles.rulesText}>Our Rules</div>
        <div style={{ color: "#9A9CBB", fontSize: 25 }}>
          If anyone is caught cheating their clicks, signups, or tasks, their
          cashouts will be cancelled and payments returned.{" "}
          <span style={{ color: "blue" }}>Learn more</span>
        </div>
      </div>
    </div>
  );
};
export default BonusRule;
