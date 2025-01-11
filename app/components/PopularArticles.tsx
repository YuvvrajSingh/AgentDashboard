import Link from 'next/link'

const popularArticles = [
  { title: 'How to Reset Your Password', slug: 'reset-password' },
  { title: 'Understanding Billing Cycles', slug: 'billing-cycles' },
  { title: 'Troubleshooting Common Login Issues', slug: 'login-issues' },
  { title: 'Setting Up Two-Factor Authentication', slug: 'two-factor-auth' },
]

export default function PopularArticles() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Articles</h2>
      <ul className="space-y-2">
        {popularArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/knowledge-base/article/${article.slug}`}
              className="text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

