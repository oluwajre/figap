import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GetInTouch.css';
import { Link } from 'react-router-dom';

const GetInTouch = ({ isFormComplete }) => {
    const [countdown, setCountdown] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
    });

    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(()=>{
        let timer;

        if (countdown > 0) {
            timer = setTimeout(()=> setCountdown(countdown - 1), 1000);
        }

        return ()=> clearTimeout(timer);
    }, [countdown]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: '',
            phone: '',
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setCountdown(60);
        // setStatus('loading');

        try {
            const response = await axios.post('https://trenova-form-backend.onrender.com/api/contact/send-message', formData);
            if (response.data.success) {
                setStatus('success');
                resetForm();
                setTimeout(() => setStatus(''), 6000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 6000);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 6000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="row getin-touch-form py-5 px-3 shadow-lg appear" onSubmit={handleSubmit}>
            <div className="col-12 mb-5 d-flex flex-column flex-sm-row justify-content-between align-items-sm-end align-items-start">
                <div className="display-6 fw-bold mb-3 mb-sm-0">
                    <span className="text-dark">.</span> Get in <span className="text-primary">Touch</span>
                </div>
                <div>
                    <Link to='/contact'>See Google Map</Link>
                </div>
            </div>
            <div className="form-floating col-12 col-md-6 mb-3">
                <input
                    type="text"
                    className="form-control border border-0 border-bottom"
                    id="floatingInputName"
                    placeholder="Tani Abereoje"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="floatingInputName" className="ms-2">Name</label>
            </div>
            {isFormComplete && (
                <>
                    <div className="form-floating col-12 col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control border border-0 border-bottom"
                            id="floatingInputSubject"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInputSubject" className="ms-2">Subject</label>
                    </div>
                    <div className="form-floating col-12 col-md-6 mb-3">
                        <input
                            type="phone"
                            className="form-control border border-0 border-bottom"
                            id="floatingInputPhone"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            minLength='11'
                        />
                        <label htmlFor="floatingInputPhone" className="ms-2">Phone</label>
                    </div>
                </>
            )}
            <div className="form-floating col-12 col-md-6 mb-3">
                <input
                    type="email"
                    className="form-control border border-0 border-bottom"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="floatingInputEmail" className="ms-2">Email address</label>
            </div>
            <div className="form-floating col-12 mb-3">
                <textarea
                    className="form-control border border-0 border-bottom"
                    placeholder="Leave a message here"
                    id="floatingTextareaMessage"
                    style={{ height: '100px' }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="floatingTextareaMessage" className="ms-2">Message</label>
            </div>

            <div className="col-12">
                {status === 'success' && (
                    <p className="mt-3 text-success" aria-live="polite">Your message was successfully sent, you'll be contacted soon.</p>
                )}

                {status === 'error' && (
                    <p className="mt-3 text-danger" aria-live="polite">Error sending message. Please try again.</p>
                )}
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary border border-primary border-2 py-3 px-2 mt-4 ms-2"
                style={{ maxWidth: '180px' }}
                disabled={isSubmitting}
            >
                {isSubmitting? (
                    <>
                        <span className="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
                        Please wait... ({countdown}s)
                    </>): (
                        <span>Send</span>
                    )}
            </button>
        </form>
    );
};

export default GetInTouch;
