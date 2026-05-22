"use client";
import { PencilToLine} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const EditCard = ({data}) => {
     const router = useRouter();


    const onSubmit =async(e)=>{
    e.preventDefault();
    const formData =new FormData(e.currentTarget);
    const update=Object.fromEntries(formData.entries());
    console.log(update);

    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${data._id}`,{

       method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(update)
    
    })
    const datas =await res.json();
    console.log(datas);

      if (res.ok) {
                    toast.success("Successfully Edited!");
                    router.refresh();
                }else {
      toast.error("Update failed!");
    }

 }
    return (
        <div>
             <Modal>
      <Button variant='outline' className={'w-full my-2 text-fuchsia-900 border border-fuchsia-900'}>Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <PencilToLine></PencilToLine>
              </Modal.Icon>
              <Modal.Heading className="">Edit </Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField defaultValue={data?.title} className="w-full" type="text" variant="secondary">
                    <Label>Title</Label>
                    <Input name="title" placeholder="Edit Title" />
                  </TextField>
                 
                  <TextField  defaultValue={data?.imageURL} className="w-full" ant="secondary">
                    <Label>Image</Label>
                    <Input name="imageURL"  placeholder="Edit Image" />
                  </TextField>
                  <div>
                        <label  className="block mb-2 font-semibold">
                            Category
                        </label>

                        <select
                            
                            name="category"
                            
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Edit Category</option>
                            <option value="Tech">Tech</option>
                            <option value="Health">Health</option>
                            <option value="AI">AI</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                                        <div>
                        <label className="block mb-2 font-semibold">
                            Edit Description
                        </label>

                        <textarea
                            name="shortDescription"
                           defaultValue={data?.shortDescription}
                            rows="2"
                            placeholder="Edit description..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Confirm Edit</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditCard;
