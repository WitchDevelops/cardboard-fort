import React from "react";
import { mockPets } from "@/data/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const PetCard = ({ name, dateOfBirth }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Born on {dateOfBirth}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/pets/${name}`}>
          <Button>See more</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
