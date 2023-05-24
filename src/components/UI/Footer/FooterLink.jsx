const FooterLink = ({ href, text }) => {
    return (
        <span>
            <a href={href}>{text}</a>
        </span>
    );
};

export default FooterLink;
