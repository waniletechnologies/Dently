"use client"

import Header from "./components/Header"
import DateAndSearch from "./components/DateAndSearch"
import MetricsGrid from "./components/MetricsGrid"
import FollowersGrowth from "./components/FollowersGrowth"
import DailyEngagement from "./components/DailyEngagement"
import TopPerformingPost from "./components/TopPerformingPost"

const followersData = [
  { date: "Apr 1", day: "1", instagram: 3500, facebook: 1200 },
  { date: "Apr 4", day: "4", instagram: 4200, facebook: 1300 },
  { date: "Apr 7", day: "7", instagram: 5000, facebook: 1400 },
  { date: "Apr 10", day: "10", instagram: 5800, facebook: 1500 },
  { date: "Apr 13", day: "13", instagram: 6500, facebook: 1600 },
  { date: "Apr 16", day: "16", instagram: 7200, facebook: 1700 },
  { date: "Apr 19", day: "19", instagram: 8000, facebook: 1800 },
  { date: "Apr 22", day: "22", instagram: 8800, facebook: 1900 },
  { date: "Apr 25", day: "25", instagram: 9500, facebook: 2000 },
]

const engagementData = [
  { day: "Mon", likes: 450, comments: 250, shares: 150 },
  { day: "Tue", likes: 380, comments: 220, shares: 130 },
  { day: "Wed", likes: 420, comments: 280, shares: 160 },
  { day: "Thu", likes: 350, comments: 200, shares: 120 },
  { day: "Fri", likes: 400, comments: 240, shares: 140 },
  { day: "Sat", likes: 480, comments: 260, shares: 170 },
  { day: "Sun", likes: 520, comments: 300, shares: 190 },
]

const SocialGrowthPage = () => {
  return (
    <div className="space-y-6 p-4">
      <Header />
      <DateAndSearch />
      <MetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FollowersGrowth data={followersData} />
        <DailyEngagement data={engagementData} />
      </div>
      <TopPerformingPost />
    </div>
  )
}

export default SocialGrowthPage
