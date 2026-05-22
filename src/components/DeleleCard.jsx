"use client";
import {AlertDialog, Button} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleleCard = ({data}) => {
     const router = useRouter();
    
     const handleDelete = async () => {
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${data._id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
               
    
            });
    
            const deleteResult = await res.json();
    
    
            if (res.ok) {
                toast.success("Deleted!");
                router.refresh();
            }else{
               toast.error("Deleted is worng!");
            }
    
        };
    
    return (
        <div>
             <AlertDialog>
     <Button variant='danger' className={'w-full my-2'}>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Idea permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body >
              <p>
                This will permanently delete <strong>{data.title}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Permanently
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleleCard;