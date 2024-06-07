import React, { useState } from "react";
import { FaDog } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";
import "./ProductDetail.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import imgpaseador from "../../images/about-petsitter.png";
import Comment from "./Comment";
import { IoIosClose } from "react-icons/io";


const ProductDetail = () => {
    const [estado, setEstado] = useState("Inactivo"); // Puedes cambiar el estado para probar diferentes valores

    const getEstadoStyles = (estado) => {
        switch (estado) {
            case "Activo":
                return {
                    boxBorder: "1.5px solid #0FEC5C",
                    circleColor: "#0FEC5C",
                };
            case "Inactivo":
                return {
                    boxBorder: "1.5px solid #FE2400",
                    circleColor: "#FE2400",
                };
            case "Pendiente":
                return {
                    boxBorder: "1.5px solid orange",
                    circleColor: "orange",
                };
            default:
                return {
                    boxBorder: "1.5px solid gray",
                    circleColor: "gray",
                };
        }
    };

    const estadoStyles = getEstadoStyles(estado);

    const handleIconClick = () => {
        // Define la acción que deseas realizar al hacer clic en el icono
        console.log("Icono de cierre clicado");
    };


    return ( 
        <div className="product-container">
            <IoIosClose className="close-icon" onClick={handleIconClick} size={30}/>
            <div className="important-info">
            <main className="product-detail">
                <section className="pet-details">
                    <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
                    <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
                </section>
                <h2 className="product-title">Paseo extensivo de mascotas</h2>
                <div className="reviews">
                    <p>4.2</p>
                    <StarRating rating = {1.2}/>
                    <p>(433 resenas)</p>
                </div>
                <p className="product-description">
                DESCRIPCION del servicio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>

                <h3 className="product-subtitle">Caracteristicas servicio</h3>
                <div className="product-info-table">
                    <div className="row-b">
                        <div className="column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">caracteristica</p>
                                <p className="product-characteristic-text">caracteristica</p>
                            </div>
                        </div>
                        <div className="column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">caracteristica</p>
                                <p className="product-characteristic-text">caracteristica</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-b">
                        <div className="column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">caracteristica</p>
                                <p className="product-characteristic-text">caracteristica</p>
                            </div>
                        </div>
                        <div className="column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">caracteristica</p>
                                <p className="product-characteristic-text">caracteristica</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <aside className="product-action">
                <div className="product-state">
                    <p className="estado">Estado</p>
                    <div className="box-estado" style={{ border: estadoStyles.boxBorder }}>
                        <div className="circle" style={{ backgroundColor: estadoStyles.circleColor }}></div>
                        <p className="estado-text">{estado}</p>
                    </div>
                </div>
                <p className="precio">Precio</p>
                <p className="valor-precio">$10.000</p>
                <div className="product-petsitter">
                    <p className="petsitter">Servicio ofrecido por</p>
                    <p className="petsitter">USUARIO XXYY</p>

                </div>
                <PrimaryButton value={"Comprar"} onClick={""}/>
            </aside>
            </div>
            <section className="about-petsitter">
                <img src={ imgpaseador } alt="" />
                <div className="info-petsitter">
                    <h3 className="about">Acerca de PEPITO</h3>
                    <p className="about">DESCRIPCION del servicio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
            </section>
            <h3 className="product-subtitle">Caracteristicas servicio</h3>
            <Comment user={"NICO"} stars={4.2} text={"LOLOLO"}/>
            <Comment user={"NICOSSSS"} stars={4.2} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"}/>


        </div>
    );
}
 
export default ProductDetail;