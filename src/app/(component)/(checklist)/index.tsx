import styles from "./checklist.module.css";

const CheckList = () => {
  return (
    <div className={styles.checklistWrapper}>
      <h2>Quick Start Checklist</h2>
      <div style={{ marginBottom: 20 }}>
        Copy and share links below to get clicks and invites
      </div>
      <ol style={{ marginLeft: 30, lineHeight: 2 }}>
        <li>Copy and begin sharing your link</li>
        <li>Get your first click</li>
        <li>Get your first Invite</li>
        <li>
          <span>Get your first play task</span>{" "}
          <button className={styles.startButton}>Start</button>
        </li>
        <li>
          <span>Screenshot a share photo</span>{" "}
          <button className={styles.startButton}>Start</button>
        </li>
        <li>
          <span>Submit a social media post</span>{" "}
          <button className={styles.startButton}>Start</button>
        </li>
        <li>
          <span>Get your first cashout</span>{" "}
          <button className={styles.startButton}>Start</button>
        </li>
      </ol>
    </div>
  );
};
export default CheckList;
