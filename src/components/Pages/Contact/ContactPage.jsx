import { useEffect, useState } from "react";
import axios from "axios";

import ContactForm from "../../UI/Form/ContactForm";

const Contact = () => {
    const [messages, setMessages] = useState([]);
    const url = "http://localhost:5020/api/v1/messages";

    const onAddMessageHandler = async (e) => {
        e.preventDefault();
        let messageList = [];
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const messageText = e.target.message.value;

        const newMessage = { firstName: firstName, lastName: lastName, messageText: messageText };
        const { data } = await axios.post(url, newMessage);

        messageList = [...messages, data]; 
        setMessages(messageList); 
    };

    return <ContactForm onAddMessage={onAddMessageHandler} />;
};

export default Contact;
