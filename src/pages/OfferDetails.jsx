import React, { useEffect, useRef } from "react";
import { MessageCircle, CalendarDays, Clock3, Trophy, Target } from "lucide-react";
import { gsap } from "gsap";

import coachImg from "../assets/sambit-panda.jpg";

const OfferDetails = () => {
  const heroRef = useRef(null);
  const coachRef = useRef(null);
  const cardsRef = useRef([]);
  const topicsRef = useRef(null);
  const registerRef = useRef(null);

  // ==========================================
  // WHATSAPP
  // ==========================================

  const whatsappNumber = "918984021185";

  const message =
    "Hi PawnRace! I want to get details and register for the 2-Day Master Class with IM Sambit Panda on October 3–4.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;


  // ==========================================
  // MASTER CLASS TOPICS
  // ==========================================

  const topics = [
    {
      icon: "♟",
      title: "Thinking in Quiet Positions",
      description:
        "Learn how to think and make strong decisions even when there are no immediate tactical opportunities."
    },
    {
      icon: "🧠",
      title: "When Should You Calculate?",
      description:
        "Understand when calculation is necessary and when you should rely on positional understanding."
    },
    {
      icon: "🎯",
      title: "Improving Your Pieces",
      description:
        "Learn how to identify poorly placed pieces and improve their positions during a game."
    },
    {
      icon: "🏆",
      title: "Converting Small Advantages",
      description:
        "Learn practical methods to turn small positional advantages into winning positions."
    }
  ];


  // ==========================================
  // GSAP ANIMATIONS
  // ==========================================

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(coachRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    gsap.from(cardsRef.current, {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      delay: 0.5,
      ease: "power3.out"
    });

    gsap.from(topicsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "power3.out"
    });

    gsap.from(registerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "power3.out"
    });
  }, []);


  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 px-5 sm:px-6">

      <div className="max-w-6xl mx-auto">


        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">


          {/* LEFT CONTENT */}

          <div ref={heroRef}>

            {/* DATE */}

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/40 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-5">

              <CalendarDays size={17} />

              OCTOBER 3–4

            </div>


            {/* TITLE */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">

              <span className="text-blue-300">
                IM
              </span>

              <br />

              <span className="text-white">
                SAMBIT PANDA
              </span>

            </h1>


            {/* MASTER CLASS */}

            <div className="inline-block border border-gray-500 rounded-lg px-4 py-2 mb-5">

              <h2 className="text-lg sm:text-xl tracking-[0.15em] font-bold">
                2-DAY MASTER CLASS
              </h2>

            </div>


            {/* RATING */}

            <p className="text-gray-400 mb-6">

              International Master

              <span className="mx-3 text-gray-600">
                |
              </span>

              Peak Rating

              <span className="text-white font-bold ml-1">
                2452
              </span>

            </p>


            {/* DESCRIPTION */}

            <p className="text-gray-400 text-lg leading-relaxed mb-7">

              Learn practical chess thinking and decision-making directly
              from International Master Sambit Panda through live
              master-level training.

            </p>


            {/* PRICE */}

            <div className="flex items-center gap-3 mb-7">

              <span className="text-5xl font-black text-white">
                ₹899
              </span>

              <span className="bg-blue-300 text-black px-3 py-2 rounded-lg text-xl font-black">
                ONLY
              </span>

            </div>


            {/* WHATSAPP BUTTON */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-green-600
                hover:bg-green-700
                px-7
                py-4
                rounded-xl
                font-bold
                text-lg
                transition-all
                hover:scale-[1.03]
                shadow-lg
                shadow-green-900/30
              "
            >

              <MessageCircle size={22} />

              Get Details on WhatsApp

            </a>

          </div>


          {/* =====================================================
              COACH IMAGE
          ====================================================== */}

          <div
            ref={coachRef}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-10 bg-blue-500/10 blur-[100px] rounded-full" />


              {/* Image Card */}

              <div className="relative bg-zinc-900 p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl">

                <img
                  src={coachImg}
                  alt="IM Sambit Panda"
                  className="
                    rounded-xl
                    w-full
                    max-w-[480px]
                    h-auto
                    object-cover
                  "
                />


                {/* Coach Information */}

                <div className="text-center mt-4 pb-2">

                  <h3 className="text-2xl font-bold text-white">
                    IM Sambit Panda
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    International Master
                  </p>

                  <p className="text-blue-300 text-sm mt-1">
                    Peak Rating: 2452
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            EVENT DETAILS
        ====================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">


          {/* DATE */}

          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="
              bg-zinc-900
              p-6
              rounded-xl
              border
              border-white/10
              text-center
              hover:border-blue-400/40
              transition
            "
          >

            <CalendarDays
              className="mx-auto mb-3 text-blue-300"
              size={30}
            />

            <p className="text-blue-300 text-sm font-bold">
              DATE
            </p>

            <h3 className="font-bold text-xl mt-1">
              October 3–4
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              2 Days
            </p>

          </div>


          {/* TIME */}

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="
              bg-zinc-900
              p-6
              rounded-xl
              border
              border-white/10
              text-center
              hover:border-blue-400/40
              transition
            "
          >

            <Clock3
              className="mx-auto mb-3 text-blue-300"
              size={30}
            />

            <p className="text-blue-300 text-sm font-bold">
              TIME
            </p>

            <h3 className="font-bold text-xl mt-1">
              8 PM IST
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              1.5 Hrs / Day
            </p>

          </div>


          {/* FORMAT */}

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="
              bg-zinc-900
              p-6
              rounded-xl
              border
              border-white/10
              text-center
              hover:border-blue-400/40
              transition
            "
          >

            <Trophy
              className="mx-auto mb-3 text-blue-300"
              size={30}
            />

            <p className="text-blue-300 text-sm font-bold">
              TRAINING
            </p>

            <h3 className="font-bold text-xl mt-1">
              Live Training
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              3 Hours Total
            </p>

          </div>

        </div>


        {/* =====================================================
            MASTER CLASS TOPICS
        ====================================================== */}

        <div
          ref={topicsRef}
          className="
            bg-zinc-900
            p-6
            sm:p-8
            rounded-2xl
            border
            border-white/10
            mb-16
          "
        >

          <div className="flex items-center gap-3 mb-7">

            <Target
              className="text-blue-300"
              size={28}
            />

            <h2 className="text-2xl sm:text-3xl font-bold">
              Master Class Topics
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 gap-5">

            {topics.map((topic, index) => (

              <div
                key={index}
                className="
                  bg-black/40
                  p-5
                  rounded-xl
                  border
                  border-white/10
                  hover:border-blue-400/40
                  transition
                "
              >

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      shrink-0
                      rounded-lg
                      bg-[#111b23]
                      border
                      border-gray-600
                      flex
                      items-center
                      justify-center
                      text-2xl
                    "
                  >
                    {topic.icon}
                  </div>


                  <div>

                    <h3 className="font-bold text-lg text-white">
                      {topic.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {topic.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            SESSION INFORMATION
        ====================================================== */}

        <div className="text-center mb-16">

          <div className="inline-block bg-zinc-900 border border-white/10 rounded-xl px-6 py-4">

            <p className="text-gray-300 text-sm sm:text-base">

              <span className="font-semibold text-white">
                2 Days
              </span>

              <span className="mx-3 text-gray-600">
                •
              </span>

              <span className="font-semibold text-white">
                3 Hours
              </span>

              <span className="mx-3 text-gray-600">
                •
              </span>

              <span className="font-semibold text-white">
                Live Master-Level Training
              </span>

            </p>

          </div>

        </div>


        {/* =====================================================
            LIMITED SEATS
        ====================================================== */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 rounded-lg font-bold text-lg shadow-lg">

            ⚠ Limited Seats Available

          </div>

        </div>


        {/* =====================================================
            REGISTRATION / WHATSAPP
        ====================================================== */}

        <div
          ref={registerRef}
          className="
            bg-gradient-to-br
            from-blue-400
            to-blue-600
            text-black
            p-7
            sm:p-10
            rounded-2xl
            text-center
            max-w-3xl
            mx-auto
            shadow-2xl
          "
        >

          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Get Details & Register
          </h2>


          <p className="text-black/80 mb-6 text-base sm:text-lg">
            For registration details, payment information and session
            instructions, contact us directly on WhatsApp.
          </p>


          {/* PRICE */}

          <div className="mb-6">

            <span className="text-4xl font-black">
              ₹899
            </span>

            <span className="ml-2 font-bold">
              ONLY
            </span>

          </div>


          {/* WHATSAPP */}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              bg-green-600
              hover:bg-green-700
              text-white
              px-7
              sm:px-8
              py-4
              rounded-xl
              font-bold
              text-lg
              transition-all
              hover:scale-[1.03]
            "
          >

            <MessageCircle size={23} />

            Get Details on WhatsApp

          </a>


          <p className="mt-4 text-black/70 text-sm">
            WhatsApp: +91 8984021185
          </p>

        </div>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <div className="text-center mt-14">

          <p className="text-gray-500 text-sm mb-4">
            2-Day Master Class • October 3–4 • 8 PM IST
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-blue-300
              hover:text-blue-200
              font-bold
              transition
            "
          >

            <MessageCircle size={18} />

            Contact us on WhatsApp

          </a>

        </div>

      </div>

    </div>
  );
};

export default OfferDetails;