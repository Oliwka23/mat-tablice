import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">📘 Mat-Tablice</h1>
      <p className="mb-6">Wybierz dział tablic matematycznych:</p>
      <ul className="list-disc ml-6">
        <li><Link href="/logarytmy" className="text-blue-400 underline">Logarytmy</Link></li>
      </ul>
    </main>
  );
}