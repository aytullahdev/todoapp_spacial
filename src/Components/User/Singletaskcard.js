import React from 'react';

const Singletaskcard = () => {
    return (
        <div className='bg-blue-500 p-5 mt-20 relative rounded-lg text-white '>
            <div className=' absolute top-0 right-0'>
                <button className='text-xl p-2'>❌</button>
               
            </div>
            <div>
                <h1 className='text-xl text-center uppercase font-semibold'>Working For react</h1>
                <p className='text-md m-5  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint atque incidunt nam obcaecati!</p>
            </div>
            <div>
            <button className='btn btn-md outline-none hover:bg-green-600 border-none bg-green-500 text-md mx-auto block text-white uppercase rounded-lg'>DONE</button>
            </div>
        </div>
    );
};

export default Singletaskcard;