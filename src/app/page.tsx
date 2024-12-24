import { getDatas } from "../service/querys";
import Card from "../components/card";

export default async function Home() {
    const data = await getDatas();
    return (
        <div className="container mx-auto max-w-[1200px] py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                List of Phones
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((item) => (
                    <li
                        key={item.id}
                        className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform p-[10px] text-center"
                    >
                        <Card {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
