import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Admin.module.css";

const AdminPage = () => {
    const [messages, setMessages] = useState([]);
    const url = "http://localhost:5020/api/v1/messages";

    useEffect(() => {
        const loadMessages = async () => {
            const { data } = await axios.get(url);
            setMessages(data);
        };

        loadMessages();
    }, []);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); 
    const currentDate = new Date().getDate();

    return (
        <article className={styles.content}>
            <h1>Inkorg kontaktformulär</h1>
            {messages.map((message) => (
                <section className={`${styles["info-card"]} bg-primary bg-info`} key={message.id}>
                    <h4 className={styles["sub-title"]}>
                        {message.firstName} {message.lastName} {currentYear}/{currentMonth}/{currentDate}
                    </h4>
                    <p>{message.messageText}</p>
                </section>
            ))}
        </article>
    );
};

export default AdminPage;
