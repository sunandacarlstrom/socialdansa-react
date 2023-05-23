import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import Video from "../../../assets/videos/dance-17352.mp4";
import MainContent from "../MainContent/MainContent";
import InfoCard from "../InfoCard/InfoCard";
import InfoCardItem from "../InfoCard/InfoCardItem";
import benefits from "../InfoCard/InfoCardData";
import InfoAccountCard from "../InfoAccountCard/InfoAccountCard";

const Home = () => {
    return (
        <>
            {/* <Navigation /> */}
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
                {/* <Sponsors /> */}
                {/* <Contacts /> */}
                {/* <Footer />  */}
            </MainContent>

            <section className="info-content-column">
                <h2 className="surtitle">Sponsorer</h2>
                <div className="grid-cards">
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                    <img src="https://source.unsplash.com/random/300x200?ocean,night" alt="random image" />
                </div>
            </section>
            <section className="info-content-row bg-dark">
                <div>
                    <h2>Vill du också synas på Socialdansa?</h2>
                    <h4>Klicka på Samarbeta!</h4>
                </div>
                <div className="info-contact">
                    <a href="#" className="btn btn-primary-color">
                        Samarbeta!
                    </a>
                    <a href="#" className="btn btn-secondary-color">
                        Kontakta oss
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
