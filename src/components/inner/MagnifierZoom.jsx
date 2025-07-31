import React, { useRef, useState } from "react";

const MagnifierZoom = ({ src, zoom = 2, lensSize = 150 }) => {
  const containerRef = useRef(null);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const updateLens = (x, y) => {
    const rect = containerRef.current.getBoundingClientRect();
    setLensPosition({
      x: Math.max(0, Math.min(x, rect.width)),
      y: Math.max(0, Math.min(y, rect.height)),
    });
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    updateLens(e.clientX - rect.left, e.clientY - rect.top);
    if (!visible) setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    updateLens(touch.clientX - rect.left, touch.clientY - rect.top);
    setVisible(true);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    updateLens(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const handleTouchEnd = () => {
    setVisible(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden touch-none bg-[#FAF9F7]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img src={src} alt="Product" className="w-full h-auto object-contain mix-blend-multiply"/>

      <div
        className={`absolute pointer-events-none rounded-full border-4 shadow-xl transition-all duration-300 ease-out transform
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-25"}
          ${visible ? "translate-y-0" : "-translate-y-2"}
          glow-glass`}
        style={{
          width: `${lensSize}px`,
          height: `${lensSize}px`,
          left: `${lensPosition.x - lensSize / 2}px`,
          top: `${lensPosition.y - lensSize / 2}px`,
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${containerRef.current?.offsetWidth * zoom}px`,
          backgroundPosition: `-${lensPosition.x * zoom - lensSize / 2}px -${
            lensPosition.y * zoom - lensSize / 2
          }px`,
          backdropFilter: "blur(8px)",
          zIndex: 50,
        }}
      />
    </div>
  );
};

export default MagnifierZoom;
