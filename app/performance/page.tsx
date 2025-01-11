import { Metadata } from "next";
import AgentStats from "../components/agent-stats";
import ComparisonCharts from "../components/comparison-charts";
import GoalsAndTargets from "../components/goals-and-targets";
import FeedbackSection from "../components/feedback-section";

export const metadata: Metadata = {
  title: "Performance Metrics",
  description: "Monitor agent performance indicators",
};

export default function Performance() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Performance Metrics</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <AgentStats />
        <ComparisonCharts />
      </div>
      <GoalsAndTargets />
      <FeedbackSection />
    </div>
  );
}
