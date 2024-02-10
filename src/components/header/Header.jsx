
import styles from "./header.module.css";
function Header(){
    return(<>
    <div className={styles.outer}>
        <div className={styles.inner}>
        <p> your score is 90%. you were selected in 1st 3 times in this course</p>

        </div>
        
        
    </div>
    </>)
}
export default Header;