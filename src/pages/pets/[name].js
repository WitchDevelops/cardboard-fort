import { mockPets } from "@/data/data";

export async function getStaticPaths() {
  const paths = mockPets.map((pet) => ({
    params: { name: pet.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pet = mockPets.find((pet) => pet.name === params.name);

  return {
    props: { pet },
  };
}

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PetPage({ pet }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Born on: {pet.dateOfBirth}</p>
        <p>Species: {pet.species}</p>
        <p>Neutered: {pet.neutered ? "Yes" : "No"}</p>
        <p>Bio: {pet.bio}</p>
        {/* Add more pet data here */}
      </CardContent>
    </Card>
  );
}
