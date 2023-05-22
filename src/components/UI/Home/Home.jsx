import Banner from "../Banner/Banner"
import Hero from "../Hero/Hero"
import Video from "../../../assets/videos/dance-17352.mp4"

const Home = () => {
    
return (
    <>
    {/* <Navigation /> */}
    <Banner />
    <Hero title="Sveriges största plattform inom socialdans" src={Video} alt="people dancing" />
    {/* <InfoCard />
    <InfoAccountCard />
    <SponsorList />
    <Contacts />
    <Footer /> */}

        <article className="main-content">
            <section className="info-content-column bg-content">
                <h2 className="sub-title">Fördelar med socialdans</h2>
                <ol className="grid-list">
                    <li className="sub-title">
                        <h4>Ger glädje & energi</h4>
                        <p>Generellt sätt är dans en fysisk aktivitet som ger glädje och energi. Socialdans är en
                            prestigelös form av pardans där alla, oavsett nybörjare eller veteran på dansgolvet, är
                            välkomna att dansa i en lättsam atmosfär.</p>
                    </li>
                    <li className="sub-title">
                        <h4>Träffar nya människor</h4>
                        <p>Genom att socialdansa får du träffa nya människor och skapa kontakter. Socialdanser har
                            alltid attraherat en stor målgrupp, från unga till pensionärer, att dansa i takt till
                            livemusik.</p>
                    </li>
                    <li className="sub-title">
                        <h4>Gör gott för kroppen</h4>
                        <p>Dans utmanar och tränar koordinationen och stärker vår hållning. De mjuka rörelserna ökar
                            dessutom vår rörlighet och flexibilitet. Även balansen förbättras när du i pardans ska
                            följa/föra din partner.</p>
                    </li>
                    <li className="sub-title">
                        <h4>Minskar stress & stärker hjärnan</h4>
                        <p>Dans motverkar stress och andra sjukdomar samt stärker hjärnans olika funktioner. Under
                            socialdans behöver du och din partner ha koll på vad som händer på dansgolvet för att inte
                            krocka med andra par.</p>
                    </li>
                </ol>
            </section>
            <section className="info-content-row bg-secondary">
                <div className="container-image">
                    <img src="https://source.unsplash.com/random/280x280?ocean,night" alt="random image" />
                </div>
                <div className="info-content">
                    <h3 className="sub-title">För dig som besökare</h3>
                </div>
                <div className="info-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus voluptas itaque
                        nemo iste
                        officiis rem, porro magnam laudantium possimus, molestias ea cupiditate vel ipsa nam. Cum,
                        optio.
                        Quam, in.</p>
                    <div>
                        <a href="#" className="btn btn-primary-color">Logga in</a>
                    </div>
                </div>
            </section>
            <section className="info-content-row bg-primary">
                <div className="container-image">
                    <img src="https://source.unsplash.com/random/280x280?ocean,night" alt="random image" />
                </div>
                <div className="info-content">
                    <h3 className="sub-title">För dig som arrangör eller dansband</h3>
                </div>
                <div className="info-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus voluptas itaque
                        nemo iste
                        officiis rem, porro magnam laudantium possimus, molestias ea cupiditate vel ipsa nam. Cum,
                        optio.
                        Quam, in.</p>
                    <div>
                        <a href="#" className="btn btn-secondary-color">Logga in</a>
                    </div>
                </div>
            </section>
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
                    <a href="#" className="btn btn-primary-color">Samarbeta!</a>
                    <a href="#" className="btn btn-secondary-color">Kontakta oss</a>
                </div>
            </section>
        </article>
        </>
)
}

export default Home; 