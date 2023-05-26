import FooterLink from "./FooterLink";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <>
            <hr />
            <footer>
                <FooterLink href="/index.html" text="Socialdansa" />
                <Copyright />
                {/* INSERT FONT AWESOME ICONS */}
                <FooterLink href="/contact" text="Kontakta oss" />
            </footer>
        </>
    );
};

export default Footer;
