import { useState, useEffect, useRef } from "react";

export const useDropdown = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return { isOpen, setIsOpen, dropdownRef };
};
