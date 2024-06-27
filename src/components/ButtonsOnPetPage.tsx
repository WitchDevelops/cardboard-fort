import { Button } from '@/components/ui/button';
import { TbEdit } from 'react-icons/tb';
import { TbDotsVertical } from 'react-icons/tb';

export const ButtonsOnPetPage = () => {
  return (
    <div className="flex justify-end gap-2 py-2">
      <Button className="flex items-center gap-2">
        <TbEdit /> Edit
      </Button>
      <Button>
        <TbDotsVertical />
      </Button>
    </div>
  );
};
