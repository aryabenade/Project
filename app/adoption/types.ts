// types.ts in app/adoption/

export interface Pet {
    id?: number;
    name: string;
    breed: string;
    age: number;
    category: string;
    state: string;
    city: string;
    contact: string;
    image: string | null;
  }
  