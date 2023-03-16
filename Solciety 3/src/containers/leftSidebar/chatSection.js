import { useState } from 'react';
import {
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from 'reactstrap';

const ChatSection = () => {
  const [activeTab] = useState('chat');
  const [chatSubTab, setChatSubTab] = useState('direct');

  const ToggleChatSubTab = (tab) => {
    setChatSubTab(tab);

    if (tab === 'direct') {
      var element = document.getElementById('chating');
      element.classList.add('active');
    } else {
       element = document.getElementById('chating');
      element.classList.remove('active');
    }

    if (tab === 'group') {
     element = document.getElementById('group_chat');
      element.classList.add('active');
    } else {
       element = document.getElementById('group_chat');
      element.classList.remove('active');
    }
  };
  return (
    <div className='chat custom-scroll'>
      <div className='theme-title'>   
      </div>
      <div className='theme-tab tab-sm chat-tabs'>
        <TabContent activeTab={activeTab}>
          <TabPane
            tabId='chat'
            className='fade show'
            id='chat'
            role='tabpanel'
            aria-label='chat-tab'
          >
            <div className='theme-tab'>
              <Nav tabs id='myTab1' role='tablist'>
                <NavItem>
                  <NavLink
                    className={`button-effect ${chatSubTab === 'direct' ? 'active' : ''
                      }`}
                    onClick={() => ToggleChatSubTab('direct')}
                    id='direct-tab'
                    data-toggle='tab'
                    href='#direct'
                    role='tab'
                    aria-controls='direct'
                    aria-selected='false'
                    data-to='chating'
                  >
                    Daos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`button-effect ${chatSubTab === 'group' ? 'active' : ''
                      }`}
                    onClick={() => ToggleChatSubTab('group')}
                    id='group-tab'
                    data-toggle='tab'
                    href='#group'
                    role='tab'
                    aria-controls='group'
                    aria-selected='true'
                    data-to='group_chat'
                  >
                    Group
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={chatSubTab}>
                <TabPane
                  tabId='direct'
                  className='fade show'
                  id='direct'
                  role='tabpanel'
                  aria-labelledby='direct-tab'
                >
                              <ul className="chat-main">
                  <li className="active" data-to="chating">
                    <div className="chat-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="/assets/images/avtar/ggg.png"
                          alt="Avatar"
						        width={50}
						        height={50}
							
						
                        />
                      </div>
                      <div className="details">
                        <h5>Global chat</h5>
                        <h6>New announcement</h6>
                      </div>
                      <div className="date-status">
                        <div className="badge badge-primary sm">8</div>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="/assets/images/avtar/backpack.png"
                          alt="Avatar"
						             width={50}
						             height={50}
                        />
                      </div>
                      <div className="details">
                        <h5>Adventurer Dao</h5>
                        <h6 style={{ color: "gray" }}>No news</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                      </div>
                    </div>
                  </li>
                  
                </ul>
                </TabPane>
                <TabPane
                  tabId='group'
                  className='fade show'
                  id='group'
                  role='tabpanel'
                  aria-labelledby='group-tab'
                >
                            <ul className="group-main">
                  <li data-to="group_blank">
                    <div className="group-box">
                      <div className="profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/family.png"
                          alt="Avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="details">
                        <h5>Make Solana greater</h5>
                        <h6>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry.
                        </h6>
                      </div>
                      <div className="date-status">
                        <ul className="grop-icon">
                          <li>
                            <a
                              className="group-tp"
                              href="#"
                              data-tippy-content="Josephin"
                            >
                              <img
                                src="../assets/images/contact/1.jpg"
                                alt="group-icon-img"
                                width={50}
                                height={50}
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="group-tp"
                              href="#"
                              data-tippy-content="Jony "
                            >
                              <img
                              src="../assets/images/contact/2.jpg"
                                alt="group-icon-img"
                                width={50}
                                height={50}
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="group-tp"
                              href="#"
                              data-tippy-content="Pabelo"
                            >
                              <img
                                src="../assets/images/contact/3.jpg"
                                alt="group-icon-img"
                                width={50}
                                height={50}
                              />
                            </a>
                          </li>
                          <li>+ 12</li>
                        </ul>
                        <div className="badge badge-primary" />
                      </div>
                    </div>
                  </li>
                  <li data-to="group_blank">
                    <div className="group-box">
                      <div className="profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/onboard.png"
                          alt="Avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="details">
                        <h5>Onboarding and normies</h5>
                        <h6>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry.
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="group_blank">
                    <div className="group-box">
                      <div className="profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/jobboard.png"
                          alt="Avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="details">
                        <h5>Open Fee-less Marketplace</h5>
                        <h6>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry.
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
                </TabPane>
              </TabContent>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default ChatSection;
