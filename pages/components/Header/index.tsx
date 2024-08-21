import Link from "next/link";
import Image from "next/image";

export default function Header () {
    return(
    <>
        <div className="fixed flex w-full justify-between px-5 pt-4 pb-2 text-[white]">
            <div className="font-[22px] font-['Nortune']">
                Lightning <span className="text-[#FF6DF4]">Farron</span>
            </div>
            <div className="flex flex-row gap-5">
                <Link href="#">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#tokenomics">Tokenomics</Link>
                <Link href="#roadmap">Roadmap</Link>
            </div>
            <div className="flex items-center rounded-[50px] bg-[#FF6DF4] w-[150px] h-[40px] px-2 font-[500]">
                <Image alt="lightning icon" width="30" height="30" src="/lightning-icon.png"></Image>
                Buy Lightning
            </div>
        </div>
    </>
    )
}