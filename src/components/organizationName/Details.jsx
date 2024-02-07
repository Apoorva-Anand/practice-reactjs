import styles from "./details.module.css";
function Details(){
    return(<>
<div className={styles.main}>
<div className={styles.one}> 


        <div className ={styles.two}>
            <p>
        Organization Name</p>

            <p>17th dec,2023</p>
        </div>

        <div className={styles.three}>
            
            <img src="/world.jpg" style={{ width: "100%", height: "auto" }} />
        
        </div>

        
    </div>
    <hr />

    <div className={styles.font}>
         view
    </div>
</div>
    

    
    
    </>)
}
export default Details;