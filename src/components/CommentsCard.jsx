'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const CommentsCard = ({data}) => {
      
  

    return (
        <div>
            
            <div className=' shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-xl mt-7 px-6 py-2'>
                <p className='text-blue-500'><small>{data.userName}</small></p>
                 <p className='text-fuchsia-800 py-2 text-xl'>{data.comment}</p>
                 <p><small>  {new Date(data.createdAt).toLocaleString()}</small></p>

            </div>
        </div>
    );
};

export default CommentsCard;