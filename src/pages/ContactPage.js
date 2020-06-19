import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        name: "",
        surname: "",
        text: "",
        isEmpty: true,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
            isEmpty: true
        })
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                [e.target.name]: e.target.value,
                isEmpty: false
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                isEmpty: true
            })
        }
    }



    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <input type="text" name="name" onChange={this.handleChange} placeholder='Twoje imię' />
                    <input type="text" name="surname" onChange={this.handleChange} placeholder='Twoje nazwisko' />
                    <textarea name="text" onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={!this.state.isEmpty}
                    message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę"
                />
            </div>

        );
    }
}

export default ContactPage;