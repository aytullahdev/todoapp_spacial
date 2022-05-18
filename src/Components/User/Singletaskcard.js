import React from 'react';

const Singletaskcard = ({cdata, handledone,handledel}) => {
    
    return (
        <div className='bg-blue-500 p-5 mt-20 relative rounded-lg text-white '>
            <div className=' absolute top-0 right-0'>
                <button className='text-xl p-2' onClick={()=>handledel(cdata._id)}>❌</button>
               
            </div>
            <div className={cdata.done===1?' line-through':''}>
                <h1 className='text-xl py-2 text-center uppercase font-semibold'>{cdata.name}</h1>
                <p className='text-md m-5  '>{
                    cdata.desc
                }</p>
            </div>
            <div>
            { cdata.done!==1 &&
            <button className='btn btn-md outline-none hover:bg-green-600 border-none bg-green-500 text-md mx-auto block text-white uppercase rounded-lg' onClick={()=>handledone(cdata._id)}>DONE</button>}
            </div>
        </div>
    );
};

export default Singletaskcard;