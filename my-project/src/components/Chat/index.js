import './index.css'
import Sidebar from '../Sidebar'

function Chat(){
    handleSubmit = event => {
        event.preventDefault();
    };
    return(
    <>
    <Sidebar />
    <div className="chatWindow">
        <div className='chat-top'>
            <div>
                <img src='' />
            </div>
            <div className=''>
                <h3>HyperGlot</h3>
                <p>By @xpearhead</p>
            </div>
        </div>
        <div className="chatInputWrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
            />
          </form>
        </div>
      </div>
      </>
    )
}

export default Chat