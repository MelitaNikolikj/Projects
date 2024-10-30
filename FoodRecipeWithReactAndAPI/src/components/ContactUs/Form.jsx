import React from "react";
import classes from './Form.module.css'


function Form(){

    return(
        <form className={classes.container}>
            <div className={classes.name_surname}>
                <div className={classes.name}>
                    <label>Name:</label>
                    <input type="text" name="name" id="name" className={classes.input1} placeholder="Enter your name here"></input>
                </div>
                <div className={classes.surname}>
                    <label>Surname:</label>
                    <input type="text" name="surname" id="surname" className={classes.input1} placeholder="Enter your surname here"/>
                </div>
            </div>
            <div className={classes.email}>
                <label>Your email:</label>
                <input type="email" name="email" id="email" className={classes.input1} placeholder="Enter your email here" />
            </div>
            <div className={classes.message}>
                <label>Enter your message here:</label>
                <textarea id="message" name="message" className={classes.input1}rows='5' cols='70'></textarea>
            </div>
            <button className={classes.btn_submit}>Submit</button>
            
        </form>
    )
}

export default Form;