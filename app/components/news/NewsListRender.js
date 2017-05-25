import React      from 'react'
import { Link }   from 'react-router-dom'
import { truncate }  from '../../core/utils'

export default function () {
  const { items } = this.props

  const mappedArticles = items.map(it =>
    <li key={it.id} className="news-article">
      <Link to={`/article/${it.id}`} className="article-link row">
        <span className="col-xs-12 col-sm-9 article-details-wrapper">
          <span className="article-details">
            <h3 className="article-title">{it.title}</h3>
            <p className="article-description">{truncate(it.body, 200)}</p>
          </span>
        </span>
      </Link>
    </li>
  )

  return (
    <ul className="news">{mappedArticles}</ul>
  )

}
