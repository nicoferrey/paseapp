import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL


const InputFieldUser = () => {
    // Validacion de campos obligatorios
    const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState([{ noPets: "", pets : ""}])

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { noPets: "", pets: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }


    return ( 
        <>
            <form onSubmit={handleSubmit}>
            <div className="container-form">
                <div className="login-box">
                    {/*<div className="login-header">
                        <header>Welcome</header>
                        <p>We are happy to have you back!</p>
                    </div> 
                    <div className="row-a">
                        <div className="column-a">
                            <div className="input-box">
                                <input type="submit" className="btn-usertype btn-usuario" value="SOY USUARIO" />
                            </div>
                        </div>
                        <div className="column-a">
                            <div className="input-box">
                                <input type="submit" className="btn-usertype btn-paseador" value="SOY PASEADOR" />
                            </div>
                        </div>
                    </div> */}
                    {formValues.map((element, index) => (
                        <div className="row-a" key={index}>
                            <div className="column-b left">
                            <div className="input-box">
                                <input 
                                type="number" 
                                className="input-field" 
                                name="noPets"  // Asegúrate de especificar el name para cada input
                                autoComplete="off" 
                                value={element.noPets || ""}
                                onChange={(e) => handleChange(index, e)}  // Pasar el índice y el evento
                                />
                                <label htmlFor="noPets">Cant</label>
                            </div>
                            </div>
                            <div className="column-b middle">
                            <div className="input-box">
                                <select 
                                type="text" 
                                className="input-field" 
                                name="pets"  // Asegúrate de especificar el name para cada input
                                autoComplete="off" 
                                value={element.pets || ""}
                                onChange={(e) => handleChange(index, e)}  // Pasar el índice y el evento
                                >
                                    {/*<label htmlFor="pets">Mascota</label>*/}
                                    <option value="">Mascota</option>
                                    <option value="perro">Perro</option>
                                    <option value="gato">Gato</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            </div>
                            {
                            index ? 
                            
                                <button type="button"  className="button remove column-b right" onClick={() => removeFormFields(index)}><FontAwesomeIcon icon={faTrashCan} /></button> 
                            :  <button className="button add column-b right" type="button" onClick={() => addFormFields()}><FontAwesomeIcon icon={faPlus} /></button>
                            }
                        </div>
                    ))}
                    {/*<div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div> */}
                    <div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div>
                    <div className="login-end">
                        <div className="sign-up">
                            <p>Ya tenes cuenta? <a href="#">Accede aca</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            
        </>
     );
}
 
export default InputFieldUser;