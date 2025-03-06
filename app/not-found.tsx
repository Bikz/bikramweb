/**
 * not-found.tsx
 * Title: 404 Page
 * Description: Custom 404 error page shown when a route is not found.
 */

import React from 'react'

export default function NotFound() {
  return (
    <div className="container mx-auto py-8 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  )
}