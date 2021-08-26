import { useState, useEffect } from "react";
import { Bible, Commentary, Appendices } from "../models";

export function useBible(): Bible | undefined {
  const [bible, setBible] = useState<Bible>();
  useEffect(() => {
    Bible.onReady().then((b) => setBible(b));
  });
  return bible;
}

export function useCommentary(): Commentary | undefined {
  const [commentary, setCommentary] = useState<Commentary>();
  useEffect(() => {
    Commentary.onReady().then((b) => setCommentary(b));
  });
  return commentary;
}

export function useAppendices(): Appendices | undefined {
  const [appendices, setAppendices] = useState<Appendices>();
  useEffect(() => {
    Appendices.onReady().then((b) => setAppendices(b));
  });
  return appendices;
}
