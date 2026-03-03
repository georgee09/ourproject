import { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const bookings = await getDocs(collection(db, "my_rented_cars"));
  const response = bookings.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return Response.json(response);
}