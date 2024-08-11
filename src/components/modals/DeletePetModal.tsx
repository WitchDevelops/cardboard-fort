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
import { TbTrashFilled } from 'react-icons/tb';

interface DeletePetModalProps {
  petName: string;
  onDelete: () => void;
}

export const DeletePetModal: React.FC<DeletePetModalProps> = ({
  petName,
  onDelete,
}) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Are you sure you want to delete {petName}?
        </AlertDialogTitle>
        <AlertDialogDescription>
          This is a destructive and final operation. It will permanently delete
          the pet and all its data. This cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="min-w-[100px]">Cancel</AlertDialogCancel>
        <AlertDialogAction
          className="min-w-[100px] flex items-center gap-2"
          onClick={onDelete}
        >
          <TbTrashFilled />
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
