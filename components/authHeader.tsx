import Image from "next/image";
import ghFlag from "@/app/images/ghFlag1.webp";
import Link from "next/link";

type Param = {
    text: string
};

export default function Header({text}: Param){

    
    return (
        <header className="flex justify-between items-center h-10  w-full">
            <Image src={ghFlag} alt="flag" height={90} width={50} className="round" />
            <Link className="text-[#4CAF50] text-md" href={`\\${text}`}>
                {text}
            </Link>
        </header>
    )
}