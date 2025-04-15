import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, Monitor, Tablet, Tv } from "lucide-react"

export default function DevicesChart({ devices }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const deviceData = [
    { name: "Mobile", value: devices.mobile, icon: Smartphone, color: "text-orange-500" },
    { name: "Desktop", value: devices.desktop, icon: Monitor, color: "text-amber-400" },
    { name: "Tablet", value: devices.tablet, icon: Tablet, color: "text-yellow-300" },
    { name: "TV", value: devices.tv, icon: Tv, color: "text-green-400" },
  ]

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:shadow-orange-500/5 transition-shadow">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-sm font-medium text-gray-400">Devices</h3>
      </div>
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {deviceData.map((device, i) => {
                const startAngle = deviceData.slice(0, i).reduce((sum, d) => sum + d.value, 0) * 3.6
                const endAngle = startAngle + device.value * 3.6

                // Convert angles to radians and calculate path
                const startRad = ((startAngle - 90) * Math.PI) / 180
                const endRad = ((endAngle - 90) * Math.PI) / 180
                const x1 = 50 + 40 * Math.cos(startRad)
                const y1 = 50 + 40 * Math.sin(startRad)
                const x2 = 50 + 40 * Math.cos(endRad)
                const y2 = 50 + 40 * Math.sin(endRad)

                const largeArcFlag = device.value > 50 ? 1 : 0

                const pathData = [`M 50 50`, `L ${x1} ${y1}`, `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(" ")

                return (
                  <motion.path
                    key={device.name}
                    d={pathData}
                    fill={`url(#gradient-${i})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  />
                )
              })}
              <defs>
                <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl font-bold text-white">{devices.mobile}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {deviceData.map((device, i) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <device.icon className={`h-4 w-4 ${device.color}`} />
              <div className="text-xs">
                <span className="text-gray-400">{device.name}</span>
                <span className="ml-1 text-white font-medium">{device.value}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}