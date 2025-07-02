import { useEffect, useState } from "react"
import { Moon, Sun} from "lucide-react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme == "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true)
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false)
        }
    })

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        } else {
            setIsDarkMode(true)
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
    }

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-10 z-50 p-1",
            "rounded-full transition-colors duration-300 focus:outline-hidden"
        )}> {
            isDarkMode ? (
            <Sun  className="h-6 w-6 text-yellow-300"/>
            ) : (
            <Moon className="h-6 w-6 text-blue-900"/>)
        } </button>
    )
}