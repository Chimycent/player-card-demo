import React from 'react'
import './home.css';

const Home = () => {
  return (
  <div className="jumbotron">
  <h1 className="display-4">UEFA Champions League</h1>
  <p className="lead">The UEFA Champions League is a prestigious annual football competition organized by the
   Union of European Football Associations (UEFA), featuring the top clubs from Europe's domestic leagues. 
   Clubs compete in a series of matches, starting with a group stage followed by knockout rounds, with the 
   ultimate goal of winning the title of European champions.</p>
  <hr className="my-4" />
  <h2>Sponsored by the Union of European Football Associations.</h2>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  )
}

export default Home