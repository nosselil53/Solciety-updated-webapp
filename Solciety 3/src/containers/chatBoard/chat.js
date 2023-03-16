import {  useState } from 'react';
import {
  Phone,
  Video,
  Trash2,
  Slash,
} from 'react-feather';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import CustomChat from './customChat';

const Chat = (props) => {
  const [callModal, setCallModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [quickAction, setQuickAction] = useState(false);
  const [blockModal, setBlockModal] = useState(false);
 
  return (
    <>
      <CustomChat
        quickAction={quickAction}
        setQuickAction={setQuickAction}
   

        timeValues={props.timeValues}
      />
      <div className='chat-content tabto active'>
        <div className='messages custom-scroll' id='blank'>
          <div className='contact-details'>
            <div className='row'>
              <div className='col'>
                <ul className='calls text-right'>
                  <li>
                    <a
                      className='icon-btn btn-light button-effect'
                      href='#'
                      onClick={() => setCallModal(!callModal)}
                    >
                      <Phone />
                    </a>
                    <Modal
                      isOpen={callModal}
                      toggle={() => setCallModal(!callModal)}
                      className='fade show'
                      centered
                    >
                      <ModalBody className='p-0'>
                        <div className='audiocall1 call-modal'>
                          <img
                            className='bg-img'
                            src='/assets/images/avtar/big/audiocall.jpg'
                            alt='Avatar'
                          />
                          <div className='center-con text-center'>
                           
                            <ul>
                              <li>
                                <a
                                  className='icon-btn btn-success button-effect btn-xl is-animating'
                                  href='#'
                                >
                                  {' '}
                                  <Phone />
                                </a>
                              </li>
                              <li>
                                <a
                                  className='icon-btn btn-danger button-effect btn-xl is-animating cancelcall'
                                  href='#'
                                  data-dismiss='modal'
                                >
                                  {' '}
                                  <Phone />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                    </Modal>
                  </li>
                  <li>
                    <a
                      className='icon-btn btn-light button-effect'
                      href='#'
                      onClick={() => setVideoModal(!videoModal)}
                    >
                      <Video />
                    </a>
                    <Modal
                      className='viddiolog fade show'
                      isOpen={videoModal}
                      toggle={() => setVideoModal(!videoModal)}
                      centered
                    >
                      <ModalBody>
                        <div className='videocall call-modal'>
                          <img
                            className='bg-img'
                            src='/assets/images/avtar/big/videocall_bg.jpg'
                            alt='Avatar'
                          />
                          <div className='small-image'>
                            <img
                              className='bg-img'
                              src='/assets/images/avtar/big/videocall.jpg'
                              alt='Avatar'
                            />
                          </div>
                         
                          <div className='center-con text-center'>
                            <ul>
                              <li>
                                <a
                                  className='icon-btn btn-light button-effect pause'
                                  href='#'
                                  data-tippy-content='Hold'
                                >
                                  <i className='ti-control-pause'></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className='icon-btn btn-danger button-effect btn-xl is-animating'
                                  href='#'
                                  onClick={() => setVideoModal(!videoModal)}
                                >
                                  {' '}
                                  <Phone />
                                </a>
                              </li>
                              <li>
                                <a
                                  className='icon-btn btn-light button-effect mic'
                                  href='#'
                                  data-tippy-content='Mute'
                                >
                                  <i className='fa fa-microphone'></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                    </Modal>
                  </li>
                  <li>
                   
                    <div
                      className='chat-frind-content'
                      style={
                        quickAction ? { display: 'block' } : { display: 'none' }
                      }
                    >
                      <ul>
                        <li>
                          <a
                            className='icon-btn btn-outline-danger button-effect btn-sm'
                            href='#'
                          >
                            <Trash2 />
                          </a>
                          <h5>delete</h5>
                        </li>
                        <li>
                          <a
                            className='icon-btn btn-outline-light button-effect btn-sm'
                            href='#'
                          >
                            <Slash />
                          </a>
                          <h5>block</h5>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='contact-chat'>
            <div className='rightchat animat-rate'>
              <div className='bg_circle'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className='cross'></div>
              <div className='cross1'></div>
              <div className='cross2'></div>
              <div className='dot'></div>
              <div className='dot1'> </div>
            </div>
          </div>
         
        </div>
        
        <div className='messages custom-scroll call-content tabto' id='group_chat'>
        
  <a
    className="icon-btn btn-outline-primary button-effect mobile-back mb-3"
    href="#"
  >
    <i className="ti-angle-left" />
  </a>
  <div className="row">
    <div className="col-sm-5">
      <div className="user-profile mb-3">
        <div className="user-content ">
          <img
            className="img-fluid"
            src="../assets/images/logo/logo.png"
            alt="user-img"
          />
          <h3>Global Chat</h3>
          <h5
            className="mt-2"
            style={{ color: "gray", fontSize: 10, fontWeight: "medium" }}
          >
            People from all around the world can gather here to talk about their
            interests and unwind <br />
            you can join a number of channels &amp; subjects to express yourself{" "}
          </h5>
        </div>
      </div>
      <br />
      <div className="user-profile">
        <div className="document">
          <div className="filter-block">
            <div className="collapse-block open">
              <h5 className="block-title">
                Official links{" "}
                <label className="badge badge-success sm ms-2">3</label>
              </h5>
              <div className="block-content">
                <ul className="document-list ">
                  <li>
                    <h5>Twitter</h5>
                  </li>
                  <li>
                    <h5>Discord</h5>
                  </li>
                  <li>
                    <h5>Mint link</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-7 position-relative">
      <div className="call-log-main custom-scroll">
        <div className="coll-log-group">
          <div className="log-content-left">
            <div className="media">
              <i className="fa-solid fa-chess-queen" />
              <div className="media-body nav-tabs subsections">
                <li data-to="contact-content">
                  &nbsp; &nbsp; Governance details
                </li>
              </div>
            </div>
          </div>
          <div className="log-content-right">
            <h6>
              <strong> Last Updated </strong> &nbsp; 10/3/23
            </h6>
          </div>
        </div>
        <div className="coll-log-group">
          <div className="log-content-left ">
            <div className="media">
              <i className="fa-solid fa-coins" />
              <div className="media-body nav-tabs subsections">
                <li data-to="contact-content" className="">
                  &nbsp; &nbsp;Treasury
                </li>
              </div>
            </div>
          </div>
          <div className="log-content-right">
            <h6>
              3321 <strong> SOL </strong>
            </h6>
          </div>
        </div>
        <div className="coll-log-group">
          <div className="log-content-left">
            <div className="media">
              <i className="fa-solid fa-user" />
              <div className="media-body nav-tabs subsections">
                <li data-to="contact-content"> &nbsp; &nbsp;Members </li>
              </div>
            </div>
          </div>
          <div className="log-content-right">
            <h6>
              <strong> 10.000 </strong> ( <strong>2134 </strong> Active Members)
            </h6>
          </div>
        </div>
      </div>
      <div className="call-log-clear">
        <i className="ti-trash font-danger" />
        <span className="font-danger">Delete call log</span>
      </div>
    </div>
  </div>
</div>

          </div>
  
          <Modal
            isOpen={blockModal}
            className='add-popup delete-modal'
            toggle={() => setBlockModal(!blockModal)}
            centered
          >
            <ModalHeader
              toggle={() => setBlockModal(!blockModal)}
            ></ModalHeader>
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
          </div>
    </>
  );
};

export default Chat;
