import { calculateBreadth } from "../../../engine/breadthEngine/advanceDecline";

export async function GET() {
  const data = [
    { symbol: "RELIANCE", price: 2500 },
    { symbol: "TCS", price: 3500 }
  ];

  const breadth = calculateBreadth(data);

  return Response.json({
    stocks: data,
    breadth
  });
}