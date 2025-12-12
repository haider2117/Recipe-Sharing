'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ onSearch, placeholder = 'Search recipes...' }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 transition-all text-lg"
      />
    </form>
  )
}
