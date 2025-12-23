import { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const cars = await getDocs(collection(db, "newcars"));
  const response = cars.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return Response.json(response);
}

export async function POST(request: Request) {
  const data = await request.json();
  return new Response(`Received POST request with data: ${JSON.stringify(data)}`);
}