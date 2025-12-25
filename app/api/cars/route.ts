import { db } from "@/firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function GET() {
  const cars = await getDocs(collection(db, "newcars"));
  const response = cars.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return Response.json(response);
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const car = Object.fromEntries(data.entries());
  // access field in this car object
 const isAvailable = car.is_available ? true : false;
  addDoc(collection(db, "newcars"), {...car, is_available: isAvailable});
  // window.location.href = "http://localhost:3000/units";
  return Response.json({ message: {...car, is_available: isAvailable} });
}