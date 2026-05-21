'use client'

import { authClient } from '@/lib/auth-client';
import { FieldError, Label } from '@heroui/react';
import { router } from 'better-auth/api';
import { redirect } from 'next/navigation';
import React from 'react';
import { TextField } from 'react-aria-components';
import { toast } from 'react-toastify';

const Comment = ({id}) => {
       const {
              data: session,
          } = authClient.useSession()
          const user = session?.user;
        //   console.log(user);

      const onSubmit=async(e)=>{
      e.preventDefault();
    const formData =new FormData(e.currentTarget);
    const data =Object.fromEntries(formData.entries());
    
     const commentData = {
      ...data,
      ideaId: id,
       userName: user?.name,
      userEmail:user?.email,
    }
    
     const res=await fetch('http://localhost:5000/comment',{
             method:'POST',
          headers:{
            'content-type':'application/json',
           
          },
          body:JSON.stringify(commentData)
        })
        const comments=await res.json();

        if(res.ok){
            toast.success('Your comment is posted!')
          

        }else{
            toast.error('comment is not posted ')
        }
          redirect(`/ideas/${id}`);
    }
    return (
        <div>
             <form onSubmit={onSubmit}>
             <textarea       
                            rows="2"
                            name='comment'
                            required
                            placeholder="Please create a comment..."
                            className="w-11/12 ml-4 md:ml-6  border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-800"
            ></textarea>
    
             <button
                        type="submit"
                        className="w-35 ml-4 md:ml-6 mb-5 bg-fuchsia-900 py-1.5 text-white  rounded-xl font-semibold text-lg"
                    >
                        Post Comment 
                    </button>
            </form>
        </div>
    );
};

export default Comment;