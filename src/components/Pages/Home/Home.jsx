import Banner from "../../UI/Banner/Banner";
import Hero from "../../UI/Hero/Hero";
import Video from "../../../assets/videos/dance-17352.mp4";
import MainContent from "../../UI/MainContent/MainContent";
import InfoCard from "../../UI/InfoCard/InfoCard";
import InfoCardItem from "../../UI/InfoCard/InfoCardItem";
import benefits from "../../UI/InfoCard/InfoCardData";
import InfoAccountCard from "../../UI/InfoAccountCard/InfoAccountCard";
import GridView from "../../UI/GridView/GridView";
import gridImages from "../../UI/GridView/SponsorData";
import Contact from "../../UI/Contact/Contact";
import Footer from "../../UI/Footer/Footer";

const Home = () => {
    return (
        <>
            <Banner title="--- TÄVLING ---" text="Nu lottar vi ut två gratisbiljetter till nästa socialdans på Huskvarna Folkets Park!" />
            <Hero title="Sveriges största plattform inom socialdans" src={Video} alt="people dancing" />
            <MainContent>
                <InfoCard title="Fördelar med socialdans">
                    {benefits.map((item, index) => (
                        <InfoCardItem key={index} title={item.title} content={item.content} />
                    ))}
                </InfoCard>
                <InfoAccountCard header="För dig som besökare" background="primary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos perspiciatis iure inventore sequi autem vero ullam nostrum asperiores, impedit fugiat quis rerum magnam a ad aut
                    veritatis eum enim maxime!
                </InfoAccountCard>
                <InfoAccountCard header="För dig som arrangör eller dansband" background="secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos perspiciatis iure inventore sequi autem vero ullam nostrum asperiores, impedit fugiat quis rerum magnam a ad aut
                    veritatis eum enim maxime!
                </InfoAccountCard>
                <GridView title="Sponsorer">
                    {gridImages.map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt}></img>
                    ))}
                </GridView>
                <Contact title="Vill du också synas på Socialdansa?" subTitle="Klicka på Samarbeta!" buttonStyle="btn-primary-color" />
            </MainContent>
            <Footer name="Socialdansa" />
        </>
    );
};

export default Home;
