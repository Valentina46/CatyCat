import { useLayoutEffect, useState } from "react";
import { useWindowSize } from "../useWindowSize/useWindowSize";
import { BreackPoints } from "../contants";

export const useIsMobile = () => {
  const { width } = useWindowSize()
  const isMobile = width <= BreackPoints.mobile
  return isMobile;
};

