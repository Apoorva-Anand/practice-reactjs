import styles from "./offers.module.css";

function Offers() {
  return (
    <>
      <div className={styles.main}>
        <h3>Challenges and Offers</h3>



<div className={styles.center}>
          <h5>QUIZ/ASSIGNMENT OF THE DAY</h5>
          <prev />
          <h5>
            QUIZ/Assignment Name
          </h5>
          <prev />
          <div className={styles.inner}>
          <div>
              <p>chapter Name/Description if given will be shown here</p>
            </div>
            
            <div>
              <h3>1K+</h3><prev />
              <h4>ATTEMPTED</h4>
            </div>
          </div>
            
          
        

        </div>



<div className={styles.outer}>

    <button onClick={()=>{}}>view all</button>

</div>

</div>

        
      
    </>
  );
}
export default Offers;
