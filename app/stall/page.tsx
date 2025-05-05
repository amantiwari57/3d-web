import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Spline
        className='w-full h-full'
        scene="https://prod.spline.design/xzWxYyELTPbFvTEJ/scene.splinecode" 
      />
    </main>
  );
}
