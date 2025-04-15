import { AlertTriangle, TrendingUp, Upload, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function AlertsCard({ alerts, lastUpload, weeklyUploads, trendingVideo }) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="flex flex-row items-center justify-between p-4 pb-2 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-400">Channel Insights</h3>
        <AlertTriangle className="h-5 w-5 text-orange-500" />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-md"
          >
            <TrendingUp className="h-5 w-5 text-green-500" />
            <div>
              <div className="text-xs text-gray-400">Trending Video</div>
              <div className="text-sm text-white truncate">{trendingVideo}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-md"
          >
            <Upload className="h-5 w-5 text-blue-500" />
            <div>
              <div className="text-xs text-gray-400">Weekly Uploads</div>
              <div className="text-sm text-white">{weeklyUploads} videos</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-md"
          >
            <Clock className="h-5 w-5 text-purple-500" />
            <div>
              <div className="text-xs text-gray-400">Last Upload</div>
              <div className="text-sm text-white">{lastUpload}</div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          {alerts.map((alert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-gray-900/50 p-3 rounded-md text-sm text-white"
            >
              {alert}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}