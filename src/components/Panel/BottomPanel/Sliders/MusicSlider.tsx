import React, { ChangeEvent } from "react";
import styles from "./MusicSlider.module.css";

interface MusicSliderProps {
  currentTime: number;
  duration: number;
  onTimeChange: (newTime: number) => void;
}

const MusicSlider: React.FC<MusicSliderProps> = ({
  currentTime,
  duration,
  onTimeChange,
}) => {
  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    onTimeChange(newTime);
  };

  return (
    <input
      type="range"
      min="0"
      max={duration}
      step="1"
      value={currentTime}
      onChange={handleTimeChange}
      className={styles.musicSlider} 
    />
  );
};

export default MusicSlider;
