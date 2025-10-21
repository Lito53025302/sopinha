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
            {/* OPÇÃO 1: Google Drive - Comentado temporariamente */}
            {/*
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              loop
            >
              <source src="https://drive.google.com/uc?export=download&id=1xVCo3NiT6U_kUqMZ48NwaF70LM79DjBp" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            */}
            
            {/* Streamable - Código ajustado pelo usuário */}
            <div style={{position: 'relative', width: '100%', height: '0px', paddingBottom: '136.111%'}}>
              <iframe 
                allow="fullscreen;autoplay" 
                allowFullScreen 
                height="100%" 
                src="https://streamable.com/e/38i0so?autoplay=1&loop=0&nocontrols=1" 
                width="100%" 
                style={{
                  border: 'none', 
                  width: '100%', 
                  height: '100%', 
                  position: 'absolute', 
                  left: '0px', 
                  top: '0px', 
                  overflow: 'hidden'
                }}
              />
            </div>
            
            {/* OPÇÃO 2: Streamable.com - Descomente se usar */}
            {/*
            <iframe
              className="w-full aspect-video"
              src="https://streamable.com/e/SEU_VIDEO_ID"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
            */}
            
            {/* OPÇÃO 3: Vimeo - Descomente se usar */}
            {/*
            <iframe
              className="w-full aspect-video"
              src="https://player.vimeo.com/video/SEU_VIDEO_ID?autoplay=1&muted=0&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            */}
            
            {/* OPÇÃO 4: Arquivo local - Descomente se voltar a usar */}
            {/*
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              loop
            >
              <source src="/video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            */}
            

            
            {/* Versão local (descomente se quiser usar o arquivo local) */}
            {/*
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              loop
            >
              <source src="/video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            
            {showUnmuteButton && (
              <button
                ref={unmuteButtonRef}
                onClick={unmute}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
                title="Clique para ativar o áudio"
              >
                <Volume2 size={24} />
              </button>
            )}
            */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
