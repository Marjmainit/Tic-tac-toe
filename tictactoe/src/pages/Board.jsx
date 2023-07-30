import React from "react";
import { Box } from "./Box";
import "./style.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Box key={idx} value={value} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
};
