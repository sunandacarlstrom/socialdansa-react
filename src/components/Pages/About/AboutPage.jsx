import MainContent from "../../UI/MainContent/MainContent";
import InfoCard from "../../UI/InfoCard/InfoCard";
import Contact from "../../UI/Contact/Contact";

const About = () => {
    return (
        <MainContent>
            <InfoCard title="Om oss" surtitle="Varför vill man använda Socialdansa?">
                <li className="sub-title">
                    <h4>Sveriges största plattform inom socialdans</h4>
                    <p>En plattform som är byggd av en dansfantast och för alla som gillar att dansa bugg/fox till livemusik s.k. socialdanser runtom i Sverige.</p>
                </li>
                <li className="sub-title">
                    <h4>Flexibilitet</h4>
                    <p>
                        Socialdansa erbjuder en rad olika funktioner som kan anpassas efter dina behov. Du kan välja att använda en eller flera av dessa funktioner för att hitta din nästa socialdans.
                    </p>
                </li>
                <li className="sub-title">
                    <h4>Dynamiskt gränssnitt</h4>
                    <p>Inom kort kommer Socialdansa kunna erbjuda ett dynamiskt användargränssnitt efter dina favoritband och favoritplatser.</p>
                </li>
                <li className="sub-title">
                    <h4>Innovativ teknik</h4>
                    <p>
                        Socialdansa är en plattform som ständigt utvecklas och uppdateras. Detta innebär att du kan dra nytta av de senaste innovationerna och tekniska framstegen utan att behöva
                        hantera all teknik själv.
                    </p>
                </li>
            </InfoCard>
            <Contact title="Frågor?" subTitle="Skicka oss ett mejl!" buttonStyle="btn-primary-color" />
        </MainContent>
    );
};

export default About;
