"use client";
import BlurText from "@/components/BlurText";
import MagnetLines from "@/components/MagnetLines";
import Link from "next/link";

const page = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <MagnetLines
        rows={9}
        columns={9}
        containerSize="60vmin"
        lineColor="tomato"
        lineWidth="0.8vmin"
        lineHeight="5vmin"
        baseAngle={0}
        style={{ margin: "2rem auto" }}
      />
      <div className="">
        <Link href="/gemini" className="text-blue-600 underline">
          Go to Gemini AI Playground
        </Link>
      </div>
    </div>
  );
};

export default page;
