import AllCourses from "../../components/allCourses/AllCourses";
import Learning from "../../components/myLearning/Learning";
import Offers from "../../components/offers/Offers";
import styles from "./course.module.css";
function Course() {
  const details = [
    {
      id: 1,
      image: "/heart.jpeg",
      name: "course name which can be long longer longest",
      price: 46,
      duration: "2 weeks",
    },
    {
      id: 2,
      image: "/heart.jpeg",
      name: "course name which can be long longer longest",
      price: 46,
      duration: "2 weeks",
    },
    {
      id: 3,
      image: "/heart.jpeg",
      name: "course name which can be long longer longest",
      price: 46,
      duration: "2 weeks",
    },
    {
      id: 4,
      image: "/heart.jpeg",
      name: "course name which can be long longer longest",
      price: 46,
      duration: "2 weeks",
    },
  ];
  return (
    <>
      <div className={styles.main}>
        
      <div className={styles.header}>
        <Learning></Learning>
        <Offers></Offers>
      </div>

      <div className={styles.middle}>All courses</div>
      <div className={styles.inner}>
        {details.map((values) => (
          <AllCourses
            image={values.image}
            name={values.name}
            price={values.price}
            duration={values.duration}
          />
        ))}
      </div>

      </div>
      
    </>
  );
}
export default Course;
