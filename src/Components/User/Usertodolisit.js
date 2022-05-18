import React from 'react';
import Singletaskcard from './Singletaskcard';

const Usertodolisit = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-5 gap-10 text-left'>
                <Singletaskcard/>
                <Singletaskcard/>
                <Singletaskcard/>
                <Singletaskcard/>
                <Singletaskcard/>
                <Singletaskcard/>
            </div>
        </div>
    );
};

export default Usertodolisit;