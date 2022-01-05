import Button from './btn';
function Footer() {
    return (
        <div className='bg-dark text-center text-white' style={{ padding: 20, justifyItems: 'center' }}>
            <div className='row'>
                <div className='col-md-4 text-center text-white'>
                    <h2>Get in Touch</h2>
                    <p>
                        <i className="bi bi-envelope-fill text-white" style={{ fontSize: 20 }}> alaafar19@gmail.com</i>
                    </p>
                    <p>
                        <i className="bi bi-telephone-fill text-white" style={{ fontSize: 20 }}>01120042389</i>

                    </p>
                </div>
                <div className='col-md-4 text-center text-white' style={{ paddingTop: 50 }}>
                    < Button name="Contact Me" />
                </div>
                <div className='col-md-4 text-center text-white' >
                <i className="bi bi-linkedin" style={{ fontSize: 40 ,padding:10 }}></i>
                <i className="bi bi-facebook" style={{ fontSize: 40 ,padding:10 }}></i>
                <i className="bi bi-twitter" style={{ fontSize: 40 ,padding:10 }}></i>
                <p> Copyrights@alaafarouk </p>
                </div>
            </div>

        </div>


    );
}

export default Footer;