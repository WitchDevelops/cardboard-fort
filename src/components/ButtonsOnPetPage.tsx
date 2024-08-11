import { Button } from '@/components/ui/button';
import { TbEdit } from 'react-icons/tb';
import { TbDotsVertical } from 'react-icons/tb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export const ButtonsOnPetPage = () => {
  return (
    <div className="flex justify-end gap-2 py-2">
      <Button className="flex items-center gap-2">
        <TbEdit /> Edit
      </Button>

      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-primary hover:bg-primary-hover text-white rounded-md text-sm px-4 py-2">
            <TbDotsVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <AlertDialogTrigger className="text-danger hover:text-danger-hover w-full">
                Delete pet
              </AlertDialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this pet?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This is destructive and final operation. It will permanently
              delete the pet and all its data. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => console.log('cancel btn clicked')}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => console.log('delete btn clicked')}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
