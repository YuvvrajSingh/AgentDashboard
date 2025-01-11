import Link from 'next/link'

const categories = [
  { name: 'General', slug: 'general' },
  { name: 'Account Management', slug: 'account-management' },
  { name: 'Billing', slug: 'billing' },
  { name: 'Technical Support', slug: 'technical-support' },
  { name: 'Product Features', slug: 'product-features' },
]

export default function CategoryNavigation() {
  return (
    <nav className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/knowledge-base/category/${category.slug}`}
              className="text-blue-600 hover:underline"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

