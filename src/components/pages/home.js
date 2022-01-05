import girl from '../images/girl.jpg'
import Button from './btn';
function Home() {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img className="card-img" src={girl} style={{ width: '100%', height: '800px' }} alt="Card image" />
                <div className="card-img-overlay">
                    <p className="card-title h1" style={{ marginLeft:'400px' , paddingTop: '100px', fontSize: 50 }} >Alaa Farouk</p>
                    <br />
                    <p className="card-text h3 " style={{ marginLeft:'200px', fontSize: 50 }}>Web Developer and Designer</p>
                    <br> 
                    </br>
                    <div style={{marginLeft:'400px'}}>
                     < Button name="Contact Me" />
                     </div>
                </div>
            </div>
        </div>


    );
}

export default Home;

{/*  */ }
