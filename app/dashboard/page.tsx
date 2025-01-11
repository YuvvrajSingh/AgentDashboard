import Metrics from '../components/Metrics'
import TaskList from '../components/TaskList'
import QuickActions from '../components/QuickActions'
import LiveFeed from '../components/LiveFeed'
import PerformanceCharts from '../components/PerformanceCharts'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Agent Dashboard</h1>
      <Metrics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskList />
        <div className="space-y-6">
          <QuickActions />
          <LiveFeed />
        </div>
      </div>
      <PerformanceCharts />
    </div>
  )
}

