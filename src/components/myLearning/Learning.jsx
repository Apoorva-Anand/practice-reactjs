import styles from "./learning.module.css";
function Learning() {
  return (
    <>
      <div className={styles.outer}>
        <p>My Learnings</p>

        <div className={styles.middle}>
          <p>You haven't bought any courses yet</p>
          <p> The courses which you bought will be visible </p>

          <div className={styles.bottom}>
            <p>Explore Classes</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Learning;
