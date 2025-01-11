import ClientInfo from "../components/ClientInfo";
import CallControls from "../components/CallControls";
import Transcription from "../components/Transcription";
import SentimentAnalysis from "../components/SentimentAnalysis";
import KnowledgeBase from "../components/KnowledgeBase";
import Notes from "../components/Notes";
import ActionButtons from "../components/ActionButtons";

export default function LiveCall() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Live Call Interface</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <ClientInfo />
          <CallControls />
          <Transcription />
          <Notes />
        </div>
        <div className="space-y-4">
          <SentimentAnalysis />
          <KnowledgeBase />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
