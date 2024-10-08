import React, { useState } from 'react'; // Solo una vez

const Hero = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formMessage, setFormMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
        const { name, email, message } = formData;

        // Validación simple
        if (name === '' || email === '' || message === '') {
            setFormMessage('Debe completar los campos');
            setMessageType('error');
        } else if (!validateEmail(email)) {
            setFormMessage('Debe ingresar un correo electrónico válido');
            setMessageType('error');
        } else {
            // Simular éxito de envío del formulario
            setFormMessage('Su mensaje ha sido enviado con éxito');
            setMessageType('success');
            setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
        }
    };

    // Función para validar el formato del email
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <main>
            <section className="hero">
                <div className="hero-left">
                    <div className="containerContent">
                        <button className="welcome-btn">Welcome to Businezz X</button>
                        <h1>Join us in growing <br />your <span className="underline">business</span>.</h1>
                        
                        <span className="separator"></span>
                        <p>Elevate your business with Businezz X, a <br /> professional webflow template.</p>
                        <button className="contact-btn">Contact us <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="form-container">
                        <button className="consultation-btn">Book your free consultation</button>
                        <h3>Get a free consultation</h3>
                        <form className="hero-form" id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="contact@email.com"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <textarea
                                placeholder="Please type your message here..."
                                id="message"
                                className="form-message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit" className="submit-btn-form">Get in touch</button>
                            
                        </form>
                        {formMessage && (
                                <p id="formMessage" className={`message ${messageType}`}>{formMessage}</p>
                            )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
