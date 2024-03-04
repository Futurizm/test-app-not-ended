import React from 'react';
import rotate from '../../imgs/icons/Header/rotate-ccw.svg'
import cross from '../../imgs/icons/Header/cross.svg'
import cl from "./Header.module.css";
import MyButton from "../UI/MyButton/MyButton.jsx";

const Header = ({handleFilterPageClose}) => {
    return (
        <div className={`${cl._container} ${cl.header__container}`}>
            <h1 className={cl.header__title}>Фильтры</h1>
            <div className={cl.button__block}>
                <MyButton><img src={rotate} alt=""/></MyButton>
                <MyButton onClick={handleFilterPageClose}><img src={cross} alt=""/></MyButton>
            </div>
        </div>
    );
};

export default Header;