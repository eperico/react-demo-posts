import React  from 'react'
import List   from '../../components/news/NewsList'

export default function () {
  return (
    <div className="page-news">
      <List items={this.props.news.list}/>
    </div>
  );
}
