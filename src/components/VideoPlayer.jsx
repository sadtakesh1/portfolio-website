import { useRef, useState } from "react";

function VideoPlayer({ src, poster, previewTime = 0.08, className = "" }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const setAutomaticPreviewFrame = () => {
    const video = videoRef.current;

    if (!video || poster || started || !Number.isFinite(video.duration)) {
      return;
    }

    // Небольшой сдвиг от 0 нужен, потому что часть браузеров
    // до seek показывает чёрный кадр вместо первого декодированного кадра.
    const maxTime = Math.max(video.duration - 0.01, 0);
    video.currentTime = Math.min(previewTime, maxTime);
  };

  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    setStarted(true);

    // Если превью было получено seek'ом, начинаем воспроизведение с начала.
    if (!poster) {
      video.currentTime = 0;
    }

    try {
      await video.play();
    } catch (error) {
      // play() может быть отклонён браузером; состояние синхронизирует onPlay.
      console.error("Video playback failed:", error);
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  };

  const toggleMute = (event) => {
    event.stopPropagation();

    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    setStarted(false);
    setIsPlaying(false);

    if (poster) {
      // Возвращаем переданный poster после окончания ролика.
      video.load();
    } else if (Number.isFinite(video.duration)) {
      // Возвращаем автоматически выбранный первый кадр.
      const maxTime = Math.max(video.duration - 0.01, 0);
      video.currentTime = Math.min(previewTime, maxTime);
    }
  };

  const handleKeyDown = (event) => {
    if (started) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      startVideo();
    }
  };

  return (
    <div
      className={`video-player ${
        started ? "video-player--active" : "video-player--poster"
      } ${className}`.trim()}
      role={!started ? "button" : undefined}
      tabIndex={!started ? 0 : -1}
      aria-label={!started ? "Воспроизвести видео" : undefined}
      onClick={!started ? startVideo : undefined}
      onKeyDown={handleKeyDown}
    >
      <video
        ref={videoRef}
        className="video-player__video"
        src={src}
        poster={poster || undefined}
        preload="metadata"
        muted={muted}
        playsInline
        onLoadedMetadata={setAutomaticPreviewFrame}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onClick={started ? togglePlayback : undefined}
      />

      {(!started || !isPlaying) && (
        <span
          className={`video-player__play ${
            started ? "video-player__play--overlay" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
          </svg>
        </span>
      )}

      {started && (
        <button
          type="button"
          className="video-player__mute-btn"
          onClick={toggleMute}
          aria-label={muted ? "Включить звук" : "Выключить звук"}
        >
          {muted ? (
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 9V15H8L13 19V5L8 9H4Z" fill="currentColor" />
              <path
                d="M17 9L21 13M21 9L17 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 9V15H8L13 19V5L8 9H4Z" fill="currentColor" />
              <path
                d="M16 9.5C17.3 10.7 17.3 13.3 16 14.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18.5 7C21.2 9.5 21.2 14.5 18.5 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
