import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

function Hamburger() {
  return (
    <svg
      className="h-6 w-6 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 17 14"
    >
      <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const response2 = await fetch("https://fakestoreapi.com/products/1");
  const products = await response.json();
  const product = await response2.json();
  return (
    <>
      <div className="items-center gap-4 hidden md:flex mb-10">
        <Link href="/">코드잇 단기심화</Link>
        <Link href="/bootcamp">부트캠프</Link>
        <Link href="/job-support">취업 지원</Link>
        <Link href="/blog">후기&블로그</Link>
      </div>
      {/* 모바일 버전 메뉴 */}
      <div className="block md:hidden">
        <Hamburger />
      </div>
      {/* lg 3열 md 2열 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: Product) => (
        <div key={product.id} className="border shadow-sm">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
    <div className="items-center md:flex md:text-2xl">
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <div>
        <h1 className="font-bold">{product.title}</h1>
        <p className="text-sm md:text-lg text-gray-500">{product.description}</p>
        <p className="font-bold">$ {product.price}</p>
      </div>
    </div>
    </>
  );
}
