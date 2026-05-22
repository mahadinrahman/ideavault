'use client'
import { authClient } from "@/lib/auth-client";
import { Envelope, PencilToLine } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CommentEdit = ({ data }) => {

    const router = useRouter();
   
      const {
               data: session,
           } = authClient.useSession()
           const user = session?.user;
           // console.log(user);

    const onSubmit = async (e) => {
       

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const edit = Object.fromEntries(formData.entries());


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${data._id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                comment: edit.comment,
                userEmail: user?.email
            })


        })
        const datas = await res.json();
        console.log(datas);


        if (res.ok) {
            toast.success("Edit is successfully done!");
            router.refresh();
        }else{
            toast.error("Edit is error!"); 
        }

    }
    return (
        <div>
            <Modal>
                <Button variant="secondary">Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <PencilToLine></PencilToLine>
                                </Modal.Icon>
                                <Modal.Heading>Edit Comment</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <textarea
                                            rows="2"
                                            name='comment'
                                             defaultValue={data?.comment}
                                            placeholder="Please create a comment..."
                                            className="w-11/12 ml-4 md:ml-6  border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-800"
                                        ></textarea>
                                        <Modal.Footer>
                                            <Button slot="close" variant="outline">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close" variant="secondary">Edit</Button>
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

export default CommentEdit;