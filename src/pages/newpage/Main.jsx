import styles from "./main.module.css";
import Details from "../../components/organizationName/Details";
import Create from "../../components/create/Create";
import Roles from "../../components/roles/Roles";
import Members from "../../components/members/Members";

function Main(){
    return(<>
    <div className={styles.outer}>
        <h3>Organization</h3>

        <div className={styles.one}>

        <Details> </Details>
        <Create></Create>

        </div>

        <div className={styles.two}>
        <Roles></Roles>
        <hr/>
        </div>
        <div className={styles.two}>
        <Members></Members>
        </div>

        

        
    </div>

    
    </>)
}
export default Main;