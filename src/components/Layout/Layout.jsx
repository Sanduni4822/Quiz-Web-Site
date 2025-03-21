import { Outlet } from "react-router-dom";
import bgImage from "../../assets/background.png";

export default function Layout() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none", // ✅ Fixed interpolation
        backgroundColor: "#222", // Fallback color to check visibility
      }}
    >
      {/* Overlay for better readability */}
      <div className="flex flex-col items-center justify-center bg-black/50 w-full h-full px-4 text-white text-center">
        <Outlet />
      </div>
    </div>
  );
}
