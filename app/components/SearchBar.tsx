'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Filter } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const mockSuggestions = [
  'How to reset password',
  'Troubleshooting network issues',
  'Setting up email client',
  'VPN configuration guide',
]

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    // In a real application, you would fetch suggestions from an API
    const filteredSuggestions = mockSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(term.toLowerCase())
    )
    setSuggestions(filteredSuggestions)
  }

  return (
    <div className="relative">
      <div className="flex">
        <Input
          type="text"
          placeholder="Search knowledge base..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full"
        />
        <Button className="ml-2">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>By Category</DropdownMenuItem>
            <DropdownMenuItem>By Date</DropdownMenuItem>
            <DropdownMenuItem>By Relevance</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSearchTerm(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

