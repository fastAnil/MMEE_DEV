import { useRef } from "react";
import "./StorySlider.css";
import shortVideo from "../../assets/shotvideo.mp4";

const videos = [1, 2, 3, 4, 5, 6, 7];

export default function StorySlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -160 : 160,
      behavior: "smooth",
    });
  };

  return (
    <div className="story-container">
      <button className="arrow" onClick={() => scroll("left")}>❮</button>

      <div className="stories" ref={sliderRef}>
        {videos.map(v => (
          <video
            key={v}
            src={shortVideo}
            muted
            loop
            playsInline
            onMouseEnter={e => e.currentTarget.play()}
            onMouseLeave={e => e.currentTarget.pause()}
          />
        ))}
      </div>

      <button className="arrow" onClick={() => scroll("right")}>❯</button>
    </div>
  );
}
