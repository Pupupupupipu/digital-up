import "../styles/global.css";
import { Header } from "../components/header/header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CatalogPage } from "./catalog"
import { Catalog } from '../components/catalog/catalog'
import { SubsPage } from "./subs"
import { ChildPage } from './child'
import { IndexPage } from "./index";
import UiModal from "../components/uikit/ui-modal"
import { useState } from 'react'

export default function App({ Component, PageProps }){

    const [showModal, setShowModal] = useState(false);
    const [userActive, setUserActive] = useState(undefined);

    function handleShowModalChange(value){
        setShowModal(value)
    }

    function handleUserActive(value){
        setUserActive(value)
    }

    return (

        
        <>
        <Header showModal={handleShowModalChange} userActive={userActive}/>
        <Component {...PageProps} />
        {showModal && <UiModal showModal={handleShowModalChange} userActive={handleUserActive}/>}
        </>
    )
}

