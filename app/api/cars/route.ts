import { db } from "@/firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const cars = await getDocs(collection(db, "newcars"));
  const response = cars.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return Response.json(response);
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const car = Object.fromEntries(data.entries());
 const isAvailable = car.is_available ? true : false;
  addDoc(collection(db, "newcars"), {...car, is_available: isAvailable});
  return NextResponse.redirect(new URL("/units", request.url));
}