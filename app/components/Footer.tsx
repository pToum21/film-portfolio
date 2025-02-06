
import React from "react" // Import React

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p className="text-gray-500 mt-2 text-sm">
          Bringing imagination to life through film editing and prop creation.
        </p>
      </div>
    </footer>
  )
}

