import React from 'react';
import CommentsCard from './CommentsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const AlComments =({datas}) => {

    return (
        <div>
            <p className='text-fuchsia-900 font-bold text-3xl text-center'>All Coments</p>
            <div>
            {
                datas.map(data=><CommentsCard key={data._id}  data={data} ></CommentsCard>)
            }
            </div>
        </div>
    );
};

export default AlComments;