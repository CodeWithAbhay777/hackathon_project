import { useState } from "react";
import Navbar2 from "../components/dashboardComponents/Navbar2.jsx";
import Sidebar from "../components/dashboardComponents/Sidebar.jsx";
import { motion } from "framer-motion";
import StatsCard from "../components/dashboardComponents/Stats-card.jsx";
import ViewsChart from "../components/dashboardComponents/views-chart.jsx";
import TrafficSourcesChart from "../components/dashboardComponents/traffic-sources-chart.jsx";
import DevicesChart from "../components/dashboardComponents/devices-chart.jsx";
import EngagementCard from "../components/dashboardComponents/engagement-card.jsx";
import RevenueCard from "../components/dashboardComponents/revenue-card.jsx";
import AlertsCard from "../components/dashboardComponents/alerts-card.jsx";

import channelStats from "../utils/analytics.js";
import userInfo from "../utils/creator_portfolio.js";

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(false);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="h-screen w-full bg-linear-to-bl from-gray-800 to-black overflow-x-hidden overflow-y-auto">
      <Navbar2
        channelName={userInfo.channel_name}
        changeNavOpen={() => setNavOpen((prev) => !prev)}
      />
      <Sidebar
        isOpen={navOpen}
        changeNavOpen={() => setNavOpen((prev) => !prev)}
      />

      <div className="w-full h-fit p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Subscribers Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatsCard
            title="Subscribers"
            value={formatNumber(
              channelStats.subscriber_stats.current_subscribers
            )}
            change={`+${formatNumber(
              channelStats.subscriber_stats.growth_past_30_days
            )} this month`}
            trend={channelStats.subscriber_stats.growth_trend}
            positive={true}
            icon="users"
          />
        </motion.div>

        {/* Views Card */}
        <motion.div
        className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StatsCard
            title="Total Views"
            value={formatNumber(channelStats.view_stats.total_views)}
            change={`${formatNumber(
              channelStats.view_stats.monthly_views
            )} this month`}
            trend={channelStats.view_stats.daily_views}
            positive={true}
            icon="eye"
          />
        </motion.div>

        {/* Watch Time Card */}
        
        <motion.div
        className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatsCard
            title="Watch Time"
            value={`${formatNumber(
              channelStats.watch_time.monthly_minutes
            )} mins`}
            change={`${channelStats.watch_time.average_per_video} mins avg per video`}
            positive={true}
            icon="clock"
          />
        </motion.div>

        {/* Audience Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StatsCard
            title="Audience"
            value={`${formatNumber(
              channelStats.audience_insights.returning_viewers
            )} returning`}
            change={`${formatNumber(
              channelStats.audience_insights.new_viewers
            )} new viewers`}
            positive={true}
            icon="users"
            // subtext={`${channelStats.audience_insights.average_view_duration_minutes} mins avg duration`}
          />
        </motion.div>

        {/* Views Chart - Spans 3 columns */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ViewsChart dailyViews={channelStats.view_stats.daily_views} />
        </motion.div>

        {/* Traffic Sources Chart */}
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TrafficSourcesChart sources={channelStats.traffic_sources} />
        </motion.div>

        {/* Devices Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <DevicesChart devices={channelStats.devices} />
        </motion.div>

        {/* Engagement Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <EngagementCard engagement={channelStats.engagement} />
        </motion.div>

        {/* Revenue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <RevenueCard revenue={channelStats.revenue} />
        </motion.div>

        {/* Alerts Card - Spans full width on larger screens */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <AlertsCard
            alerts={channelStats.alerts}
            lastUpload={formatDate(channelStats.upload_activity.last_upload)}
            weeklyUploads={channelStats.upload_activity.weekly_uploads}
            trendingVideo={channelStats.view_stats.trending_video}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
