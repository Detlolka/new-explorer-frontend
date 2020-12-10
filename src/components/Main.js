import React from 'react';
import SavedNewsHeader from './SavedNewsHeader';
import SavedNews from './SavedNews';


export default function Main({ news, deleteNew }) {
    return (
        <div className='content'>
        <SavedNewsHeader news={news} />
        <SavedNews news={news} deleteNew={deleteNew}  />        
        </div>
    )
}