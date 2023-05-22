const HeroVideo = ({src = ""}) => {
return (
<video className="hero-transparent" src={src} type="video/mp4" autoPlay loop muted controls
    playsInline></video>
)
}

export default HeroVideo; 