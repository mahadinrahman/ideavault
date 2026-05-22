import CardIdea from '@/components/CardIdea';
import Category from '@/components/Category';
import Search from '@/components/Search';
import React from 'react';


const Ideas = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`);
    const datas = await res.json();

//     const category = searchParams?.category;

//      if (category) {
//     datas = datas.filter((item) => item.category === category);
//   }


    return (
        <div className='max-w-11/12 mx-auto '>
            <h3 className='text-center text-4xl font-bold text-fuchsia-900 mt-10'>Get  Ideas</h3>
            <p className='text-center text-gray-500'>Get feedbacks,comments and improves your ideas together</p>
            <div className=''>
            <Category datas={datas}></Category>
            <Search datas={datas}></Search>
           </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {
                    datas.map(data => <CardIdea key={data._id} data={data}></CardIdea>)

                }
            </div> */}
        </div>
    );
};

export default Ideas;