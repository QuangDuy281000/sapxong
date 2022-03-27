import { Link } from "react-router-dom";
import Logout from "../Logout";
import {  FaRegListAlt, FaUserAlt } from "react-icons/fa";

const NavbarAdmin= ({name}) =>{

    return (
        <>
        <li className="no_nav-item">
            <Link to="/admin-news" className="no_nav-links" > 
                  Trang chủ 
            </Link>
        </li>

        <li className="no_nav-item">
            <Link to="/test" className="no_nav-links" > 
                Quản lý vacxin 
            </Link>
        </li>

        <li className="no_nav-item">
            <Link  to="/quan-ly-loai-vacxin-index" className="no_nav-links">
               Quản lý loại vacxin 
            </Link>
        </li>

          <li className="no_nav-item">
            <Link to="/calendar"  className="no_nav-links">
                 Quản lý lịch tiêm
             </Link>
          </li>

          <li className="no_nav-item" >
            <div  className="no_nav-links">
              <FaUserAlt className="no_icon-header" />
                {name || "Admin" }
                <ul className="no_menu-profile">
                    <li  className="no_profile-iem">
                          <Logout/>
                    </li>
                </ul>    
            </div>
           
          </li>
        </>
    )
}
export default NavbarAdmin;