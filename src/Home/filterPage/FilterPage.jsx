import React from 'react';
import cl from "./FilterPage.module.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";

const FilterPage = ({handleFilterPageClose}) => {
    return (
        <div className={cl._container}>
            <div className={cl.overlay}></div>
            {/* Новый блок поверх .wrapper */}
            <div className={cl.wrapper} onClick={(e => e.stopPropagation())}>
                <Header handleFilterPageClose={handleFilterPageClose} />
                <Main/>
            </div>
        </div>
    );
};

export default FilterPage;