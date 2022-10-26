import React, { useEffect, useState } from 'react';
import logo from './Svg/webscript.png';
import user from './Svg/user.jpg';
import { BsArrowLeftSquareFill, BsSearch, BsArrowRightSquareFill, BsSpeedometer2, BsNewspaper, BsPen } from 'react-icons/bs';

import MenuItem from "./Menuitem";

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: <BsSpeedometer2 />,
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: <BsSpeedometer2 />,
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: <BsPen /> },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: <BsSpeedometer2 />,
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/design-2`, iconClassName: <BsPen /> },
  { name: "Design 3", to: `/design-3`, iconClassName: <BsPen /> },
  { name: "Design 4", to: `/design-4`, iconClassName: <BsPen /> },
];


function SideMenu(props) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    };

    /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  
  return (
    <>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
          <div className="top-section">
              <div className="logo">
                  <img src= {logo} />
              </div>
              <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                  {inactive ? (<BsArrowRightSquareFill />): (<BsArrowLeftSquareFill />)}
              </div>
          </div>
          <div className="search-controller">
            <button  className="search-btn">
          <BsSearch />
          </button>
              <input type="text" placeholder="search"/>
          </div>
          <div className="divider"></div>
          <div className="main-menu">
            <ul>
            {/* {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))} */}

              <li>
                <a href="#" className="menu-item">
                  <div className="menu-icon">
                  <BsSpeedometer2 />
                  </div>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  <div className="menu-icon">
                  <BsNewspaper />
                  </div>
                  <span>Content</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    Courses
                  </li>
                  <li>
                    Videos
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="menu-item">
                  <div className="menu-icon">
                  <BsPen />
                  </div>
                 <span>Design</span> 
                </a>
              </li>
            </ul>
          </div>

          <div className="side-menu-footer">
            <div className="avatar">
              <img src={user} alt="user"/>
            </div>
            <div className="user-info">
              <h5>Obidi Ella</h5>
              <h6>Obidi@gmail.com</h6>
            </div>
          </div>
      </div>
    </>
  );
}

export default SideMenu;
