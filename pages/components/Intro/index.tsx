import Link from "next/link";
import Image from "next/image";

export default function About () {
    return (
    <>
        <div className="flex px-20 pt-28 pb-10 bg-[url('/hero-back.png')] bg-center bg-cover bg-no-repeat justify-between items-center text-[white]">
            <div className="flex-col w-1/2">
                <div className="font-[900] text-[50px]">Lightning <span className="text-[#FF6DF4]">Farron</span></div>
                <div className="text-[15px]">
                    Unleash the power of Lightning with the Lightning Token, a cryptocurrency that embodies her unwavering determination and heroic nature. Join the revolution and embark on an epic journey in the world of crypto, where Lightning's strength and resilience will guide you towards potential riches. Invest in Lightning Token and embrace the path to financial success!
                </div>
            </div>
            <div>
                <Image alt="lightning-hero" width="400" height="600" src="/lightning-hero.png"></Image>
            </div>
        </div>
    </>
    );
}