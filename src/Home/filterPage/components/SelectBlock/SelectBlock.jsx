import React from 'react';
import cl from './SelectBlock.module.css'
import MySelector from "../UI/MySelector/MySelector.jsx";
import MyLine from "../UI/MyLine/MyLine.jsx";
import MySelectedButton from "../UI/MySelectedButton/MySelectedButton.jsx";
import shrimp from "../../imgs/icons/Main/shrimp.svg"
import circus from "../../imgs/icons/Main/circus.svg"
import loop from "../../imgs/icons/Main/loop.svg"
import castle from "../../imgs/icons/Main/castle.svg"
import woman from "../../imgs/icons/Main/woman.svg"
import tree from "../../imgs/icons/Main/tree.svg"
import Categories from "../Categories/Categories.jsx";
import Places from "../Places/Places.jsx";
import MyBigButton from "../UI/MyBigButton/MyBigButton.jsx";

const SelectBlock = () => {
    return (
        <>
            <div className={cl.selectBlock}>
                <MySelector>По популярности</MySelector>
                <MySelector>Сначала новые посты</MySelector>
            </div>
            <MyLine />
            <Categories />
            <MyLine />
            <Places />
            <MyLine />
            <div className={cl.cont}>
            <MyBigButton>Показать результаты</MyBigButton>
            </div>
        </>
    );
};

export default SelectBlock;