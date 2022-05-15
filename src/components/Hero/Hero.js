import "./Hero.css"
import video from "./hero-video.mp4"

const Hero = () => {
    return (
        <section>
            <div className="overlay"></div>
            <div className="hero">
            <video  controls="" autoPlay loop muted className="video">
                <source src={video} type="video/mp4" />
            </video>
            </div>

            <div className="herobox">
                <h1 className="heading">VMeet</h1>
                <p className="heading-para">Whether you want to meet with your team or with your customers, MeetinVR offers human interaction more intuitive and effective than in real life by creating a new reality, optimized for exceptional collaboration.</p>
                <button className="hero-btn">Get Started</button>
            </div>
        </section>
    )
}

export default Hero;