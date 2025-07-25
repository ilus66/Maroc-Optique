import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Maroc Optique – La revue de référence des professionnels de l’optique</title>
        <meta name="description" content="Revue professionnelle des opticiens et acteurs de la santé visuelle au Maroc." />
      </Head>
      <main className="bg-secondary min-h-screen font-sans">
        <header className="bg-primary text-white py-8 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Maroc Optique</h1>
          <p className="text-lg md:text-2xl italic">La revue de référence des professionnels de l’optique</p>
        </header>
        <section className="max-w-4xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-semibold mb-4">À propos</h2>
          <p className="mb-6">Maroc Optique accompagne les professionnels de l’optique et de la santé visuelle depuis plus de 20 ans. Retrouvez chaque trimestre des dossiers, interviews, innovations et actualités du secteur.</p>
          {/* Articles à la une et autres sections à venir */}
        </section>
      </main>
    </>
  );
}
