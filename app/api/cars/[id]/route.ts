import { getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest,
   { params }: { params: { id: string } }) {
  const data = await request.json();
  // this comment
  // fetch the specific car document by id from Firestore
  const carRef = doc(db, "newcars", params.id);
  const carSnap = await getDoc(carRef);
  if (!carSnap.exists()) {
    return new Response(`Car with ID ${params.id} not found`, { status: 404 });
  }
  const carData = carSnap.data();
  updateDoc(carRef, data);
  return new Response(`Received PUT request for car ID ${params.id} with data: ${JSON.stringify(data)}; fetched car: ${JSON.stringify(carData)}`);
}

export async function DELETE({ params }: { params: { id: string } }) {
  const carRef = doc(db, "newcars", params.id);
  const carSnap = await getDoc(carRef);
  if (!carSnap.exists()) {
    return new Response(`Car with ID ${params.id} not found`, { status: 404 });
  }
  // deleteDoc(carRef);
  return NextResponse.redirect(new URL("/"));
}

export async function GET({ params }: { params: { id: string } }) {
  return new Response(`Hello, this is the API route responding to GET requests for car ID ${params.id}!`);
}