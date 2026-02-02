'use client';

import { useState } from "react";
import MainHeader from "./MainHeader";
import TodoCardList from "./TodoCardList";

export default function Todo() {
    const [modalVisible, setModalVisible] = useState(false);

    function showModalHandler() {
        setModalVisible(true);
    }   

    function hideModalHandler() {
        setModalVisible(false);
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <TodoCardList isPosting={modalVisible} isNotPosting={hideModalHandler}/>
        </>
    );
}
