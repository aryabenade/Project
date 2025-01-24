// pages/api/pets.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle adding a new pet
    const { name, age, category, breed, state, city, contact, image } = req.body;
    try {
      const pet = await prisma.pet.create({
        data: {
          name,
          age: parseInt(age, 10),
          category,
          breed,
          state,
          city,
          contact,
          image,
        },
      });
      res.status(201).json(pet);
    } catch (error) {
      res.status(500).json({ error: "Failed to create pet" });
    }
  } else if (req.method === 'GET') {
    // Handle fetching all pets
    try {
      const pets = await prisma.pet.findMany();
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pets" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
