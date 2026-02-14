'use client';

import { useState } from "react";
import MainHeader from "./mainheader";
import TodoCardList from "./todocardlist";

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
            <div className="min-h-screen bg-gray-700 text-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <MainHeader onCreatePost={showModalHandler} />
                    <TodoCardList isPosting={modalVisible} isNotPosting={hideModalHandler} />
                </div>
            </div>
        </>
    );
}
