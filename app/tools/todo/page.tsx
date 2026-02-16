'use client';

import { useEffect, useState } from "react";
import MainHeader from "./mainheader";
import TodoCardList from "./todocardlist";
import Head from "next/head";

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
            <div className="bg-gray-700 text-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <MainHeader onCreatePost={showModalHandler} />
                    <TodoCardList isPosting={modalVisible} isNotPosting={hideModalHandler} />
                </div>
            </div>
        </>
    );
}
