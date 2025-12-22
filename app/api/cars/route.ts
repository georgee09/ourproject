
export async function GET() {
  return new Response('Hello, this is the API route responding to GET requests!');
}

export async function POST(request: Request) {
  const data = await request.json();
  return new Response(`Received POST request with data: ${JSON.stringify(data)}`);
}