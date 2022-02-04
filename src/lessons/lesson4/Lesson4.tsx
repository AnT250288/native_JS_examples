import React from 'react'
import './lesson_4';
import {createPromise, rejectPromise, resolvePromise} from "./lesson_4";

export const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromise}>Reject Promise</button>
        </div>
    );
}
