import React from "react";

export default function Tagline() {
    return (
        <section className="bg-custom-black w-full pt-16 md:pt-24 pb-8 md:pb-16 overflow-hidden">
            <div className="max-w-[1243px] mx-auto px-4 sm:px-8">
                <div className="flex flex-col w-full font-thomeo text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[125px] leading-[0.85] tracking-tight uppercase">

                    {/* Top Line */}
                    <div className="flex items-baseline w-full">
                        <span className="text-[#fffffa]">REFRESH</span>
                        <span className="text-custom-secondary ml-4">IDEAS</span>
                        <span className="text-[#fffffa]">.</span>
                    </div>

                    {/* Bottom Line */}
                    <div className="flex items-baseline w-full mt-2 lg:mt-4">
                        <span className="text-[#fffffa]">REBOOT</span>
                        <span className="text-custom-secondary ml-4">SOLUTIONS</span>
                        <span className="text-[#fffffa]">.</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
