export interface queryData {
    img: string;
    title: string;
    rame: string;
    color: string;
    brand: string;
    price: string;
    id: number;
}

export const getDatas = async (): Promise<queryData[]> => {
    const res = await fetch("http://localhost:3000/phones");

    const data = await res.json();
    return Array.isArray(data) ? data : [];
};
