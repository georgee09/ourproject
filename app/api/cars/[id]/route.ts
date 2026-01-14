import { getDoc, doc, updateDoc, deleteDoc, query, collection, where, getDocs} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  params: Promise<{id: string}>;
}

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

export async function DELETE(
  req: NextRequest,
  {params}: RouteParams
) {
  const {id} = await params;
  // const carRef = doc(db, "newcars", id);
  let q = query(collection(db,"newcars"));
  q = query(q,where("id","==",id));
  const carSnap = await getDocs(q);
  if (carSnap.empty) {
    return new Response(`Car with ID ${id} not found`, { status: 404 });
  }
  // deleteDoc(carRef);
  return NextResponse.redirect(new URL("/units",req.url));
}

export async function GET({ params }: { params: { id: string } }) {
  return new Response(`Hello, this is the API route responding to GET requests for car ID ${params.id}!`);
}