import { useState } from "react";

const URL =
  "https://www.revisedenglishversion.com/jsonrevexport.php?permission=yUp&autorun=1&what=bible";

export function useBible() {
  const [bible, setBible] = useState([]);
  if (bible === []) {
    fetch(URL)
      .then((res) => res.json())
      .then((b) => setBible(b.REV_Bible));
  }
  return bible;
}
