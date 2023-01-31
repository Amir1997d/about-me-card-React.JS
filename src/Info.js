import photo from "./my2.jpg"

export default function Info() {
    return (
        <div className="info-container">
            <img src={ photo } alt="" className="photo"></img>
            <h3 className="fullname">Amir Dastouri</h3>
            <h5 className="creer">Full Stack Web Developer</h5>
            <div>
                <button>
                    <a href="mailto: amir3dastouri@gmail.com">Email</a></button>
                <button>
                    <a href="https://www.linkedin.com/in/amir-mohammad-dastouri-291395218/">Linkedin</a>
                </button>
            </div>
        </div>
    )
}