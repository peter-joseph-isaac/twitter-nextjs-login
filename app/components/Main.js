'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Main() {
    const { data: session, status } = useSession();

    if (!session) {
        return (
           <>
            <div>Not Logged In!</div>
            <button onClick={() => signIn("twitter")}>Sign In With Twitter</button>
           </>
        )
    }

    return (
        <div>Logged In</div>
    )
};