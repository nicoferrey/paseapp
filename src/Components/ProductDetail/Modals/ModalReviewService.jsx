import React, { useState } from 'react';
import './Modals.css';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import PrimaryButton from '../../Buttons/PrimaryButton';
import AlternativeButton from '../../Buttons/AlternativeButton';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ModalReviewService = ({ isOpen, closeModal, handleSubmit }) => {
    const [rating, setRating] = useState(0)
    const [hoverValue, setHoverValue] = useState(0) // Estado para la puntuación de estrellas
    const [comment, setComment] = useState('');
    const stars = Array(5).fill(0);
    const colors = {
        orange: "#F2C265",
        grey: "a9a9a9"
    };

    const handleMouseOverStar = value => {
        setHoverValue(value);
    };
    
    const handleMouseLeaveStar = () => {
        setHoverValue(0); // Vuelve a mostrar el valor seleccionado (0 si no se seleccionó nada)
    };

    const handleClickStar = value => {
        setRating(value);
        setHoverValue(0); // Al hacer clic, fija la puntuación y resetea el valor de hover
    };

    const handleFormSubmit = () => {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        const formData = {
            rating: rating, // Incluir la puntuación en los datos a enviar
            comment: comment  // Incluir el comentario en los datos a enviar
        };
        handleSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Solicitud de Servicio"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modal-overlay">
                <div className="modal-content">
                    <IoIosClose className="close-icon" onClick={closeModal} size={24}/>
                    <h2 className="modal-title">NOMBRE SERVICIO</h2>
                    <div className="modal-body">
                        <div className="modal-info">
                            <div className="modal-row">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">¿Cómo estuvo el servicio?</p>
                                    <div className="star-rating">
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={24}
                                                color={(hoverValue > index || rating > index) ? colors.orange : colors.grey}
                                                onMouseOver={() => handleMouseOverStar(index + 1)}
                                                onMouseLeave={handleMouseLeaveStar}
                                                onClick={() => handleClickStar(index + 1)}
                                            />
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-row">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Comentarios</p>
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Deja aca un comentario sobre el servicio."
                                        className="product-edit-fields"
                                        maxLength={1000}
                                        rows={6}
                                    />
                                </div>
                            </div>   
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <AlternativeButton value={"CANCELAR"} onClick={closeModal} />
                        <PrimaryButton value={"GUARDAR"} onClick={handleFormSubmit} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalReviewService;
