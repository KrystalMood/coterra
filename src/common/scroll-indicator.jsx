import { useState } from "react";

export const ScrollIndicator = () => {
  const [percentScrolled, setPercentScrolled] = useState(0);

	const countPercentage = () => setPercentScrolled(window.scrollY / (document.body.offsetHeight - window.innerHeight))
  window.addEventListener("scroll", countPercentage);

  return <div style={{ width: `${percentScrolled * 100}%` }} className="fixed top-0 h-1 bg-blue-500" />;
};