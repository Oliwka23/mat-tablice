export default function Logarytmy() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Logarytmy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📐 Wzory</h2>
        <ul className="list-disc ml-6">
          <li>logₐ(b·c) = logₐb + logₐc</li>
          <li>logₐ(b/c) = logₐb - logₐc</li>
          <li>logₐ(bⁿ) = n·logₐb</li>
          <li>logₐb = log𝑐b / log𝑐a (zmiana podstawy)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧠 Zastosowanie</h2>
        <p>Logarytmy służą do rozwiązywania równań wykładniczych, pojawiają się w skalach logarytmicznych (pH, decybele, skala Richtera).</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📝 Przykład</h2>
        <p>Oblicz: log₂(6) + log₂(2/3)</p>
        <p>Rozwiązanie: log₂(6·2/3) = log₂(4) = 2</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">📊 Zadanie maturalne</h2>
        <p>Rozwiąż równanie: log₃(2x - 1) = log₃(7 - x)</p>
        <p>2x - 1 = 7 - x → 3x = 8 → x = 8/3</p>
      </section>
    </main>
  );
}