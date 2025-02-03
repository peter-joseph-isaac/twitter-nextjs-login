'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import './style.css';

export default function Main() {
    const { data: session } = useSession();

    if (!session) {
        return (
           <div className="main-container">
            <div className="header">Please Login!</div>
            <button className="sign-in-button" onClick={() => signIn("twitter")}>Sign In With Twitter</button>
           </div>
        )
    }

    return (
        <div className="main-container">
            <div className="top">Welcome!</div>
            <div className="user-info">
                <div className="user-name">{session.user.name}</div>
                <div className="user-username">@{session.user.username}</div>
                <img className="user-image" src={session.user.image} alt={session.user.name} />
                <button className="logout-button" onClick={() => signOut()}>Log Out</button>
            </div>
        </div>
    )
}