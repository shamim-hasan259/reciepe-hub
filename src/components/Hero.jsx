// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const HeroSection = () => {
//   const router = useRouter();

//   return (
//     <section
//       className="min-h-screen flex items-center px-6 transition-colors duration-300
//       bg-linear-to-r from-white via-sky-50 to-white
//       dark:from-gray-900 dark:via-gray-900 dark:to-black"
//     >
//       <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* LEFT SIDE */}
//         <div className="flex-1 text-center md:text-left">
//           {/* Title */}
//           <h1
//             className="text-4xl md:text-6xl font-bold leading-tight
//             text-gray-800 dark:text-white"
//           >
//             Adopt Your{" "}
//             <span className="text-purple-600 dark:text-purple-400">
//               Best Friend
//             </span>{" "}
//             Today 🐶
//           </h1>

//           {/* Description */}
//           <p
//             className="mt-6 text-lg md:text-xl
//             text-gray-600 dark:text-gray-300"
//           >
//             Give a loving home to pets who are waiting for you. Adopt dogs,
//             cats, and birds easily and make a life-changing difference today.
//           </p>

//           {/* Button */}
//           <button
//             onClick={() => router.push("/pets")}
//             className="mt-8 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition
//               bg-purple-600 hover:bg-purple-700 text-white
//               dark:bg-purple-500 dark:hover:bg-purple-600"
//           >
//             Adopt Now
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex-1 flex justify-center">
//           <div className="relative w-[280px] md:w-[420px] h-[280px] md:h-[420px]">
//             <Image
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TnwDjFzgYMg7mAAx-vdpmIaXvs1Qit1hvQ&s"
//               alt="Happy Pet"
//               fill
//               className="object-cover rounded-2xl shadow-xl
//                 dark:shadow-purple-500/20"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="min-h-screen flex items-center px-6 transition-colors duration-300
      bg-linear-to-r from-white via-sky-50 to-white 
      dark:from-gray-900 dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">
          {/* Title */}
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight 
            text-gray-800 dark:text-white"
          >
            Adopt Your{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Best Friend
            </span>{" "}
            Today 🐶
          </h1>

          {/* Description */}
          <p
            className="mt-6 text-lg md:text-xl 
            text-gray-600 dark:text-gray-300"
          >
            Give a loving home to pets who are waiting for you. Adopt dogs,
            cats, and birds easily and make a life-changing difference today.
          </p>

          {/* Button (Navbar style match) */}
          <button
            onClick={() => router.push("/pets")}
            className="mt-8 px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300
            bg-linear-to-r from-cyan-500 to-blue-500 
            hover:from-cyan-600 hover:to-blue-600
            text-white hover:shadow-cyan-500/30"
          >
            Adopt Now
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] md:w-[420px] h-[280px] md:h-[420px]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TnwDjFzgYMg7mAAx-vdpmIaXvs1Qit1hvQ&s"
              alt="Happy Pet"
              fill
              className="object-cover rounded-2xl shadow-xl
              dark:shadow-cyan-500/20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
