import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const CardIdea = ({data}) => {
    return (
        <div>
            <div className='p-5  shadow-[0_10px_30px_rgba(0,0,0,0.2)] h-full rounded-xl'>
                <div className=" md:h-[250px] overflow-hidden mx-auto">
                <img src={data.imageURL} alt="" className=' h-full rounded-lg'/>
                </div>
                  
            <p className='px-2 border-2 rounded-full w-23 text-center py-0.5 text-fuchsia-900 border-fuchsia-900 mt-3'>{data.category}</p>
                <h3 className='text-2xl font-bold text-fuchsia-900 my-2.5'>{data.title}</h3>
                
                <p className='py-2'>{data.shortDescription}</p>
                <Link href={`/ideas/${data._id}`}><Button variant='outline' className={'w-full my-2'}>View Details</Button></Link>
            </div>
        </div>
    );
};

export default CardIdea;