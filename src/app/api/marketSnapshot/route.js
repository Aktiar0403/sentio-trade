export async function GET() {
  return Response.json([
    { symbol: "RELIANCE", price: 2500 },
    { symbol: "TCS", price: 3500 }
  ]);
}