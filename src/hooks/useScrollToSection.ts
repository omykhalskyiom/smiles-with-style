import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to page sections
 * @returns Function that scrolls to element by ID
 */
export const useScrollToSection = () => {
    return useCallback((id: string, onComplete?: () => void) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            onComplete?.();
        }
    }, []);
};
