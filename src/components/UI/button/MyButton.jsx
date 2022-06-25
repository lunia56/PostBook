import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {

    return (
        <button className={classes.myBtn}>
            {/* Добавили стиль как свойство объекта. это нужно для автоматческой генерации имен классов*/}
            {/* react не знает в какое место внутри компонента вставлять текст(любой)- по этому необх использовать {children} */}
            {children}
        </button>
    );
}

export default MyButton;