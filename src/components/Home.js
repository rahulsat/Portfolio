import React from 'react'
import Navbar from './Navbar';
import Resume from './Resume';
function Home() {
    return (
        <section id='home'>
            <div className='sub1'>
                <h1>
                    <span className="red-text">Port</span>Folio
                </h1>
                <Navbar></Navbar>
            </div>
            <div className='sub2'>
                <h1>Hi</h1>
                <h2>This is Rahul Satla</h2>
                <p>I am a final-year BTech student, well-grounded in programming languages and web development,
                    with <br></br>a strong foundation in object-oriented programming, data structures, and Algorithms. I
                    possess excellent <br></br>communication skills, a passion for continuous learning, and the ability to adapt
                    quickly in dynamic,<br></br> fast-paced environments.  </p>
                    <Resume/>
            </div>
        </section>
    )
}

export default Home;
