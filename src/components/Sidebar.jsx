import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faTasks,
  faComments,
  faListAlt,
  faCogs,
  faUserShield,
  faArchive,
  faUser,
  faCheckCircle,
  faEllipsisH,
  faShoppingBag,
  faPaintBrush,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
       
       
        <img src="https://static.wixstatic.com/media/5ce010_4a8fe93d93e34469a64848088d346a38~mv2.png/v1/fill/w_308,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo2.png"></img>


      <ul className="sidebar-list">
        <li>
          <FontAwesomeIcon icon={faClipboardList} className="sidebar-icon" />
          Internal Audit <span className="arrow">   &gt;</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
          UAT Testing
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} className="sidebar-icon" />
          Intract <span className="arrow"> &gt;</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faListAlt} className="sidebar-icon" />
          Queue
        </li>
        <li>
          <FontAwesomeIcon icon={faCogs} className="sidebar-icon" />
          Workflow
        </li>
        <li>
          <FontAwesomeIcon icon={faUserShield} className="sidebar-icon" />
          Admin
        </li>
        <li>
          <FontAwesomeIcon icon={faArchive} className="sidebar-icon" />
          Asset
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
          Parent
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="sidebar-icon" />
          Option One
        </li>
        <li>
          <FontAwesomeIcon icon={faEllipsisH} className="sidebar-icon" />
          Option Two
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingBag} className="sidebar-icon" />
          All Accessories
        </li>

        <li>
          <FontAwesomeIcon icon={faClipboardList} className="sidebar-icon" />
          Internal Audit <span className="arrow"> &gt;</span>
        </li>
        
        <li>
          <FontAwesomeIcon icon={faPaintBrush} className="sidebar-icon" />
          Decorating <span className="arrow"> &gt;</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faChalkboardTeacher} className="sidebar-icon" />
          Presenting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
