"use client";
import KnowledgeBaseLayout from "../components/KnowledgeBaseLayout";
import SearchBar from "../components/SearchBar";
import CategoryNavigation from "../components/CategoryNavigation";
import PopularArticles from "../components/PopularArticles";
import RecentlyViewedArticles from "../components/RecentlyViewedArticles";

export default function KnowledgeBase() {
  return (
    <KnowledgeBaseLayout>
      <h1 className="text-3xl font-bold mb-6">Knowledge Base.</h1>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="md:col-span-1">
          <CategoryNavigation />
        </div>
        <div className="md:col-span-3">
          <PopularArticles />
          <RecentlyViewedArticles />
        </div>
      </div>
    </KnowledgeBaseLayout>
  );
}
