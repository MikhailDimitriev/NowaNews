export function categoryChecker(category: 'ai' | 'business' | 'culture' | 'entertainment' | 'health') {
  switch (category) {
    case "ai":
      return '/brain.png'
    case "business":
      return '/business.png'
    case "culture":
      return '/culture.png'
    case "entertainment":
      return '/entertainment.png'
    case "health":
      return '/health.png'
  }
}