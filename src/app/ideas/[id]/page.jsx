import AlComments from '@/components/AlComments';
import Comment from '@/components/Comment';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import React from 'react';


const DetailsPage = async({params}) => {
    const {id}=await params;
     
      

    const res =await fetch(`http://localhost:5000/idea/${id}`);
    const data=await res.json();
    
    const response =await fetch(`http://localhost:5000/comment/${id}`);
    const datas=await response.json();
    console.log(datas);

   return (
        <div className='md:max-w-7/12 mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-xl mt-7 p-6'>
            <h2 className='text-center text-3xl font-bold text-fuchsia-900 pt-5'>Delaits Page</h2>
            <div className='mt-5 p-6  '>
            
            <img src={data.imageURL} alt="" className='rounded-lg w-full'/>
            
            <p className='px-2 border-2 rounded-full w-23 text-center py-0.5 text-fuchsia-900 border-fuchsia-900 mt-3'>{data.category}</p>
            <h3 className='pt-2 text-2xl text-fuchsia-900 font-bold'>{data?.title}</h3>
            
            <p className='py-2'>{data.detailedDescription}</p>
             <p className='font-semibold'>Budget:${data.estimatedBudget}</p>
             <p className='py-2 font-semibold'>Audience: {data.targetAudience}</p>
             <p className='pb-4'>{data.proposedSolution}</p>
            
            </div>

             <p className='text-lg text-fuchsia-900 font-semibold  ml-4 md:ml-6'>Create a comment:</p>
            <Comment id={data._id} ></Comment>
            <AlComments datas={datas} ></AlComments>
        </div>
    );
};

export default DetailsPage;