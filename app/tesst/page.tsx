"use client";

import React, { useState } from "react";

function page() {
  const [maskPosition, setMaskPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;
    setMaskPosition({ x, y });
  };

  return (
    <div
      className=" justify-center items-center h-screen bg-gray-800 relative"
      onMouseMove={handleMouseMove}>

      {/* Color Image (Masked to Reveal Outer Part) */}
      {/* Grayscale Image (Always Visible) */}
      <img
        src="/images/hero-image-01.jpg"
        alt=""
        className=" object-cover grayscale absolute top-0 inset-0 left-0"
      />
      <img
        src="/images/hero-image-01.jpg"
        alt=""
        className="object-cover absolute top-0 left-0 inset-0"
        style={{
          maskImage: `radial-gradient(circle 200px at ${maskPosition.x} ${maskPosition.y}, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${maskPosition.x} ${maskPosition.y}, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
      />
    </div>
  );
}

export default page;

// "use client";

// import React, { useState } from "react";

// function Page() {
//   const [maskPosition, setMaskPosition] = useState({ x: "0", y: "0" });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     console.log(rect);

//     const x = `${e.clientX}px`;
//     const y = `${e.clientY}px`;
//     setMaskPosition({ x, y });
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen bg-gray-800"
//       onMouseMove={handleMouseMove}>
//       <img
//         src="/images/hero-image-01.jpg"
//         alt=""
//         className="w-1/2 h-1/2 object-cover grayscale transition-all duration-300"
//         style={{
//           maskImage: `radial-gradient(circle 80px at ${maskPosition.x} ${maskPosition.y}, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%)`,
//           WebkitMaskImage: `radial-gradient(circle 80px at ${maskPosition.x} ${maskPosition.y}, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%)`,
//         }}
//       />
//     </div>
//   );
// }

// export default Page;
