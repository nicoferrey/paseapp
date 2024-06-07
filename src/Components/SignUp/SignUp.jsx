import './SignUp.css';
import InputField from '../InputFields/InputField';
import imgPet1 from '../../images/pet-1.jpg';
import InputFieldUser from '../InputFields/InputFieldUser';
import InputFieldPetsitter from '../InputFields/InputFieldPetsitter';

const SignUp = () => {
    return ( 
        <>
          <div className="container-form">
            <div className="form-box">
              <div className="row-form">
                <div className="column-form">
                  <div className="header-form">
                    <div className="underline-form"></div>
                    <div className="text-form">SIGN UP</div>
                  </div>
                  <div className="content-form">
                    <img  src={imgPet1} alt="Mascota"/>
                    <p>Registrate acá para acceder a los mejores paseadores al alcance de tu mano</p>
                    <div className="underline-form-2"></div>
                  </div>
                </div>
                <div className="column-form">
                  <InputField />
                  {/*<InputFieldUser /> */}
                  {/*<InputFieldPetsitter /> */}
                  

                </div>
              </div>
            </div>
            
          </div>


        </>
     );
}
 
export default SignUp;