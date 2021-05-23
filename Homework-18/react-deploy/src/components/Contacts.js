import React, {Component} from 'react';
import Contact from './Contact';
import './Contacts.css'

class Contacts extends Component {

    contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];

    state = {
        filteredContacts: this.contacts,
        search: ""
    }


    onSearch = (e) => {

        this.setState({search: e.target.value});

        let input = e.target.value.toLowerCase().replaceAll(/\s/g, '');
        let result = this.contacts.filter(contact => {
            let fullName = contact.firstName + contact.lastName;
            let fullNameReversed = contact.lastName + contact.firstName;
            return fullName.toLowerCase().includes(input) || fullNameReversed.toLowerCase().includes(input)
            }
        );
        this.setState({filteredContacts: result});
    }

    render() {
        return (
            <div className="Contacts-container">
                <input className="Contacts-input" value={this.state.search} onChange={this.onSearch}/>
                {this.state.filteredContacts.map((contact, index) =>
                    <Contact {...contact} key={index}/>)}
            </div>
        )
    }
}

export default Contacts;