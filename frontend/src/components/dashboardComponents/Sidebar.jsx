import {useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { X, Home, BarChart2, Users, Video, DollarSign, Settings, LogOut } from "lucide-react"

const Sidebar = ({isOpen , changeNavOpen}) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null;

    const navItems = [
        { icon: Home, label: "Dashboard", active: true },
        { icon: BarChart2, label: "Analytics" },
        { icon: Users, label: "Audience" },
        { icon: Video, label: "Content" },
        { icon: DollarSign, label: "Monetization" },
        { icon: Settings, label: "Settings" },
      ]



  return (
    <AnimatePresence>
        {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={changeNavOpen}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 15 }}
            className="fixed top-0 left-0 h-full w-[20rem] bg-gradient-to-b from-gray-900 to-black border-r border-orange-500/20 shadow-lg z-50"
          >
            <div className="p-4 flex justify-between items-center border-b border-orange-500/20">
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                YT Studio
              </h2>
              <button
                onClick={changeNavOpen}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-600/20 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        item.active
                          ? "bg-orange-600/20 text-orange-500"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-0 w-full p-4 border-t border-orange-500/20">
              <button className="w-full cursor-pointer flex items-center justify-start px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-600/20 transition-colors">
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>
          </motion.div>
        </>
      )

        }
    </AnimatePresence>
    
  )
}

export default Sidebar