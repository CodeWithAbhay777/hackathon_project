import { DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function RevenueCard({ revenue }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const revenueStreams = [
    {
      name: "Ad Revenue",
      value: revenue.ad_revenue,
      percentage: (revenue.ad_revenue / revenue.estimated_monthly_revenue) * 100,
    },
    {
      name: "Memberships",
      value: revenue.channel_memberships,
      percentage: (revenue.channel_memberships / revenue.estimated_monthly_revenue) * 100,
    },
    {
      name: "Sponsors",
      value: revenue.sponsors,
      percentage: (revenue.sponsors / revenue.estimated_monthly_revenue) * 100,
    },
    {
      name: "Merch Sales",
      value: revenue.merch_sales,
      percentage: (revenue.merch_sales / revenue.estimated_monthly_revenue) * 100,
    },
  ]

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="flex flex-row items-center justify-between p-4 pb-2 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-400">Revenue</h3>
        <DollarSign className="h-5 w-5 text-green-500" />
      </div>
      <div className="p-4">
        <div className="text-2xl font-bold text-white mb-4">
          {formatCurrency(revenue.estimated_monthly_revenue)}
          <span className="text-xs text-gray-400 ml-1">this month</span>
        </div>

        <div className="space-y-3">
          {revenueStreams.map((stream, i) => (
            <motion.div
              key={stream.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-1"
            >
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{stream.name}</span>
                <span className="text-white font-medium">{formatCurrency(stream.value)}</span>
              </div>
              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${stream.percentage}%` }}
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