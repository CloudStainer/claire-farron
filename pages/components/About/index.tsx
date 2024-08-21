import Image from "next/image";

export default function About () {
    return (
    <>
        <div className="flex pt-25 pb-15 px-20 bg-[url('/about-back.png')]">
            <div className="flex relative w-1/2 pt-24 pb-24">
                <div className="flex absolute top-24 left-0 bg-[#FF6DF4] w-[300px] h-[300px] rounded-[20px] rotate-12"></div>
                <div className="flex relative bg-[url('/about-image.png')] w-[300px] h-[300px] rounded-[20px] bg-center bg-cover bg-no-repeat"></div>
            </div>
            <div className="flex flex-col w-1/2 pt-24">
                <div className="text-[20px] font-[600]">About Us</div>
                <div className="text-[30px] font-[900]">
                    IT'S TIME TO "EMBRACE"<br /><span className="text-[#FF6DF4]">THE FINAL LIGHTNING TOKEN!</span>
                </div>
                <div className="text-[15px]">
                    The Final Lightning Token is a community-driven cryptocurrency inspired by the fierce and determined character, Final Lightning. We aim to unite fans of the Final Fantasy series and crypto enthusiasts in an exciting and potentially rewarding venture. Reflecting Lightning's unwavering resolve, we strive to make our token a symbol of resilience, unity, and the ever-expanding possibilities of blockchain technology. Join us on this thrilling journey as we harness the power of the Final Lightning to forge a brighter future in the realm of cryptocurrencies.
                </div>
                <div className="flex items-center rounded-[50px] bg-[#FF6DF4] w-[150px] h-[40px] px-2 text-[white] mt-5 font-[500]">
                    <Image alt="lightning icon" width="30" height="30" src="/lightning-icon.png"></Image>
                    Buy Lightning
                </div>
            </div>
        </div>
    </>
    );
}