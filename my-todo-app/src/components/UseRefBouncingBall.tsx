import { useEffect, useRef } from "react";

export default function UseRefBouncingBall() {
    const ballRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let y = 0;
        let direction = 1;
        const speed = 2;

        function animate() {
            if (!ballRef.current) return;
            y += speed * direction;
            if (y >= 200 || y <= 0) direction *= -1; // Reverse direction
            ballRef.current.style.transform = `translateY(${y}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div
                ref={ballRef}
                className="w-10 h-10 bg-red-500 rounded-full"
            ></div>
        </div>
    );
}
