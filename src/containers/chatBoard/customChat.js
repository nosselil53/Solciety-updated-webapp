import {  useEffect, useState, useReducer } from 'react';
import {
  Button,
  Dropdown,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import {
  Trash2,
  Slash,
  MoreVertical,
  Send,
} from 'react-feather';
import { Tooltip } from 'react-tippy';
import Gun from 'gun'
//import Faker from 'Faker'
const { faker } = require('@faker-js/faker');

// Port 5050 is the port of the gun server we previously created
const gun = Gun({
  peers: [
    'http://localhost:3040/gun'
  ]
})
// The messages array will hold the chat messages
const currentState = {
  messages: []
}
// This reducer function will edit the messages array
const reducer = (state, message) => {
  return {
    messages: [message, ...state.messages]
  }
}

const CustomChat = (props) => {
 
  const [search, setSearch] = useState(false);
  const [audiocall, setAudiocall] = useState(false);
  const [videocall, setVideocall] = useState(false);
  const [videoscreen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [blockModal, setBlockModal] = useState(false);
  const toggleAudiocall = () => {
    setAudiocall(!audiocall);
  };
  const toggleVideocall = () => {
    setVideocall(!videocall);
  };
  const [messageText, setMessageText] = useState('')
  const [state, dispatch] = useReducer(reducer, currentState)

  // fires immediately the page loads
  useEffect(() => {
    const messagesRef = gun.get('MESSAGES')
    messagesRef.map().on(m => {
      dispatch({
        sender: m.sender,
        avatar: m.avatar,
        content: m.content,
        timestamp: m.timestamp
      })
    })
  }, [])

  // remove duplicate messages
  const newMessagesArray = () => {
    const formattedMessages = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value)
      return (
        index ===
        state.messages.findIndex(obj => {
          return JSON.stringify(obj) === _value
        })
      )
    })
    return formattedMessages
  }

  // save message to gun / send message
  const sendMessage = () => {
    // a reference to the current room
    const messagesRef = gun.get('MESSAGES')
    // the message object to be sent/saved
    const messageObject = {
      sender: faker.name.firstName(),
      avatar: faker.image.avatar(),
      content: messageText,
      timestamp: Date().substring(16, 21)
    }
    // this function sends/saves the message onto the network
    messagesRef.set(messageObject)
    // clear the text field after message has been sent
    setMessageText('')
  }

  return  (
    <>
    <div    className='messages custom-scroll active wallpapers' id='chating'>
      <div className='contact-details'>
        <div className='row'>
          <form className={`form-inline search-form ${search ? 'open' : ''}`}>
            <div className='form-group'>
              <input
                className='form-control-plaintext'
                type='search'
                placeholder='Search...'
              />
              <div
                className='icon-close close-search'
                onClick={() => setSearch(false)}
              ></div>
            </div>
          </form>
          <div className='col-7'>
              <div className='media left'>
                <div
                  className='media-left mr-3'
                
                >
                  <div
                    className={`profile menu-trigger `}
                    style={{
                      backgroundImage: `url('/assets/images/logo/logo.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'block',
                    }}
                  ></div>
                </div>
                <div className='media-body'>
                
                  <div
                    className={`badge ${'online'
                      ? 'badge-success'
                      : 'badge-danger'
                      }`}
                  >
                    { 'online'
                      ? '256 Active users'
                      : 'InActive'}
                  </div>
                </div>
                <div className='media-right'>
                  
                </div>
              </div>
            </div>
          <div className='col'>
            <ul className='calls text-right'>
              <li>
                <Tooltip
                  title='Community gallery'
                  position='bottom-end'
                  trigger='mouseenter'
                >
                  <a
                    className='icon-btn btn-light button-effect'
                    href='#'
                    onClick={() => setAudiocall(!audiocall)}
                  >
                   <i class="fa-solid fa-palette"></i>
                  </a>
                </Tooltip>
                <Modal
                  className='show'
                  isOpen={audiocall}
                  toggle={toggleAudiocall}
                  centered={true}
                >
              
                </Modal>
                <Modal
                  className='show'
                  isOpen={audiocall}
                  toggle={toggleAudiocall}
                  centered={true}
                >
                  <ModalBody className='p-0'
                   >

                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-body">
                        <div
                          className='audiocall1 call-modal backgallery'
                          style={{
                            backgroundImage: `url('../assets/images/avtar/big/audiocall.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'block',
                          }}
                        >
                          <img
                            className='bg-img'
                            src='../assets/images/avtar/big/audiocall.png'
                            alt='Avatar'
                            style={{ display: 'none' }}
                          />
                          <div className='center-con1 text-center'>
                            <br />
                            <br />
                            <br />
                            <div className='title2'>Community Gallery</div>
                            <h6>Contact us to be featured</h6>
                            <ul>
                              <li>
                                <a
                                  className="icon-btn btn-outline-light button-effect btn-xl "
                                  href="https://www.google.com/"
                                  data-bs-toggle="modal"
                                  data-bs-target="#audiorcvcall"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="fa-solid fa-arrow-up-right-from-square" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </li>
              <li>
                <Tooltip
                  title='On going vote'
                  position='bottom-end'
                  trigger='mouseenter'
                >
                  <a
                    className='icon-btn btn-light button-effect'
                    href='#'
                    onClick={() => setVideocall(!videocall)}
                  >
<i class="fa-solid fa-gavel"></i>                    </a>
                </Tooltip>
                <Modal
                  className={`viddiolog fade show ${videoscreen ? 'active' : ''
                    }`}
                  isOpen={videocall}
                  toggle={toggleVideocall}
                  centered={true}
                >
                  <ModalBody>
                  
                    <div
                      className='videocall call-modal '
                      style={{
                        backgroundImage: `url('../assets/images/avtar/big/videocall_bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'block',
                      }}
                    >
                 </div>
                  </ModalBody>
                </Modal>
              </li>
          
              <li className='chat-friend-toggle'>
                <Dropdown
                  isOpen={props.quickAction}
                  toggle={() => props.setQuickAction(!props.quickAction)}
                >
                  <Tooltip
                    title='Quick action'
                    trigger='mouseenter'
                    position='bottom-end'
                  >
                    <DropdownToggle
                      tag='button'
                      data-toggle='dropdown'
                      aria-expanded={props.quickAction}
                      className='icon-btn btn-light bg-transparent button-effect outside'
                    >
                      <MoreVertical />
                    </DropdownToggle>
                  </Tooltip>
                  <div
                    className='chat-frind-content'
                    style={
                      props.quickAction
                        ? { display: 'block' }
                        : { display: 'none' }
                    }
                  >
                    <ul>
                     
                      <li>
                        <a
                          className='icon-btn btn-outline-danger button-effect btn-sm'
                          href='#'
                          onClick={() => setDeleteModal(!deleteModal)}
                        >
                          <Trash2 />
                        </a>
                        <h5 onClick={() => setDeleteModal(!deleteModal)}>
                          Donate
                      </h5>
                      </li>
                      <li>
                        <a
                          className='icon-btn btn-outline-light button-effect btn-sm'
                          href='#'
                          onClick={() => setBlockModal(!blockModal)}
                        >
                          <Slash />
                        </a>
                        <h5 onClick={() => setBlockModal(!blockModal)}>
                          Block
                      </h5>
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        isOpen={blockModal}
        className='add-popup delete-modal'
        toggle={() => setBlockModal(!blockModal)}
        centered
      >
        <ModalHeader toggle={() => setBlockModal(!blockModal)}></ModalHeader>
        <ModalBody>
          <h3>Do you want to block this user?</h3>
          <div className='delete-btn'>
            <Button
              className='button-effect'
              size='sm'
              color='danger'
              onClick={() => setBlockModal(!blockModal)}
            >
              Block
          </Button>
            <Button
              className='button-effect ml-2'
              size='sm'
              color='primary'
              onClick={() => setBlockModal(!blockModal)}
            >
              Close
          </Button>
          </div>
        </ModalBody>
      </Modal>
      <div className='contact-chat'>
        <ul className='chatappend'>
                       
          {newMessagesArray().map((msg, index) => [
            <li key={index} >
            <div className='media-body'>
                <div className='contact-name'>
             
              <h5>{msg.sender}</h5>
             
              <ul className='msg-box'>
                    <li className='msg-setting-main'>
                      <h5>{msg.content}</h5>
                    </li>
                    <li className='msg-setting-main'>
                    </li>
                  </ul>
              </div>
              </div>
              
            </li>
          ])}
           
        </ul>
      </div>

<div className='message-input'>
      <div className='wrap emojis-main'>
        <input
          className='setemoj'
          id="chatin"
          type='text'
          placeholder='Write your message  ...'
          onChange={e => setMessageText(e.target.value)}
          value={messageText}
        />
        <button
          className={`submit icon-btn btn-primary $`}
          onClick={sendMessage}
        >
          <Send />
        </button>
      </div>
    </div>
    </div>
  </>

  ) 
};

export default CustomChat;
