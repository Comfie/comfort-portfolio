"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 5 + "px";
      cursor.style.top = mouseY - 5 + "px";
    };

    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.12;
      followerY += (mouseY - followerY - 18) * 0.12;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform = "scale(2.5)";
      follower.style.transform = "scale(1.5)";
      follower.style.borderColor = "#FF6B35";
    };
    const onMouseLeaveLink = () => {
      cursor.style.transform = "scale(1)";
      follower.style.transform = "scale(1)";
      follower.style.borderColor = "#FF6B3566";
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const links = document.querySelectorAll("a, button, [data-hover]");
    links.forEach((l) => {
      l.addEventListener("mouseenter", onMouseEnterLink);
      l.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
