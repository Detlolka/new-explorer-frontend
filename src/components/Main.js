import React from 'react';
import SavedNewsHeader from './SavedNewsHeader';
import SavedNews from './SavedNews';


export default function Main() {
    return (
        <div className='content'>
        <SavedNewsHeader />
        <SavedNews />        
        </div>
    )
}