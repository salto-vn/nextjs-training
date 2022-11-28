import styles from "./Paragraph.module.css";

export default function Paragraph() {
  return <h1 className={`${styles.paragraph} ${styles.active}`}>Paragraph</h1>;
}
