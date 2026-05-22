import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyInteractions = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
     console.log(session);
    const user=session?.user;

            const {token}=await auth.api.getToken({
                headers:await headers()
            })

     const res=await fetch(`http://localhost:5000/my-comments/${user?.email}`,{
            headers:{
                                authorization :`Bearer ${token}`
                            }
     })
    const datas= await res.json();
    console.log(datas);
    
    return (
        <div>
            <h3 className='text-3xl text-center text-fuchsia-900 font-bold mt-5'>My Interactions</h3>
            {
                 datas.length === 0?(
                       <div className="flex items-center justify-center py-16">
  <div className="bg-white shadow-xl border border-gray-200 rounded-2xl px-10 py-12 text-center max-w-md w-full">
    
    <div className="text-6xl mb-4">⚠️</div>

    <h2 className="text-3xl font-bold text-fuchsia-900 mb-3">
      There are no comments
    </h2>

    <p className="text-gray-500 text-lg">
      Please Create a Comment
    </p>

    <Link href={'/'}><button className="mt-6 px-6 py-3 bg-fuchsia-900 text-white rounded-xl hover:scale-105 transition-all duration-300">Go Back</button></Link>

  </div>
                      </div>
                 ):(
                 <div>
            {
                datas.map(data=><div key={data._id}>
            <div className='max-w-11/12 mx-auto'>
            <div className='border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-xl mt-7 px-6 py-2'>
                <p className='text-blue-500'><small>{user?.name}</small></p>
                 <p className='text-fuchsia-800 py-2 text-xl'>{data.comment}</p>
                 <p className='text-gray-500'><small>  {new Date(data.createdAt).toLocaleString()}</small></p>
            </div>
            </div>
        </div>)
            }
            </div>
                 )
            }
            
            
        </div>
    );
};

export default MyInteractions;