"use client";
import CallDetails from "../components/call-details";
import SentimentAnalysis from "../components/sentiment-analysis";
import TranscriptionPlayback from "../components/transcription-playback";
import ActionItems from "../components/action-items";
import AgentNotes from "../components/agent-notes";
import Attachments from "../components/attachments";

export default function CallSummary() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Call Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CallDetails />
        <SentimentAnalysis />
      </div>
      <TranscriptionPlayback />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActionItems />
        <AgentNotes />
      </div>
      <Attachments />
    </div>
  );
}
