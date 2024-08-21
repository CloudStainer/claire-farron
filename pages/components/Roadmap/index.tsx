import Image from "next/image";

export default function Roadmap () {
    return (
    <>
        <div className="flex flex-row w-full h-[600px] py-10 px-6 bg-[url('/roadmap-back.png')] bg-center bg-cover bg-no-repeat">
            <div className="flex flex-col w-5/12">
                <div className="text-[20px] font-[700]">ROADMAP</div>
                <div className="text-[40px] font-[700]">A LOOK INTO <br/>ROADMAPS SEASONS</div>
                <div className="text-[15px]">
                    The Final Lightning Token is a community-driven cryptocurrency inspired by the fierce and determined character, Final Lightning. We aim to unite fans of the Final Fantasy 
                </div>
            </div>
            <div className="container my-auto mx-10">
                <div className="flex space-y-4 overflow-y-auto pb-4 scrollbar-thin scrollbar-thumb-[#FF6DF4] scrollbar-track-gray-200">
                    <div className="flex justify-between border-2 border-[white] backdrop-blur-[46.4px] rounded-[15px]">
                        <div className="flex flex-col py-3 pl-5">
                            <div className="text-[30px] font-[800]">Step 1</div>
                            <div>
                                *  Launch, DEX Listing<br />
                                *  CoinGecko/Coinmarketcap Listings<br />
                                *  1,500+ Holders<br />
                                *  Launch - Unleashing the Lightning Token
                            </div>
                        </div>
                        <Image alt="roadmap-1" src="/roadmap-1.png" width="100" height="200"></Image>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}