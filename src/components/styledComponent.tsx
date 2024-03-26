"use client"
import React from 'react';
interface WhiteButtonProps {
  text: string; 
  bgcolor: string;
  color: string;

}


export const StyledBtn: React.FC<WhiteButtonProps> = ({ text, bgcolor ,color}) => {
  return (
    <button className={`rounded-[50px] text-sm font-extrabold ${bgcolor} ${color} tracking-[2px] w-[210px] h-[45px]`}>
      {text}
    </button>
  );
};

