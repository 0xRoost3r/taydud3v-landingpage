"use client"

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";


export default function HomePage() {
  let words = `Đây là nơi gặp gỡ những con người đam mê sáng tạo, yêu thích công nghệ như blockchain, IoT, AI, Web3 và Design.\n`;
  words+= `Không phân biệt ngành nghề, lứa tuổi, chỉ cần bạn mê sáng tạo, muốn phiêu lưu tìm kiếm cái mới, thì hãy nhập hội để cùng vui!`;


  const handleJoin = () => {
    window.open('https://www.facebook.com/groups/591506370338723', '_blank');
  };

  return (
    <div className="min-h-screen w-screen rounded-md flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
        <TextHoverEffect text="TÂY DU D3V" />
        <div className="mt-4 font-normal text-neutral-300 max-w-2xl text-center">
          <TextGenerateEffect words={words} />
          <button onClick={handleJoin} className="relative px-2 md:px-4 py-1 md:py-2 mt-4 text-white text-xs md:text-sm transition duration-200 rounded-md bg-black/20 backdrop-blur-sm
            before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-gradient-to-r before:from-violet-500 before:via-pink-500 before:to-orange-500 before:animate-[border-rotate_3s_linear_infinite]
            [&::before]:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [&::before]:mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [&::before]:[-webkit-mask-composite:xor] [&::before]:[mask-composite:exclude]
            hover:before:opacity-75 hover:scale-105">
            Tham gia ngay!
          </button>
        </div>
      </div>
    </div>
  );
}
