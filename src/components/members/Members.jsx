import styles from "./members.module.css";

function Members() {
    const memb = [
        {
            member_name: "apoorva",
            email_id:"appu@gmail.com",
          role: "admin",
        },
    
        {
            member_name: "anish",
            email_id:"appi@gmail.com",
          role: "dean",
        },
    
        {
            member_name: "mohnish",
            email_id:"pappu@gmail.com",
          role: "admin",
        },];

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.one}>
          <div className={styles.heading}>
            <p>Members</p>
          </div>

          <div>
            <button onClick={() => {}}></button>
          </div>
          <div>
            <button onClick={() => {}}></button>
          </div>
        </div>

        <div className={styles.text}>
          <p>ONLY REGISTERED CANDIDATES CAN BE ADDED TO YOUR ORGANIZATION</p>
        </div>
        <div className={styles.table}>
          <div>
            <p>member name</p>
          </div>

          <div>
            <p>email id</p>
          </div>

          <div>
            <p>role</p>
          </div>
        </div>
      </div>

      {
      memb.map((values,index) => {
          return (
            <>
           <div className={styles.four} key={index}>

           <p>{values. member_name}</p>
               <p>{values.email_id}</p>
              <p>{values.role}</p>


           </div>
              
              
          


               </>
          );
                
      })} 
      
                

    </>
  );

}
export default Members;





              
              
                