'use client'

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CommentEdit from './CommentEdit';

const CommentsCard = ({ data }) => {

    const router = useRouter();

    const [mounted, setMounted] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        setMounted(true);

        setFormattedDate(
            new Date(data.createdAt).toLocaleString()
        );

    }, [data.createdAt]);

    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user;

    if (!mounted) return null;

    const handleDelete = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${data._id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userEmail: user?.email
            })
        });

        const deleteResult = await res.json();

        if (res.ok) {
            toast.success("Deleted!");
            router.refresh();
        } else {
            toast.error("Deleted is wrong!");
        }
    };

    return (
        <div className='max-w-11/12 mx-auto'>

            <div className='shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-2 border-white rounded-xl mt-7 px-6 py-2'>

                <div className='flex justify-between'>

                    <div>
                        <p className='text-blue-500'>
                            <small>{data.userName}</small>
                        </p>

                        <p className='text-fuchsia-800 py-2 text-xl'>
                            {data.comment}
                        </p>

                        <p className='text-gray-500'>
                            <small>{formattedDate}</small>
                        </p>
                    </div>

                    <div className='space-x-2 flex items-center'>

                        {
                            user?.email === data.userEmail && (
                                <>
                                    <CommentEdit data={data} />

                                    <Button
                                        onClick={handleDelete}
                                        variant='danger'
                                        type='submit'
                                    >
                                        Delete
                                    </Button>
                                </>
                            )
                        }

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CommentsCard;