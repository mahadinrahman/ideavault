import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Feature = async() => {
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/feature`);
    const datas=await res.json();

    return (
        <div className='max-w-11/12 mx-auto '>
            <div className='flex justify-between mt-17 mb-6'>
                <div className='max-w-7/12'>
            <h3 className='text-4xl font-bold text-fuchsia-900 '>Featured Ideas</h3>
            <p className='my-2'>Post your innovative ideas and let the community discover them. Get feedback, comments, and improve your ideas together.  
</p>
            </div>
            <Button className={'rounded-none text-white bg-fuchsia-900'} variant='outline'><Link href={'/ideas'}>All Ideas</Link></Button>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                {
                datas.map(data=> <div key={data._id}>
            <div className='p-5  border-2 border-white h-full   shadow-[0_10px_30px_rgba(0,0,0,0.2)] h-full rounded-xl'>
                <div className=" md:h-[250px] overflow-hidden mx-auto">
                <img src={data.imageURL} alt="" className=' h-full rounded-lg'/>
                </div>
                  
            <p className='px-2 border-2 rounded-full w-23 text-center py-0.5 text-fuchsia-900 border-fuchsia-900 mt-3'>{data.category}</p>
                <h3 className='text-2xl font-bold text-fuchsia-900 my-2.5'>{data.title}</h3>
                
                <p className='py-2 text-gray-600'>{data.shortDescription}</p>
                <Link href={`/ideas/${data._id}`}><Button variant='outline' className={'w-full my-2 text-fuchsia-900 border-fuchsia-900'}>View Details</Button></Link>
            </div>
        </div>)
                }
            </div>
        </div>
    );
};

export default Feature;