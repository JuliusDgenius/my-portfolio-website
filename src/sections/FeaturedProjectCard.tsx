export default function FeaturedProjectCard() {
    return (
        <div className="bg-[var(--bg-card)] p-6 rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-[var(--accent)]">
              GrowCoinsTracker
            </h3>
            <p className="text-gray-400">
              A crypto portfolio tracker that lets users monitor their assets in real time.
            </p>
          </div>
    );
}