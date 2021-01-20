import React, {useState} from 'react';
import axios from 'axios';

import phone from './images/phone.png';
import letter from './images/letter.png';

function Form() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        e.target.style.background = 'grey';
        e.target.style.cursor = 'wait';

        axios.post('https://northweb-backend.herokuapp.com/api/forma', formData)
        .then(res => {
            setIsSending(false);
            
            const message = document.querySelector('.msg-success');
            message.style.display = 'block';
            e.target.style.background = '#042939';
            e.target.style.cursor = 'pointer';

            setFormData({name: '', phone: '', email: '', message: ''});
        })
    }

    return (
        <form>
            <div class="info-box">
                <div class="info-box__item">
                    <img alt="" src={phone} width="20px" />
                    <div class="text">
                        <p>
                            <strong>TELEFONO NUMERIS</strong><br />
                            +37063631839
                        </p>
                    </div>
                </div>
                <div class="info-box__item">
                    <img alt="" src={letter} width="20px" />
                    <div class="text">
                        <p>
                            <strong>EL. PAŠTO ADRESAS</strong><br />
                            info@northweb.lt
                        </p>
                    </div>
                </div>
            </div>
            <div class="form-block left">
                <div class="input-item">
                    <label>Vardas</label><br />
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value})} />
                </div>
                <div class="input-item">
                    <label>Telefonas</label><br />
                    <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value})}/>
                </div>
                <div class="input-item">
                    <label>Jūsų el. pašto adresas</label><br />
                    <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value})}/>
                </div>
            </div>
            <div class="form-block right">
                <div class="input-item">
                    <label>Žinutė</label><br />
                    <textarea id="message" value={formData.message} selectionDirection="forward" selectionStart="0" selectionEnd="0" onChange={(e) => setFormData({ ...formData, message: e.target.value})}></textarea>
                </div>
                <div class="submit-button">
                    <input type="submit" disabled={isSending} onClick={handleSubmit} value="SIŲSTI"/>
                </div>
            </div>
        </form>
    )
}

export default Form
