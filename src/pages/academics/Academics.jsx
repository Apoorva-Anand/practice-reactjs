import styles from "./academics.module.css";
import Header from "../../components/header/Header";
import Chapter1 from "../../components/chapter1/Chapter1";
function Academics(){
    return(<>

    <div className={styles.main}>
        <div className={styles.header}>
        <Header ></Header>
        </div>
        <div className={styles.chapter1}>
        <Chapter1></Chapter1>
        </div>
        
    </div>
    </>)
    
}
export default Academics;