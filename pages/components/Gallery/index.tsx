import Image from "next/image";

export default function Gallery () {
    return (
    <>
        <div className="flex flex-col bg-[url('/gallery-back.png')]">
            <div className="container mx-auto my-10">
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#FF6DF4] scrollbar-track-gray-200">
                    <Image alt="photo-1" src="/gallery-1.png" width="600" height="400" className="rounded-md border-8 border-[#FF6DF4]"></Image>
                    <Image alt="photo-2" src="/gallery-2.png" width="600" height="400" className="rounded-md border-8 border-[#FF6DF4]"></Image>
                    <Image alt="photo-3" src="/gallery-3.png" width="600" height="400" className="rounded-md border-8 border-[#FF6DF4]"></Image>
                </div>
            </div>
        </div>
    </>
    );
}