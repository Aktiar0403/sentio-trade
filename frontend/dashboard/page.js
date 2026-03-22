export default async function Page() {
  const res = await fetch("https://your-vercel-url/api/marketSnapshot");
  const data = await res.json();

  return (
    <div>
      <h1>SENTIO Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}