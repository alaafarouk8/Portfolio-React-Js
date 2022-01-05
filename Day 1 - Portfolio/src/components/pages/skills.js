import React from 'react';
import ProgressBar from './progressbar';
class Skills extends React.Component 
{
    render () {
       return (
        <div className="bg-dark text-center text-white" style={{ paddingBottom: '50' }}>
            <div className="row">
                <h1 className="text-center text-white" style={{ fontSize: 50, textShadow: '20px', paddingTop: 50 }}>
                    Skills
                 </h1>
                <p className="text-center text-white" style={{ fontSize: 20, padding: 50 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h1> My Focus </h1>
                    <hr className="bg-light text-center" style={{ size: '3' }} />
                    <h5>UX/Ui Design</h5>
                    <h5>Web Design</h5>
                    <h5>Responsive Design</h5>
                    <h5>Mobile App Design</h5>
                </div>
                <div className="col-md-8">
                    <p> HTML </p> <ProgressBar value="98"/> 
                    <br></br>
                    <p> CSS <ProgressBar value="95"/> </p>
                    <br></br>
                    <p> bootstrap <ProgressBar value="90"/>  </p>
                    <br></br>
                    <p> Java Script <ProgressBar value="80"/>  </p>
                    <br></br>
                    <p> JQuery <ProgressBar value="70"/>  </p>
                    <br></br>
                    <p> Sql <ProgressBar value="90"/>  </p>
                    <br></br>
                    <p> C++ <ProgressBar value="95"/>  </p>
                    <br></br>
                    <p> Java <ProgressBar value="97"/>  </p>
                </div>
            </div>
        </div>
       );
}
}
export default Skills;
