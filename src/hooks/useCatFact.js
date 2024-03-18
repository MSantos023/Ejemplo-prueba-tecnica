import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState();
  // fetching de datos de los hechos
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
