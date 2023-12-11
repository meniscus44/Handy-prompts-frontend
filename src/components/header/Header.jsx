import React from 'react';
import "./header.css";
import SearchLogo from "../../assets/search-icon.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderItem } from './HeaderItem';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
        <div className="header-wrapper-top">
          <ul>
            <li className="header-title" onClick={()=>navigate("/")}>
              <img src={require("../../assets/title_logo.webp")} alt="Title Logo" className="title-logo"/>
              <span className="website-name">PromptBase</span>
            </li>
          </ul>
          <div className="search-wrapper">
            <input type="text" placeholder="Search Prompts" maxLength={100} className="header-search"/>
            <div className="search-button">
              <img src={SearchLogo} alt="Search Icon" className="search-icon"/>
            </div>
          </div>
          <ul className="header-top-nav">
            <NavLink to={"/marketplace"} className={({ isActive }) => isActive ? "nav-item-active nav-item link" : "nav-item link"}><li>Marketplace</li></NavLink>
            <NavLink to={"/generate"} className={({ isActive }) => isActive ? "nav-item-active nav-item link" : "nav-item link"}><li>Generate</li></NavLink>
            <NavLink to={"/hire"} className={({ isActive }) => isActive ? "nav-item-active nav-item link" : "nav-item link"}><li>Hire</li></NavLink>
            <NavLink to={"/login"} className={({ isActive }) => isActive ? "nav-item-active nav-item link" : "nav-item link"}><li>Login</li></NavLink>
            <NavLink to={"/sell"} className={({ isActive }) => isActive ? "nav-item-active nav-item link" : "nav-item link"}><li>Sell</li></NavLink>
          </ul>
        </div>
        <div className="header-wrapper-bottom">
          <ul className="header-top-nav nav-bottom">
            {HeaderItem.map((item, key) => {
              return (
                <li path={item.link} onClick={() => navigate(item.link)} className="nav-item nav-item-bottom">
                  <img src={item.icon} alt='' className="nav-item-icon"/>
                  <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
    </div>
  )
}

export default Header