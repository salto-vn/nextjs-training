import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button(props) {
  const { primary } = props;
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
  });

  return (
    <>
      <button className={classes}>Click Me!</button>
    </>
  );
}
