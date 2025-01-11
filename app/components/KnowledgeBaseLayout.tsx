import { ReactNode } from 'react'

interface KnowledgeBaseLayoutProps {
  children: ReactNode
}

export default function KnowledgeBaseLayout({ children }: KnowledgeBaseLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  )
}

