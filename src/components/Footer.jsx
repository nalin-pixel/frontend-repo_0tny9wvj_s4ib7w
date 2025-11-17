export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Indie Games. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="/test" className="hover:text-black">Status</a>
        </div>
      </div>
    </footer>
  )
}
