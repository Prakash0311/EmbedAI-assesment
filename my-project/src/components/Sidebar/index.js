import {Redirect} from 'react-router-dom'
import './index.css'

function SideBar() {
    const [redirect, setRedirect] = useState(false);

    const redirectToSomePage = () => {
      setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/create" />;
    }
    return (
        <>
            <h3>character.ai</h3>
            <button className='create-btn' onClick={redirectToSomePage}>-|- Create</button>
            <button className="discover-btn">Discover</button>
            <h3>Chats</h3>
            <p>Today</p>
            <ul>
                <li>
                    <img src='https://characterai.io/i/80/static/avatars/AreYouFeelingOk.png?webp=true&anim=0' />
                    <span>Gaja Satoru</span>
                </li>
                <li>
                    <img src='https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0' />
                    <span>Creative Helper</span>
                </li>
                <li>
                    <img src='https://characterai.io/i/80/static/avatars/uploade…mWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0' />
                    <span>Anirudh Vishwanathan</span>
                </li>
                <li>
                    <img src='https://characterai.io/i/80/static/avatars/uploade…mWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0' />
                    <span>Arjuna</span>
                </li>
                <li>
                    <img src='https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0' />
                    <span>HyperGlot</span>
                </li>
            </ul>
            <hr />
            <button>Try c.ai</button>
        </>
    )
}

export default SideBar