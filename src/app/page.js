import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col item-center justifiy-between p-24">
    <h1>Bienvenidos al Blog</h1>
    <Link href="/blog">Ir al blog</Link>
  </main>
  
  );
}
