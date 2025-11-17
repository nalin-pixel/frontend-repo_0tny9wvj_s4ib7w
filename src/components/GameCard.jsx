export default function GameCard({ game, onPlay, onDownload }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-all">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        <img src={game.cover_image} alt={game.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{game.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{game.description}</p>
      <div className="mt-3 flex gap-2">
        <a href={game.web_path} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-1.5 text-white text-sm hover:bg-black">Play</a>
        <a href={game.download_path} download className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">Download</a>
      </div>
    </div>
  )
}
