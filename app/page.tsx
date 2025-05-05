"use client";
import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preventZoom = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener('wheel', preventZoom, { passive: false });
      container.addEventListener('touchmove', preventZoom, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', preventZoom);
        container.removeEventListener('touchmove', preventZoom);
      }
    };
  }, []);

  const handleSplineLoad = (splineApp: any) => {
    console.log('Spline scene loaded');
    
    if (splineApp) {
      // You can access and manipulate your 3D objects here
      // Example: Find a specific object by name
      const targetObject = splineApp.findObjectByName('Object_Name');
      if (targetObject) {
        console.log('Found target object:', targetObject);
        // You can modify properties, add animations, etc.
      }
      
      // You can also setup event listeners
      splineApp.addEventListener('mouseDown', (e: any) => {
        console.log('Mouse down on:', e.target);
      });
    }
  };

  return (
    <main 
      ref={containerRef} 
      className="w-full h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="w-full h-full absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LnxzgN-z7SL9CLld/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onLoad={handleSplineLoad}
        />
      </div>
    </main>
  );
}
