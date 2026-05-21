import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyInteractions = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
     console.log(session);
    const user=session?.user;


     const res=await fetch(`http://localhost:5000/my-comments/${user.email}`)
    const datas= await res.json();
    console.log(datas);
    
    return (
        <div>
            <h3>My Interactions</h3>
            {
                datas.map(data=><div key={data._id}>
            
            <div className=' shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-xl mt-7 px-6 py-2'>
                <p className='text-blue-500'><small>{user?.name}</small></p>
                 <p className='text-fuchsia-800 py-2 text-xl'>{data.comment}</p>
                 <p><small>  {new Date(data.createdAt).toLocaleString()}</small></p>

            </div>
        </div>)
            }
            
        </div>
    );
};

export default MyInteractions;