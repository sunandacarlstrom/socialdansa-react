const HeroVideo = ({ src = "", className = "" }) => {
    return <video className={className} src={src} type="video/mp4" autoPlay loop muted controls playsInline></video>;
};

export default HeroVideo;
