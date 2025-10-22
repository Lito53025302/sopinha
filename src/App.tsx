import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [showHeart, setShowHeart] = useState(true);
  const [heartScale, setHeartScale] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHeartScale(1);
    }, 100);

    const timer2 = setTimeout(() => {
      setHeartScale(20);
    }, 500);

    const timer3 = setTimeout(() => {
      setShowHeart(false);
      setShowVideo(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);





  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 flex items-center justify-center overflow-hidden">
      {showHeart && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500">
          <Heart
            className="text-white transition-all duration-[3000ms] ease-in-out"
            style={{ transform: `scale(${heartScale})` }}
            size={120}
            fill="currentColor"
          />
        </div>
      )}

      {showVideo && (
        <div className="w-full h-screen flex items-center justify-center p-4 animate-fadeIn relative">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden relative">
            <video
              className="w-full h-auto"
              controls
              autoPlay
              playsInline
              preload="metadata"
              loop
            >
              <source src="/video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
