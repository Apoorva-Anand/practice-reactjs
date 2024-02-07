import styles from "./cartcard.module.css";
import { useState,useEffect } from "react";

function Cart(props) {

    const[quantity,setQ]=useState(1);
    function handleSubtraction(){
        if(quantity>1){
            setQ(quantity-1)
        }
        else{
            alert("quantity cannot be lessor than 1");
        }

    }
    useEffect(()=>{
        if(quantity>1){
            
            localStorage.setItem(props.name,quantity)
        }
    },[quantity])


    useEffect(()=>{
        const data = localStorage.getItem(props.name)
        console.log("data",data)
        if (data){
            setQ(parseInt(data))
        }
    },[])

    console.log("props",props)
  return (
    <>
    <div className={styles.bc}>

    <div className={styles.design}>
        <div className={styles.cartflex}>
          <div className={styles.image}>
            <img
              src={props.image}
              style={{ width: "100%", height: "auto" }}
            ></img>
          </div>
          <div className={styles.content}>
            <p><b>{props.name}</b></p>

            <div  className={styles.middle}>
              <div >
                <p>${props.price}</p>
              </div>

              <div className={styles.shape}>
                <img
                  src="/human_icon.png"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            <p>Quantity:<b>{quantity}</b></p>
          </div>

          <div>
            <p>price total: <b>${props.price*quantity}</b></p>
          </div>

          


          

           <div className={styles.negative}> 
            
            <button className={styles.buttons} onClick={handleSubtraction}>-</button>
            
            
            <p>{quantity}</p>
            
            <button className={styles.buttons} onClick={()=>{setQ(quantity+1)}}>+</button>

        </div> 
        </div>
      </div>

    </div>
      
    </>
  );
}
export default Cart;
