import { Users, Eye, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function StatsCard({ title, value, change, trend, positive = true, icon = "chart", subtext }) {
  const getIcon = () => {


    
    switch (icon) {
      case "users":
        return <Users className="h-5 w-5 text-orange-500" />
      case "eye":
        return <Eye className="h-5 w-5 text-orange-500" />
      case "clock":
        return <Clock className="h-5 w-5 text-orange-500" />
      default:
        return <Eye className="h-5 w-5 text-orange-500" />
    }
  }

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="flex flex-row items-center justify-between p-4 pb-2">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        {getIcon()}
      </div>
      <div className="p-4 pt-0">
        <div className="text-2xl font-bold text-white">{value}</div>
        {change && <p className={`text-xs ${positive ? "text-green-500" : "text-red-500"}`}>{change}</p>}
        {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
        {trend && trend.length > 0 && (
          <div className="mt-4 h-10 flex items-end gap-1">
            {trend.map((value, i) => {
              const height = (value / Math.max(...trend)) * 100
              return (
                <motion.div
                  key={i}
                  className="bg-orange-500/70 rounded-sm"
                  style={{ height: "4px", width: "100%" }}
                  initial={{ height: "4px" }}
                  animate={{ height: `${Math.max(4, height * 0.4)}px` }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}