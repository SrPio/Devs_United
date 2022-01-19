import React from "react";
import styles from "./Register.module.css";

function Register({isSelectedColor, setIsSelectedColor}) {


  return (
    <div className={styles.register}>
      <div className={styles.container_left}>
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className={styles.container_right}>
        <h1 className={styles.principal_title}>WELCOME <span>NAME!</span></h1>
        <input type="" placeholder="Type your username" />
        <h1 className={styles.subtitle}>
        Select your favorite color
        </h1>
        <div className={styles.colors}>
            <button className={`${isSelectedColor === "pink" ? styles.colorSelectedBorder : ""} ${styles.color_1}`} onClick={() => {setIsSelectedColor("pink")}}></button>
            <button className={`${isSelectedColor === "orange" ? styles.colorSelectedBorder : ""} ${styles.color_2}`} onClick={() => {setIsSelectedColor("orange")}} ></button>
            <button className={`${isSelectedColor === "yellow" ? styles.colorSelectedBorder : ""} ${styles.color_3}`} onClick={() => {setIsSelectedColor("yellow")}}></button>
            <button className={`${isSelectedColor === "green" ? styles.colorSelectedBorder : ""} ${styles.color_4}`} onClick={() => {setIsSelectedColor("green")}}></button>
            <button className={`${isSelectedColor === "blue" ? styles.colorSelectedBorder : ""} ${styles.color_5}`} onClick={() => {setIsSelectedColor("blue")}}></button>
            <button className={`${isSelectedColor === "purple" ? styles.colorSelectedBorder : ""} ${styles.color_6}`} onClick={() => {setIsSelectedColor("purple")}}></button>
        </div>
        <button className={styles.btn_next}>CONTINUE</button>
        <h1 className={styles.copyright}>
          © 2020 Devs_United - <span>BETA</span>
        </h1>
      </div>
    </div>
  );
}

export default Register;
