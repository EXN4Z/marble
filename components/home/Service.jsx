import Image from 'next/image';

export default function Service() {
    const products = [
        { id: 1, name: "Furniture", desc: "Premium crafted design", img: "/images/1.jpg", price: "$10" },
        { id: 2, name: "Large Table", desc: "Spacious & elegant dining", img: "/images/2.jpg", price: "$30" },
        { id: 3, name: "Medium Table", desc: "Perfect compact style", img: "/images/3.jpg", price: "$25" },
        { id: 4, name: "Chair", desc: "Comfortable quality seating", img: "/images/4.jpg", price: "$15" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-10">
            <h2 className="text-3xl font-bold mb-8 text-left">Example Products</h2>
            <div className="flex lg:grid gap-8 overflow-x-auto lg:overflow-x-visible pb-4 md:pb-0 lg:grid-cols-4 shadow-xl p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/20">
                {products.map((product) => (
                    <div key={product.id} className="shrink-0 w-64 lg:w-auto rounded-lg overflow-hidden hover:shadow-lg transition">
                        <Image src={product.img} alt={product.name} width={250} height={300} className="w-full h-64 object-cover rounded-lg"/>
                        <div className="p-4 -mx-3">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.desc}</p>
                            <div className="mt-3 flex items-center justify-between">
                                {parseFloat(product.price.replace('$', '')) >= 15 ? (
                                    <span className="text-white text-sm font-semibold bg-[#373737] p-2 rounded-2xl w-20">Start {product.price}</span>
                                ) : (
                                    <span className="text-white text-sm font-semibold bg-[#373737] p-2 rounded-2xl w-20">Start {product.price}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}