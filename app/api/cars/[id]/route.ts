
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json();
  return new Response(`Received PUT request for car ID ${params.id} with data: ${JSON.stringify(data)}`);
}

export async function DELETE({ params }: { params: { id: string } }) {
  return new Response(`Received DELETE request for car ID ${params.id}`);
}

export async function GET({ params }: { params: { id: string } }) {
  return new Response(`Hello, this is the API route responding to GET requests for car ID ${params.id}!`);
}