import React from 'react'

export default function () {
  const article = this.props.article

  if (!article.fetched || article.fetching) {
    return <div className="page-article"></div>
  }

  return (
    <div className="page-article">
      <h2 className="article-title">{article.data.title}</h2>
      <p>{article.data.body}</p>
    </div>
  );
}
