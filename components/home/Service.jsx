import Image from 'next/image';

export default function Service() {
    const products = [
        { id: 1, name: "Furniture", desc: "Premium crafted design", img: "/images/1.jpg", price: "$10" },
        { id: 2, name: "Door", desc: "Spacious & elegant dining", img: "/images/5.jpg", price: "$30" },
        { id: 3, name: "Table", desc: "Perfect compact style", img: "/images/2.jpg", price: "$25" },
        { id: 4, name: "Chair", desc: "Comfortable quality seating", img: "/images/4.jpg", price: "$15" },
    ];

    return (
        <section id="service" className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold mb-6 text-left">Service</h2>
            <div className="">
                <p className="text-gray-600 mb-3 text-lg">Discover our premium collection of home essentials designed for comfort and style.</p>
                <nav className="flex flex-wrap gap-4 mb-5 text-gray-600 items-center">
                    <p className="hover:text-black transition text-sm md:text-base">Consultation</p>
                    <p className="hover:text-black transition text-sm md:text-base">Design Approval</p>
                    <p className="hover:text-black transition text-sm md:text-base">Production</p>
                    <p className="hover:text-black transition text-sm md:text-base">Delivery & Install</p>
                    <button className="border border-black/40 p-2 md:w-50 rounded-full text-black -mt-1 hover:bg-[#3a2a1a] hover:text-white transition text-sm md:text-base">Custom Service</button>
                </nav>
            </div>
            <div className="flex lg:grid gap-8 overflow-x-auto lg:overflow-x-visible pb-4 md:pb-0 lg:grid-cols-4 p-6 bg-[#8c7c4d]/40 rounded-sm backdrop-blur-md border border-black/10">
                {products.map((product) => (
                    <div key={product.id} className="shrink-0 w-64 lg:w-auto rounded-lg overflow-hidden">
                        <Image src={product.img} alt={product.name} width={250} height={300} className="w-full h-64 object-cover rounded-lg"/>
                        <div className="p-4 -mx-3">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600 text-sm">{product.desc}</p>
                            <div className="mt-3 flex items-center justify-between">
                                {parseFloat(product.price.replace('$', '')) >= 15 ? (
                                    <span className="text-white text-sm bg-[#3a2a1a] p-2 rounded-2xl w-30 text-center -ml-1 mb-2">Start {product.price}</span>
                                ) : (
                                    <span className="text-white text-sm bg-[#3a2a1a] p-2 rounded-2xl w-30 text-center -ml-1 mb-2">Start {product.price}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}