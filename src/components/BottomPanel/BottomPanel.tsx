"use client";
import React, { useState } from "react";
import VolumeSlider from "./Sliders/VolumeSlider";
import MusicSlider from "./Sliders/MusicSlider";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { LuVolume1 } from "react-icons/lu";
import { LuVolumeX } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { IoPauseCircleSharp } from "react-icons/io5";
import { IoPlayCircleSharp } from "react-icons/io5";

const iconStyleSmall = {
  color: "white",
  fontSize: "1.25em",
  cursor: "pointer",
};
const iconStyleMed = {
  color: "white",
  fontSize: "1.5em",
  cursor: "pointer",
};
const iconStyleLarge = {
  color: "white",
  fontSize: "2.25em",
  cursor: "pointer",
};

export default function BottomPanel() {
  const [volume, setVolume] = useState(0.75);
  const [mute, setMute] = useState(false);
  const [pause, setPause] = useState(false);
  const [currentTime, setCurrentTime] = useState(60);
  const duration = 300;

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };
  const handleMute = () => {
    setMute(!mute);
  };
  const handleTimeChange = (newTime: number) => {
    setCurrentTime(newTime);
  };
  const handlePause = () => {
    setPause(!pause);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full px-4 pt-4 pb-2 flex items-center justify-between bg-[#0A0A0B] border-solid border-t-2 border-[#232426]">
      <div className="flex items-center gap-8 w-[15em]">
        <div className="flex flex-col items-start justify-start">
          <div className="text-white font-bold">Dooba</div>
          <div className="text-[#b3b3b3] font-['Arial'] font-normal text-sm">
            Nanku
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegHeart style={iconStyleSmall} />
          <CgAddR style={iconStyleSmall} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-4">
          <TbSwitch3 style={iconStyleMed} />
          <IoPlaySkipBackOutline style={iconStyleMed} />
          {!pause ? (
            <IoPauseCircleSharp style={iconStyleLarge} onClick={handlePause} />
          ) : (
            <IoPlayCircleSharp style={iconStyleLarge} onClick={handlePause} />
          )}
          <IoPlaySkipForwardOutline style={iconStyleMed} />
          <IoRepeat style={iconStyleMed} />
        </div>
        <MusicSlider
          currentTime={currentTime}
          duration={duration}
          onTimeChange={handleTimeChange}
        />
      </div>
      <div className="flex items-center gap-3 w-[15em]">
        {!mute ? (
          <LuVolume1 style={iconStyleMed} onClick={handleMute} />
        ) : (
          <LuVolumeX style={iconStyleMed} onClick={handleMute} />
        )}
        <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
        <IoMicOutline style={iconStyleMed} />
        <LuMonitorSmartphone style={iconStyleMed} />
        <IoShareSocialOutline style={iconStyleMed} />
      </div>
    </div>
  );
}
