import React, { ChangeEvent } from "react";
import styles from "./VolumeSlider.module.css";

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({
  volume,
  onVolumeChange,
}) => {
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
      className={styles.volumeSlider}
    />
  );
};

export default VolumeSlider;
