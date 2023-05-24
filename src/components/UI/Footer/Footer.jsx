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
                <FooterLink href="om-oss.html" text="Om oss" />
            </footer>
        </>
    );
};

export default Footer;
