import CardIdea from '@/components/CardIdea';
import React from 'react';

const Ideas = async() => {
    const res= await fetch('http://localhost:5000/idea');
    const datas=await res.json();

    return (
        <div className='max-w-11/12 mx-auto'>
            <h3 className='text-center text-4xl font-bold text-fuchsia-900 mt-10'>Get  Ideas</h3>
            <p className='text-center text-fuchsia-900'>Get feedbacks,comments and improves your ideas together</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {
                    datas.map(data=><CardIdea key={data._id} data={data}></CardIdea>)
                    
                }
            </div>
        </div>
    );
};

export default Ideas;