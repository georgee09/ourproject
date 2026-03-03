// Car Model/Interface for Firestore data
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  vin: string; // Vehicle Identification Number
  mileage: number;
  fuelType: "petrol" | "diesel" | "electric" | "hybrid";
  transmission: "manual" | "automatic";
  price: number;
  dailyRate?: number;
  weeklyRate?: number;
  monthlyRate?: number;
  seatingCapacity: number;
  description?: string;
  is_available: boolean;
  location: string;
  imageUrl?: string;
  images?: string[]; // Array of image URLs
  features?: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

// Type for creating a new car (without id)
export type CreateCarInput = Omit<Car, "id" | "createdAt" | "updatedAt">;

// Type for updating a car (all fields optional except id)
export type UpdateCarInput = Partial<Omit<Car, "id">> & { id: string };

// Type for car list response
export type CarListResponse = Car[];
