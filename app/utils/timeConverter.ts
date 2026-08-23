export const timeConverter = (article: ArticleStructure) => {
  let publishedAt = article ? article.published_at.split('') : []

  publishedAt.forEach((letter, index) => {
    if(letter === 'T') {
      publishedAt[index] = ' '
    } else if (letter === 'Z') {
      publishedAt.pop()
    } else if (letter === '.') {
      publishedAt = publishedAt.slice(0, index + 1)
    }
  })

  return publishedAt.join('')
}