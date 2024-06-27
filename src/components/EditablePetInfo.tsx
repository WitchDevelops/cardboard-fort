import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

//TODO: define type 'pet' in a separate file and import it here
interface EditablePetInfoProps {
  pet: {
    name: string;
    breed?: string;
    date_of_birth: string;
    species: string;
    neutered: boolean;
    bio: string;
    gender?: 'female' | 'male';
    img?: string;
  };
}

export const EditablePetInfo = ({ pet }: EditablePetInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(pet);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // TODO: Send the updated data to the database
    setIsEditing(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  if (isEditing) {
    return (
      // TODO: make it look nicer, maybe use a component or something
      <form className="flex flex-col justify-between h-full">
        <div className="sm:grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label className="font-bold">Pet Name:</label>
            <input
              className="border px-2 py-1 rounded-md"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={formData.breed || ''}
              onChange={handleInputChange}
            />
          </label>
          {/* <label>
          Date of Birth:
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth.toISOString().split('T')[0]}
            onChange={handleInputChange}
          />
        </label> */}
          <label>
            Species:
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Neutered:
            <input
              type="checkbox"
              name="neutered"
              checked={formData.neutered}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div className="flex justify-end mt-4">
          <Button className="text-white" onClick={handleSaveClick}>
            Save
          </Button>
        </div>
      </form>
    );
  }

  return (
    // TODO: refactor this code
    <div className="flex flex-col justify-between h-full">
      <div className="sm:grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <p className="font-bold">Pet Name:</p>
          <p className="border px-2 py-1 rounded-md">{formData.name}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Microchip:</p>
          <p className="border px-2 py-1 rounded-md">N/A</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Species:</p>
          <p className="border px-2 py-1 rounded-md">{formData.species}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Breed:</p>
          <p className="border px-2 py-1 rounded-md">
            {formData.breed || 'N/A'}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Neutered:</p>
          <p className="border px-2 py-1 rounded-md">
            {formData.neutered ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Born on:</p>
          <p className="border px-2 py-1 rounded-md">
            {formData.date_of_birth}
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button className="text-white" onClick={handleEditClick}>
          Edit
        </Button>
      </div>
    </div>
  );
};
