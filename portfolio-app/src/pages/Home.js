// import { Link } from 'react-router-dom';
import 'react-bootstrap';
import avatar from '../assets/logos/TempAvatar.png'

const Home = () => {
    console.log("Hey, this is the Home page!")

    return (
        <main>
            <div class="opening">
                <img src={avatar} alt="avatar"/>
                <h2>Welcome to my Portfolio!</h2>
                <p>This is my first step into becoming a deveolper and being able to pursue a career that I am passionate about.
                I look forward to working on future projects with you!</p>
            </div>
        </main>
    )
}

export default Home;