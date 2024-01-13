import { Car } from "lucide-react";
import ThemeToggler from "./theme-toggle";

export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center py-4">
                <h1 className="text-xl font-bold text-center flex justify-start items-center gap-4">
                    <Car size="2rem" />
                    <span>CAR RECOMMENDATION SYSTEM</span>
                </h1>
                <ThemeToggler />
            </nav>
        </>
    );
}