import React from "react";
import { ArrowRight, CalendarDays, Clock3, MessageCircle } from "lucide-react";

import sambitImg from "../assets/sambit-panda.jpg";

const OfferBanner = () => {
  // Put your actual WhatsApp link here
  const whatsappLink = "YOUR_WHATSAPP_LINK_HERE";

  const handleWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#080d12]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080d12] via-[#111923] to-[#080d12]" />

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-orange-500/10 blur-[160px]" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="text-center md:text-left">

            {/* IM */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none text-blue-300">
              IM
            </h1>

            {/* SAMBIT PANDA */}
            <h2 className="mt-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none text-white">
              SAMBIT PANDA
            </h2>

            {/* 2-DAY MASTER CLASS */}
            <div className="inline-block mt-4 border border-gray-500 rounded-md px-4 py-1">

              <p className="text-lg sm:text-xl md:text-2xl tracking-[0.15em] font-bold text-white">
                2-DAY MASTER CLASS
              </p>

            </div>

            {/* International Master | Peak Rating 2452 */}
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm sm:text-base">

              <span>
                International Master
              </span>

              <span className="text-gray-500">
                |
              </span>

              <span>
                Peak Rating 2452
              </span>

            </div>


            {/* =====================================================
                TOPICS
            ====================================================== */}

            <div className="mt-6 space-y-2 max-w-md mx-auto md:mx-0">

              {/* Thinking in Quiet Positions */}
              <div className="flex items-center gap-4 border-b border-gray-700/70 pb-2">

                <div className="w-12 h-12 shrink-0 rounded-lg border border-gray-600 bg-[#111b23] flex items-center justify-center text-2xl">
                  ♟
                </div>

                <p className="text-left text-gray-200 text-sm sm:text-base leading-tight">
                  Thinking in
                  <br />
                  Quiet Positions
                </p>

              </div>


              {/* When Should You Calculate? */}
              <div className="flex items-center gap-4 border-b border-gray-700/70 pb-2">

                <div className="w-12 h-12 shrink-0 rounded-lg border border-gray-600 bg-[#111b23] flex items-center justify-center text-2xl">
                  🧠
                </div>

                <p className="text-left text-gray-200 text-sm sm:text-base leading-tight">
                  When Should
                  <br />
                  You Calculate?
                </p>

              </div>


              {/* Improving Your Pieces */}
              <div className="flex items-center gap-4 border-b border-gray-700/70 pb-2">

                <div className="w-12 h-12 shrink-0 rounded-lg border border-gray-600 bg-[#111b23] flex items-center justify-center text-2xl">
                  🎯
                </div>

                <p className="text-left text-gray-200 text-sm sm:text-base leading-tight">
                  Improving
                  <br />
                  Your Pieces
                </p>

              </div>


              {/* Converting Small Advantages */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 shrink-0 rounded-lg border border-gray-600 bg-[#111b23] flex items-center justify-center text-2xl">
                  🏆
                </div>

                <p className="text-left text-gray-200 text-sm sm:text-base leading-tight">
                  Converting
                  <br />
                  Small Advantages
                </p>

              </div>

            </div>


            {/* =====================================================
                PRICE
            ====================================================== */}

            <div className="mt-7 flex justify-center md:justify-start">

              <div className="flex items-center gap-3 rounded-xl border border-gray-600 bg-[#101820] px-4 py-2">

                <span className="text-4xl sm:text-5xl font-black text-white">
                  ₹899
                </span>

                <span className="rounded-lg bg-blue-300 px-3 py-2 text-xl sm:text-2xl font-black text-black">
                  ONLY
                </span>

              </div>

            </div>


            {/* =====================================================
                DATE / TIME / DURATION
            ====================================================== */}

            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">

              {/* 2 Days */}
              <div className="flex items-center gap-2">

                <CalendarDays
                  size={27}
                  className="text-white"
                />

                <div className="text-left">
                  <p className="text-white font-semibold text-sm">
                    2 Days
                  </p>

                  <p className="text-gray-400 text-xs">
                    3 Hours Total
                  </p>
                </div>

              </div>


              {/* Divider */}
              <div className="hidden sm:block h-10 w-px bg-gray-600" />


              {/* 8 PM IST */}
              <div className="flex items-center gap-2">

                <Clock3
                  size={27}
                  className="text-white"
                />

                <div className="text-left">
                  <p className="text-white font-semibold text-sm">
                    8 PM IST
                  </p>

                  <p className="text-gray-400 text-xs">
                    1.5 Hrs / Day
                  </p>
                </div>

              </div>

            </div>


            {/* =====================================================
                BOTTOM INFORMATION
            ====================================================== */}

            <div className="mt-5 inline-block rounded-lg border border-gray-600 bg-[#111a21] px-4 py-2">

              <p className="text-gray-300 text-xs sm:text-sm">
                2 Days
                <span className="mx-3 text-gray-500">•</span>
                3 Hours
                <span className="mx-3 text-gray-500">•</span>
                Live Master-Level Training
              </p>

            </div>


            {/* =====================================================
                JOIN NOW BUTTON
            ====================================================== */}

            <div className="mt-5">

              <button
                onClick={handleWhatsApp}
                className="
                  group
                  w-full
                  sm:w-auto
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-blue-300
                  px-6
                  py-3
                  text-base
                  sm:text-lg
                  font-black
                  text-black
                  transition-all
                  duration-300
                  hover:bg-blue-200
                  hover:scale-[1.02]
                  shadow-lg
                "
              >

                LIMITED SEATS — JOIN NOW!

                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </button>

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE IMAGE
          ====================================================== */}

          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute inset-10 bg-blue-500/10 blur-[100px] rounded-full" />

            <div className="relative w-full max-w-[560px]">

              <img
                src={sambitImg}
                alt="IM Sambit Panda - 2-Day Master Class"
                className="
                  relative
                  w-full
                  h-auto
                  rounded-2xl
                  object-cover
                  shadow-2xl
                  border
                  border-white/10
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OfferBanner;