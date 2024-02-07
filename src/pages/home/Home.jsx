import styles from "./home.module.css";
import Cart from "../../components/cartcard/Cartcard";
function Home() {
  const data = [
    {
        id:1,
      name: "t shirt",
      price: 1200,
      quantity: 1,
      image: "/tshirt.jpeg",
    },

    {
        id:2,
      name: "kurthi",
      price: 1000,
      quantity: 1,
      image: "/kurthi.jpeg",
    },

    {
        id:3,
      name: "pant",
      price: 1500,
      quantity: 1,
      image: "/pant.jpeg",
    },
  ];

  return (
    <>
      <h1 className={styles.header}>welcome to home page</h1>
      <a href="/about"> ABOUT</a> <br></br>
      <a href="/contact">CONTACT</a><br></br>
      <a href="/assignment">Course</a>
     
      {
        data.map((values)=>(
            <Cart name={values.name} image={values.image} price={values.price} quantity={values.quantity}></Cart>
        
        ))
      }
      
    </>
  );
}
export default Home;
