import React from 'react';

class Contacts extends React.Component {

    constructor (props) {
        super(props) ;
        this.state = {
            contactData : [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Abet", phone: "010-0000-0001"},
            ]
        };
    }

    render () {
        return (
            <div>
                <h1> Contacts </h1>
                <ul>
                    {this.state.contactData.map((contact,i)=> {
                        return( 
                        <ContactInfo name = {contact.name}
                                     phone ={contact.phone}
                                     key={i}
                        />)
                    })}
                </ul>
            </div>
        );
    }
}

class ContactInfo extends React.Component {
    render() {
        return (
            <li> {this.props.name} {this.props.phone} </li>
        );
    }
}

export default Contacts;