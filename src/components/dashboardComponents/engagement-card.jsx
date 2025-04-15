import { ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import { motion } from "framer-motion"

export default function EngagementCard({ engagement }) {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-400">Engagement</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <ThumbsUp className="h-5 w-5 text-orange-500 mb-1" />
            <div className="text-sm font-bold text-white">{formatNumber(engagement.average_likes_per_video)}</div>
            <div className="text-xs text-gray-400">Likes</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <MessageSquare className="h-5 w-5 text-amber-400 mb-1" />
            <div className="text-sm font-bold text-white">{formatNumber(engagement.average_comments_per_video)}</div>
            <div className="text-xs text-gray-400">Comments</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Share2 className="h-5 w-5 text-yellow-300 mb-1" />
            <div className="text-sm font-bold text-white">{formatNumber(engagement.average_shares)}</div>
            <div className="text-xs text-gray-400">Shares</div>
          </motion.div>
        </div>

        <div className="pt-2 border-t border-gray-700">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="text-xs font-medium text-gray-400 mb-2">Top Performing Video</h4>
            <p className="text-sm text-white mb-2 truncate">{engagement.top_video_engagement.title}</p>
            <div className="flex justify-between text-xs">
              <span className="text-orange-500">{formatNumber(engagement.top_video_engagement.likes)} likes</span>
              <span className="text-amber-400">{formatNumber(engagement.top_video_engagement.comments)} comments</span>
              <span className="text-yellow-300">{formatNumber(engagement.top_video_engagement.shares)} shares</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}