'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Main() {
    const { data: session } = useSession();

    if (!session) {
        return (
           <>
            <div>Not Logged In!</div>
            <button onClick={() => signIn("twitter")}>Sign In With Twitter</button>
           </>
        )
    }

    return (
        <>
            <div>Logged in!</div>
            <div>{session.user.name}</div>
            <div>@{session.user.username}</div>
            <div><img src={session.user.image} /></div>
        </>
    )
};