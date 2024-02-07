import styles from "./roles.module.css";

function Roles() {
  const roles = [
    {
      roleName: "admin",
      id: 1,
    },

    {
      roleName: "member",
      id: 2,
    },

    {
      roleName: "leader",
      id: 3,
    },
    {
      roleName: "dean",
      id: 4,
    },
  ];
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.one}>
          <div className={styles.two}>
            <p> <b>Role</b>
                </p>
          </div>

          <div className={styles.three}>
            <button onClick={() => {}} />
            add role
          </div>
        </div>
       
       

        {roles.map((values,index) => {
          return (
            <>
              <div className={styles.four} key={index}>
                <p>{values.roleName}</p>
                <div className={styles.menu}>
                  <img
                    src="/threedot.svg"
                    style={{ height: "auto", width: "100%" }}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Roles;
