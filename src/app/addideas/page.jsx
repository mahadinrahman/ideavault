'use client'

import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const AddIdeas = () => {

    const onSubmit=async(e)=>{
      e.preventDefault();
    const formData =new FormData(e.currentTarget);
    const idea =Object.fromEntries(formData.entries());
   

    const res=await fetch('http://localhost:5000/idea',{
         method:'POST',
      headers:{
        'content-type':'application/json',
       
      },
      body:JSON.stringify(idea)
    })
    const data=await res.json();
    if(res.ok){
        toast.success('Your idea is Submitted!')
    }else{
        toast.error('Idea is not submitted ')
    }

    redirect('/ideas');
   
    
    }

    return (
        <div>
             <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-white to-purple-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12">
                
                <h2 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">
                    Submit Your Startup Idea
                </h2>

                <p className="text-center text-gray-500 mb-10">
                    Share your innovative idea with the world 🚀
                </p>

                <form onSubmit={onSubmit} className="space-y-6">

                    {/* Idea Title */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Idea Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Enter your startup idea title"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Short Description
                        </label>

                        <textarea
                            name="shortDescription"
                            required
                            rows="3"
                            placeholder="Write a short description..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        ></textarea>
                    </div>

                    {/* Detailed Description */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Detailed Description
                        </label>

                        <textarea
                            name="detailedDescription"
                            required
                            rows="6"
                            placeholder="Explain your idea in detail..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Category
                        </label>

                        <select
                            required
                            name="category"
                            
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        >
                            <option value="">Select Category</option>
                            <option value="Tech">Tech</option>
                            <option value="Health">Health</option>
                            <option value="AI">AI</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Tags 
                        </label>

                        <input
                            type="text"
                            name="tags"
                            placeholder="AI, Startup, SaaS"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Image URL
                        </label>

                        <input
                            type="url"
                            name="imageURL"
                            required
                            placeholder="https://example.com/image.jpg"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                    </div>

                    {/* Estimated Budget */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Estimated Budget 
                        </label>

                        <input
                            type="number"
                            name="estimatedBudget"
                            placeholder="$5000"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                    </div>

                    {/* Target Audience */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Target Audience
                        </label>

                        <textarea
                            name="targetAudience"
                            required
                            rows="3"
                            placeholder="Who will use this product?"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        ></textarea>
                    </div>

                    {/* Problem Statement */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Problem Statement
                        </label>

                        <textarea
                            name="problemStatement"
                            required
                            rows="4"
                            placeholder="What problem does this solve?"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        ></textarea>
                    </div>

                    {/* Proposed Solution */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Proposed Solution
                        </label>

                        <textarea
                            name="proposedSolution"
                            required
                            rows="4"
                            placeholder="Explain your solution..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:scale-[1.02] transition-all duration-300 text-white py-3 rounded-xl font-semibold text-lg"
                    >
                        Submit Idea 
                    </button>

                </form>
            </div>
        </div>
        </div>
    );
};

export default AddIdeas;