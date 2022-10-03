import { useState } from 'react'
import style from '../Contact/Contact.module.scss'


function Contact () {

    const [nameLabel, setNameLabel] = useState(false)
    const [emailLabel, setEmailLabel] = useState(false)
    const [phoneLabel, setPhoneLabel] = useState(false)
    const [textLabel, setTextLabel] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')


    function onSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(name, email, phone, text)
        setName('');
        setEmail('');
        setPhone('')
        setText('')
    }

    return (
        <div className={style.container}>
            <div className={style.textWrapper}>
                <h1 className={style.title}>Contact Us.</h1>
                <h3 className={style.description}>Send us a message!</h3>
            </div>
            <div className={style.formWrapper}> 
            <form className={style.inputForm} 
                onSubmit={event => onSubmit(event)}
            >
                <div className={style.formContentWrapper}>
                    <label className={nameLabel ? style.show: style.hide}>Name</label>
                    <input
                        className={style.input}
                        type={'text'} 
                        name={'name'} 
                        placeholder={'Name'}
                        value={name}
                        onFocus={() => setNameLabel(true)}
                        onBlur={() => setNameLabel(false)}
                        onChange={event => setName(event.target.value)}
                        required
                    />
                    <label className={emailLabel ? style.show: style.hide}>E-mail</label>
                    <input
                        className={style.input}
                        type={'email'} 
                        name={'email'}
                        placeholder={'Email'}
                        value={email}
                        onFocus={() => setEmailLabel(true)}
                        onBlur={() => setEmailLabel(false)}
                        onChange={event => setEmail(event.target.value)}
                        required 
                    />
                    <label className={phoneLabel ? style.show: style.hide}>Phone</label>
                    <input
                        className={style.input}
                        type={'tel'}
                        name={'phone'} 
                        placeholder={'Phone'}
                        value={phone}
                        onFocus={() => setPhoneLabel(true)}
                        onBlur={() => setPhoneLabel(false)}
                        onChange={event => setPhone(event.target.value)}
                    />
                    <label className={textLabel ? style.show: style.hide}>Message</label>
                    <textarea 
                        className={style.input} 
                        rows={10} 
                        cols={30} 
                        name={'message'} 
                        placeholder={'Write your message'}
                        value={text}
                        onFocus={() => setTextLabel(true)}
                        onBlur={() => setTextLabel(false)}
                        onChange={event => setText(event.target.value)}
                    >
                    </textarea>
                </div>
                <button className={style.submitButton}type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Contact