import React, {useState} from 'react';
import axios from 'axios';
import phone from './images/phone.png';
import letter from './images/letter.png';
import loader from './images/loader.gif';
import {getBaseUrl} from './environment';

function Form() {

    const baseUrl = getBaseUrl();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        nameError: '',
        phoneError: '',
        emailError: '',
        messageError: ''
    })

    const [isSending, setIsSending] = useState(false);

    const isValid = () => {
        let nameError = '';
        let phoneError = '';
        let emailError = '';
        let messageError = ''

        if (formData.name.length < 1) {
            nameError = 'Įveskite vardą';
        }

        if (formData.phone.length < 1) {
            phoneError = 'Įveskite telefono numerį';
        }

        if (formData.email.length < 1 || !formData.email.includes('@')) {
            emailError = 'Įveskite tinkamą el. pašto adresą'
        }

        if (formData.message.length < 1) {
            messageError = 'Užpildykite žinutės laukelį'
        }

        if (nameError || phoneError || emailError || messageError) {
            setFormData({
                ...formData,
                nameError: nameError,
                phoneError: phoneError,
                emailError: emailError,
                messageError: messageError
            })
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid()) {
            return;
        }

        setIsSending(true);
        e.target.style.background = 'grey';
        e.target.style.cursor = 'wait';

        axios.post(`${baseUrl}/api/forma`, formData)
        .then(res => {
            setIsSending(false);
            
            const message = document.querySelector('.msg-success');
            message.style.display = 'block';
            e.target.style.background = '#042939';
            e.target.style.cursor = 'pointer';

            setFormData({
                name: '',
                phone: '',
                email: '', 
                message: '', 
                nameError: '', 
                phoneError: '', 
                emailError: '', 
                messageError: ''
            });
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
                            <strong>EL. PAŠTO<br /> ADRESAS</strong><br />
                            siaurespuslapiai@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div class="form-block left">
                <div class="input-item">
                    <label>Vardas</label><br />
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value})} />
                    <div style={{'color': 'red'}}>{formData.nameError}</div>
                </div>
                <div class="input-item">
                    <label>Telefonas</label><br />
                    <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value})}/>
                    <div style={{'color': 'red'}}>{formData.phoneError}</div>
                </div>
                <div class="input-item">
                    <label>Jūsų el. pašto adresas</label><br />
                    <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value})}/>
                    <div style={{'color': 'red'}}>{formData.emailError}</div>
                </div>
            </div>
            <div class="form-block right">
                <div class="input-item">
                    <label>Žinutė</label><br />
                    <textarea id="message" value={formData.message} selectionDirection="forward" selectionStart="0" selectionEnd="0" onChange={(e) => setFormData({ ...formData, message: e.target.value})}></textarea>
                    <div style={{'color': 'red'}}>{formData.messageError}</div>
                </div>
                <div class="submit-button">
                    <input type="submit" disabled={isSending} onClick={handleSubmit} value="SIŲSTI" />
                    {isSending && 
                        <div style={{'text-align':'center'}}><span style={{'margin-right':'10px'}}>SIUNČIAMA</span><img alt="" src={loader} width="50px" /></div>
                    }
                </div>
            </div>
        </form>
    )
}

export default Form
