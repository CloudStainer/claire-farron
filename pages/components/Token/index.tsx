import Image from "next/image";

export default function Token () {
    return (
    <>
        <div className="flex flex-col pt-20 pb-14 px-14 bg-[url(/token-back.png)] bg-center bg-no-repeat bg-cover items-center text-center w-full">
            <div className="text-[20px] font-[600]">Tokenomics</div>
            <div className="text-[30px] font-[900]">
                IT'S TIME TO "EMBRACE"<br /><span className="text-[#FF6DF4]">THE FINAL LIGHTNING TOKEN!</span>
            </div>
            <div className="text-[15px] w-2/3">
                The Final Lightning Token is a community-driven cryptocurrency inspired by the fierce and determined character, Final Lightning. We aim to unite fans of the Final Fantasy 
            </div>
            <div className="flex flex-row gap-3 text-[white] mt-5">
                <div className="flex flex-col border-2 border-[white] rounded-[10px] backdrop-blur-[46.4px] items-center p-4 w-[180px]">
                    <Image alt="token-1" width="60" height="60" src="/token-1.png"></Image>
                    <div className="font-[500] text-[15px] mt-2">TOKEN SUPPLY</div>
                    <div className="font-[800] text-[18px]">1,000,000,000</div>
                </div>
                <div className="flex flex-col border-2 border-[white] rounded-[10px] backdrop-blur-[46.4px] items-center p-4 w-[180px]">
                    <Image alt="token-1" width="60" height="60" src="/token-2.png"></Image>
                    <div className="font-[500] text-[15px] mt-2">LIQUIDITY POOL</div>
                    <div className="font-[800] text-[18px]">LP Burned</div>
                </div>
                <div className="flex flex-col border-2 border-[white] rounded-[10px] backdrop-blur-[46.4px] items-center p-4 w-[180px]">
                    <Image alt="token-1" width="60" height="60" src="/token-3.png"></Image>
                    <div className="font-[500] text-[15px] mt-2">TAX</div>
                    <div className="font-[800] text-[18px]">1% Buy/Sell Tax</div>
                </div>
                <div className="flex flex-col border-2 border-[white] rounded-[10px] backdrop-blur-[46.4px] items-center p-4 w-[180px]">
                    <Image alt="token-1" width="60" height="60" src="/token-4.png"></Image>
                    <div className="font-[500] text-[15px] mt-2">OWNERSHIP</div>
                    <div className="font-[800] text-[18px]">Renounced</div>
                </div>
            </div>
            <div className="flex flex-row bg-[#FF6DF4] text-[white] rounded-[30px] items-center mt-3 pl-3 pr-1 py-1 font-[600]">
                Contract Address: 0x8Ef6a16F6fa2A8e06190d46E559f4B1EE90FF3Af
                <div className="flex items-center rounded-[50px] bg-[white] w-[150px] h-[40px] ml-2 px-2 text-[#FF6DF4] font-[500]">
                    <Image alt="lightning icon" width="30" height="30" src="/lightning-icon.png"></Image>
                    Buy Lightning
                </div>
            </div>
        </div>
    </>
    );
}