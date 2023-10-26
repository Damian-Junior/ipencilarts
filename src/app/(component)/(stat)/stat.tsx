import Image from "next/image";
import styles from "./stats.module.css";

const statsObj = [
  {
    icon: "/nothing",
    title: "Social Stats",
    text_1: "Clicks",
    text_2: "Signups",
    text_3: "Posts",
  },
  {
    icon: "/nothing",
    title: "Play Stats",
    text_1: "Apps",
    text_2: "Surveys",
    text_3: "Others",
  },
];
const Stats = () => {
  return (
    <div className={styles.stats_wrapper}>
      {statsObj.map(({ icon, title, text_1, text_2, text_3 }: any, index) => {
        return (
          <div
            className={styles.stats_container}
            style={{ marginRight: index == 0 ? 40 : 0 }}
          >
            <div>
              <Image src={icon} alt="icon" width={100} height={100} />
              <span
                style={{ color: "#444555", fontSize: 18, fontWeight: "bolder" }}
              >
                {title}
              </span>
            </div>
            <div className={styles.text_div}>
              <div>{text_1}</div>
              <div>{text_2}</div>
              <div>{text_3}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Stats;
