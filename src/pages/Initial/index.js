import React, { useState } from 'react';
import Home from '../../components/Home';
import Search from '../../components/Search'
import Favorites from '../../components/Favorites'
import {Header, Menu} from './style.js';

function Initial() {

    const [selectedMenu, setSelectedMenu] = useState(1);

    function handleMenuSelected(menuIndex){
        setSelectedMenu(menuIndex);
    }

    function renderContent() {
        switch (selectedMenu) {
            case 1:
                return <Home />

            case 2:
                return <Search />

            case 3:
                return <Favorites />

        }
    }
    return (
        <>
            <Header>
                <h1>BookList</h1>
                <div className="linha" />
                <Menu>
                    <ul>
                        <li><a onClick={() => handleMenuSelected(1)}>Home</a> </li>
                        <li><a onClick={() => handleMenuSelected(2)}>Pesquisar</a></li>
                        <li><a onClick={() => handleMenuSelected(3)}>Favoritos</a></li>
                    </ul>
                </Menu>
            </Header>
            {renderContent()}

        </>
    );
}

export default Initial;
