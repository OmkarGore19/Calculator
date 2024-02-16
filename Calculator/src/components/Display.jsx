import styles from "./Display.module.css";

export default function Display({ calVal }) {
  return (
    <input className={styles.display} type="text" value={calVal} readOnly />
  );
}
