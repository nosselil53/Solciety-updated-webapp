import { X } from "react-feather"
const StatusSection = (props) => {
	const closeLeftSide = () => {
    document.querySelector(".notification-tab").classList.remove("active")
    document.querySelector(".recent-default").classList.add("active");
    props.ActiveTab("")
    }

    return (
        <div className={`status-tab custom-scroll dynemic-sidebar ${props.tab === "status" ? "active" : ""}`} id="status">
            <div className="my-status-box">
              <div className="status-content">
                <div className="media">
                  <div className="img-status">
                    <div className="user-status  bg-size" style={{ backgroundImage: `url('../assets/images/avtar/2.jpg')`,backgroundSize:"cover",backgroundPosition:"center",display:"block" }}></div>
                    <div className="upload-img">
                      <input type="file"/>
                    </div>
                  </div>
                  <div className="media-body">
                    
                    <h3>my status</h3>
                    <p>tap to add status Update</p>
                    
                  </div>
                  <div className='media-body text-right'>
               {' '}
              <a
              className='icon-btn btn-outline-light btn-sm close-panel'
              href='#'
              onClick={() => closeLeftSide()}
            >
              <X />
            </a>
          </div>
         
                </div>
              </div>
            </div>
            <div className="contact-status-box">
              <div className="theme-title">
                <h3>Recent Update</h3>
              </div>
              
              </div>
            </div>
       
    );
}

export default StatusSection;