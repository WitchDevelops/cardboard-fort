import React, { useState } from 'react';

interface EditablePetInfoProps {
  pet: {
    name: string;
    breed?: string;
    date_of_birth: Date;
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
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
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
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
      </form>
    );
  }

  return (
    <div>
      <p>Name: {formData.name}</p>
      <p>Breed: {formData.breed || 'N/A'}</p>
      {/* <p>Date of Birth: {formData.date_of_birth.toLocaleDateString()}</p> */}
      <p>Species: {formData.species}</p>
      <p>Neutered: {formData.neutered ? 'Yes' : 'No'}</p>
      <p>Bio: {formData.bio}</p>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
};
