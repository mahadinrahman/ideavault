import DeleleCard from '@/components/DeleleCard';
import EditCard from '@/components/EditCard';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyIdeas = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session);
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/my-ideas/${user?.email}`)
    const datas = await res.json();
    console.log(datas);

    return (
        <div>
            <h3 className='text-3xl font-bold text-center my-5 text-fuchsia-900'>My Ideas</h3>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    datas.map(data=><div key={data._id} className='max-w-11/12 mx-auto'>
            <div className='p-5 border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] h-full rounded-xl '>
                <div className="md:h-[250px] overflow-hidden mx-auto">
                <img src={data.imageURL} alt="" className=' h-full rounded-lg'/>
                </div>
                  
            <p className='px-2 border-2 rounded-full w-23 text-center py-0.5 text-fuchsia-900 border-fuchsia-900 mt-3'>{data.category}</p>
                <h3 className='text-2xl font-bold text-fuchsia-900 my-2.5'>{data.title}</h3>
                
                <p className='py-2'>{data.shortDescription}</p>
                <Link href={`/ideas/${data._id}`}><Button variant='outline' className={'w-full my-2 text-fuchsia-900 border-fuchsia-900'}>View Details</Button></Link>
                <EditCard data={data}></EditCard>
                <DeleleCard data={data}></DeleleCard>
            </div>
        </div>)
                }
                </div>
        </div>
    );
};

export default MyIdeas;