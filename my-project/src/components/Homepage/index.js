import './index.css'
import Sidebar from '../Sidebar'
import { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Homepage extends Component{

    render() {
        function onClickButtonEle() {
            return <Redirect to="/create"/>
        }
        return(
            <>
              <Sidebar />
              <div className='home-page'>
                <p>Welcome back,</p>
                <div className='header'>
                    <h2><span>A</span> Anilmatcha</h2>
                    <input type='text' placeholder='Search for Characters' />
                </div>
                <div className='bg-img-banner'>
                    <div className='banner-cont'>
                        <p>What do you want to do?</p>
                        <h2>Epic challanges await</h2>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0' />
                            <p>Puzzle Prodigy</p>
                        </div>
                        <p>Greetings, I'm puzzle prodigy, ready to lead you through a maze of mind boggling puzzles...</p>
                        <p>Reply...</p>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…lUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0' />
                            <p>Escape Room</p>
                        </div>
                        <p>Welcome to your next challange. Can you escape in time?</p>
                        <p>Reply...</p>
                    </div>
                    <h2>For you</h2>
                    <div className='foryou-container'>
                        <div className='foryou-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…lUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0' />
                            <div>
                                <p>Gojou Satoru</p>
                                <p>By @Ether_74</p>
                                <p>I help with writing and code</p>
                            </div>
                        </div>
                        <div className='foryou-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…lUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0' />
                            <div>
                                <p>Writting Buddy</p>
                                <p>By @GengarGhast</p>
                                <p>I help with writing and creating</p>
                            </div>
                        </div>
                        <div className='foryou-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…lUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0' />
                            <div>
                                <p>Continouning frnd</p>
                                <p>By @singhrsins</p>
                                <p>I help with writing and code</p>
                            </div>
                        </div>
                        <div className='foryou-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…lUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0' />
                            <div>
                                <p>INF'J BOYFRIEND</p>
                                <p>By @serafinya</p>
                                <p>Emphatic, reserved and idealistic. Ni-dom</p>
                            </div>
                        </div>
                    </div>
                    <h2>Try these</h2>
                    <div className='try-container'>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0' />
                            <div >
                                <p>Practice a new langauge</p>
                                <p>With hyperGlot</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0' />
                            <div>
                                <p>Practice interviewing</p>
                                <p>With Interviewer</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0' />
                            <div>
                                <p>Brainstorm Ideas</p>
                                <p>With Brainstormer</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0' />
                            <div>
                                <p>Get book recommendation</p>
                                <p>With Librarian Linda</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…ac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&anim=0' />
                            <div>
                                <p>Plan a trip</p>
                                <p>With planner</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…mWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0' />
                            <div>
                                <p>Write a story</p>
                                <p>With creative helper</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0' />
                            <div>
                                <p>Play a game</p>
                                <p>With text adeventure gamer</p>
                            </div>
                        </div>
                        <div className='try-card'>
                            <img src='https://characterai.io/i/80/static/avatars/uploade…lUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0' />
                            <div>
                                <p>Help me make a descion</p>
                                <p>With descionmaker</p>
                            </div>
                        </div>
                    </div>
                    <h2>Featured</h2>
                    <div>
                        <div className='featured-card'>
                            <img src='https://characterai.io/i/200/static/avatars/upload…fNEuxo2lT4NSeqFkLGyudedEm3o.webp?webp=true&anim=0' />
                            <div className=''>
                                <p>Gojou Satoru</p>
                                <p>By @Ether_74</p>
                                <p>I help with writing and code</p>
                            </div>
                        </div>
                        <div className='featured-card'>
                            <img src='https://characterai.io/i/200/static/avatars/upload…l5qKJCNPNAYs7sMe4aH0Jtgm794.webp?webp=true&anim=0' />
                            <div className=''>
                                <p>Writting Buddy</p>
                                <p>By @GengarGhast</p>
                                <p>I help with writing and creating</p>
                            </div>
                        </div>
                        <div className='featured-card'>
                            <img src='https://characterai.io/i/200/static/avatars/LibrarianLinda.png?webp=true&anim=0' />
                            <div className=''>
                                <p>Continouning frnd</p>
                                <p>By @singhrsins</p>
                                <p>I help with writing and code</p>
                            </div>
                        </div>
                        <div className='featured-card'>
                            <img src='https://characterai.io/i/200/static/avatars/upload…XIMk7iRy7IJbuR_Pz8jlisG07gg.webp?webp=true&anim=0' />
                            <div className=''>
                                <p>INF'J BOYFRIEND</p>
                                <p>By @serafinya</p>
                                <p>Emphatic, reserved and idealistic. Ni-dom</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Create a Character</h2>
                        <p>Not vibing with any characters? Create one of your own! Customize things like their voice, conversation starts, their tone, and more!</p>
                        <button onClick={onClickButtonEle}>Create a Character</button>
                    </div>
                </div>
              </div>
            </>
        )
    }
}

export default Homepage