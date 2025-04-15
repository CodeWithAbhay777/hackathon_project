import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TrafficSourcesChart({ sources }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sourceData = [
    { name: "Search", value: sources.search, color: "bg-orange-500" },
    { name: "Suggested", value: sources.suggested, color: "bg-amber-400" },
    { name: "External", value: sources.external, color: "bg-yellow-300" },
    { name: "Browse", value: sources.browse, color: "bg-green-400" },
    { name: "Other", value: sources.other, color: "bg-blue-400" },
  ]

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-400">Traffic Sources</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {sourceData.map((source, i) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-1"
            >
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{source.name}</span>
                <span className="text-white font-medium">{source.value}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${source.color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: `${source.value}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}