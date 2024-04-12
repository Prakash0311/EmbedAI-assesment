import './index.css'
import Sidebar from '../Sidebar'

function CreateCharacter(){
        return(
            <>
            <Sidebar />
            <div className='chat-container'>
                <div className=''>
                </div>
                <label className="input-label" htmlFor="charname">Character name</label>
                <input id='charname' placeholder='e.g. Albert Einstein'/>
                <label className="input-label" htmlFor="tagline">Tagline</label>
                <input id='tagline' placeholder='Add a short tagline of your Character'/>
                <label className="input-label" htmlFor="description">Description</label>
                <textarea rows={5} id='description' placeholder='How would your character describe themselves?'/>
                <label className="input-label" htmlFor="greeting">Greeting</label>
                <textarea rows={3} id='greeting' placeholder='e.g. Hello, I am Albert. Ask me anything about my scientific contributions'/>
                <p>More options</p>
                <label className="input-label" htmlFor="visibility">Visibility</label>
                <select className='visible-container' id='visibility'>
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </div>
            </>
        )
}

export default CreateCharacter