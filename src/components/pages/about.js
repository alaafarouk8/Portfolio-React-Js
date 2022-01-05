import mypdf from './AlaaFaroukCV.pdf'
function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div >
                        <h1 style={{fontSize:50 , textShadow:'20px', paddingTop:50}}>
                            About Me
                        </h1>
                    </div>
                </div>
                <div className="col-md-9">
                    <div>
                    <p style={{fontSize:30 , textShadow:'20px', paddingTop:50}}> 
                        I'm a computer science fresh graduate.I am a passionate individual,
                        self-motivated, fast learner and hard worker who likes to be challenged in order
                        to develop new and innovative approaches. Furthermore,
                        an ambitious person interested in new experiences,new technologies.
                        My aim is always to gain new experiences through different fields,
                        so that i can improve my skills and increase my knowledge by learning new techniques</p>
                    </div>
                    <a href={mypdf} className="btn btn-dark" style={{fontSize:30}} download="AlaaFarouk.pdf"> Download CV </a>

                </div>
            </div>
        </div>

    );
}

export default About;