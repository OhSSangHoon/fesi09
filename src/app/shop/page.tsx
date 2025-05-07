import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "멋진 시계",
    price: 19000,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "액세서리",
  },
  {
    id: 2,
    name: "멋진 선글라스! 완전 멋진 시계인데 안사실 겁니까?",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "액세서리",
  },
  {
    id: 3,
    name: "멋진 러닝화",
    price: 55000,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    category: "신발",
  },
  {
    id: 4,
    name: "가죽 크로스백",
    price: 75000,
    imageUrl:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFnfGVufDB8fDB8fHww",
    category: "가방",
  },
  {
    id: 5,
    name: "니트 스웨터",
    price: 38000,
    imageUrl:
      "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "의류",
  },
  {
    id: 6,
    name: "셔츠",
    price: 28000,
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww",
    category: "의류",
  },
];

export default function Shop() {
  return (
    // mx-auto: 중앙 배치
    // max-w-7xl: 최대 너비 제한
    // px-4: 좌우 패딩
    // py-8: 상하 패딩
    <section className="mx-auto max-w-7xl px-4 py-8 ">
      {/* mb-6: 아래 요소와의 간격 */}
      {/* text-2xl: 텍스트 크기 */}
      {/* font-bold: 폰트 굵기 */}
      <h2 className="mb-6 text-2xl font-bold">인기 상품</h2>

      {/* 상품 필터링 부분 */}
      <div className="mb-6 flex gap-2">
        {/* rounded-md: 둥근 모서리 */}
        {/* bg-blue-500: 버튼 배경색 */}
        {/* px-4: 좌우 패딩 */}
        {/* py-2: 상하 패딩 */}
        {/* text-white: 텍스트 색상 */}
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
          전체
        </button>
        {/* rounded-md: 둥근 모서리 */}
        {/* bg-gray-200: 버튼 배경색 */}
        {/* px-4: 좌우 패딩 */}
        {/* py-2: 상하 패딩 */}
        <button className="rounded-md bg-gray-200 px-4 py-2">의류</button>
        <button className="rounded-md bg-gray-200 px-4 py-2">신발</button>
        <button className="rounded-md bg-gray-200 px-4 py-2">가방</button>
        <button className="rounded-md bg-gray-200 px-4 py-2">액세서리</button>
      </div>

      {/* 상품 그리드 */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <Link href={`/products/${product.id}`}>
              {/* aspect-square: 정사각형 비율 */}
              <div className="aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  // h-full: 높이 100%
                  // w-full: 너비 100%
                  // object-cover: 이미지 비율 유지
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                />
              </div>

              {/* p-4: 패딩 */}
              <div className="p-4">
                {/* text-sm: 텍스트 크기 */}
                {/* text-gray-500: 텍스트 색상 */}
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
                {/* mb-1: 아래 요소와의 간격 */}
                {/* truncate: 텍스트 자르기 */}
                {/* font-medium: 폰트 굵기 */}
                <h3 className="mb-1 truncate font-medium">{product.name}</h3>
                <p className="font-bold">{product.price.toLocaleString()}원</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}