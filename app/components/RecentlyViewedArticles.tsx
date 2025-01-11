import Link from 'next/link'

const recentlyViewedArticles = [
  { title: 'Exporting Data from Your Account', slug: 'export-data', viewedAt: '2023-05-10T14:30:00Z' },
  { title: 'Integrating with Third-Party Tools', slug: 'third-party-integrations', viewedAt: '2023-05-09T11:15:00Z' },
  { title: 'Managing Team Permissions', slug: 'team-permissions', viewedAt: '2023-05-08T09:45:00Z' },
]

export default function RecentlyViewedArticles() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Recently Viewed Articles</h2>
      <ul className="space-y-2">
        {recentlyViewedArticles.map((article) => (
          <li key={article.slug} className="flex justify-between items-center">
            <Link
              href={`/knowledge-base/article/${article.slug}`}
              className="text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
            <span className="text-sm text-gray-500">
              {new Date(article.viewedAt).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

