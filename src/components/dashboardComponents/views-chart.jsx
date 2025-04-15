import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ViewsChart({ dailyViews }) {
 

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const maxViews = Math.max(...dailyViews, 1);

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-400">Daily Views</h3>
      </div>
      <div className="p-4">
        <div className="h-64">
          <div className="flex h-56 items-end gap-2">
            {dailyViews.map((views, i) => {
              const height = (views / maxViews) * 100;
              console.log(height , views , maxViews);
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm relative group"
                    style={{ height: "0%"}}
                    initial={{ height: "0px" }}
                    animate={{ height: `${height+50}px` }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {views.toLocaleString()} views
                    </div>
                  </motion.div>
                  <span className="text-xs text-gray-400">{days[i]}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div> 
  )
}