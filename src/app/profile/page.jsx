'use client';
import { authClient } from "@/lib/auth-client";
import { PersonFill } from "@gravity-ui/icons";

import { Avatar, Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const ProfilePage = () => {
     const {
        data: session,
    } = authClient.useSession()
    const user = session?.user;

    const onSubmit=async(e)=> {
        e.preventDefault();
        const name=e.target.name.value;
        const image=e.target.image.value;

        await authClient.updateUser({
            name,
            image
        })
    }

    return (
        <div>
            <div className="w-96 mx-auto bg-gradient-to-r from-white to-gray-50 shadow-[0_0_20px_rgba(0,0,0,0.15)] mt-13 p-4  rounded-xl ">
                <h1 className="text-2xl font-bold text-center text-fuchsia-900 mb-9">My Profile</h1>
                <Avatar className="mx-auto mb-4 w-30 h-30">
                    <Avatar.Image alt="User Image" src={user?.image} />
                    <Avatar.Fallback className="text-4xl">{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2  className="text-2xl text-gray-900 font-semibold mb-1 text-center">{user?.name}</h2>
                <p className="text-gray-600 mb-4 text-center">Email: {user?.email}</p>


                <Modal>
                    <div className="flex justify-center my-9">
                        <Button variant="secondary">Update Profile</Button>
                    </div>
                    <Modal.Backdrop>
                        <Modal.Container placement="auto">
                            <Modal.Dialog className="sm:max-w-md">
                                <Modal.CloseTrigger />
                                <Modal.Header>
                                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                        <PersonFill className="size-5" />
                                    </Modal.Icon>
                                    <Modal.Heading>Update Profile</Modal.Heading>


                                </Modal.Header>
                                <Modal.Body className="p-6">
                                    <Surface variant="default">
                                        <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                            <TextField defaultValue={user?.name}  className="w-full " name="name" type="text">
                                                <Label>Name</Label>
                                                <Input placeholder="Edit  name" className={'border-white '}/>
                                            </TextField>
                                            <TextField defaultValue={user?.image}  className="w-full " name="image" type="text">
                                                <Label>Image</Label>
                                                <Input placeholder="Edit image URL"  className={'border-white '}/>
                                            </TextField>
                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary">
                                                    Cancel
                                                </Button>
                                                <Button slot="close" type="submit">
                                                    Update
                                                </Button>
                                            </Modal.Footer>

                                        </form>
                                    </Surface>
                                </Modal.Body>

                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
    );
};

export default ProfilePage;