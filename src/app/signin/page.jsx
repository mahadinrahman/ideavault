'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignIn = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
       const user=Object.fromEntries(formData.entries());
    
       const { data, error } = await authClient.signIn.email({
            email:user.email, 
            password:user.password,
           
        })
        if(data){
            toast.success('SignIn is Successful')
            redirect('/');
        }
        if(error){
            toast.error('Sign In is Error');
        }
        
      };
    return (
        <div>
            <div className="md:max-w-6/12 mx-auto px-3 py-7 border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] my-7 rounded-lg">
                           <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
                               <h2 className="text-center text-3xl font-bold my-4 text-fuchsia-900">Please Sign In</h2>
                              
                               <TextField
                                   isRequired
                                   name="email"
                                   type="email"
                                   validate={(value) => {
                                       if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                           return "Please enter a valid email address";
                                       }
                                       return null;
                                   }}
                               >
                                   <Label>Email</Label>
                                   <Input placeholder="Enter a email" />
                                   <FieldError />
                               </TextField>
                               <TextField
                                   isRequired
                                   minLength={8}
                                   name="password"
                                   type="password"
                                   validate={(value) => {
                                       if (value.length < 8) {
                                           return "Password must be at least 8 characters";
                                       }
                                       if (!/[A-Z]/.test(value)) {
                                           return "Password must contain at least one uppercase letter";
                                       }
                                       if (!/[0-9]/.test(value)) {
                                           return "Password must contain at least one number";
                                       }
                                       return null;
                                   }}
                               >
                                   <Label>Password</Label>
                                   <Input placeholder="Enter your password" />
                                   <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                   <FieldError />
                               </TextField>
                               <div className="flex gap-2">
                                   <Button type="submit" className={'bg-fuchsia-900'}>
                                       <Check />
                                       SignIn
                                   </Button>
                                   <Button type="reset" variant="secondary" className={'text-fuchsia-900'}>
                                       Reset
                                   </Button>
                               </div>
                                <h3 className="my-3 font-semibold text-center text-fuchsia-900">Forget Password?</h3>
                            <Link href={'/register'}><Button  variant="outline" className={'w-full mb-4 text-fuchsia-900 border-fuchsia-900'}>Create a new Account</Button></Link>
                           </Form>
                          
                       </div>
        </div>
    );
};

export default SignIn;