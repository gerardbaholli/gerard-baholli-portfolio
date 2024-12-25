import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        gerard baholli
      </div>
      <div>
        <Link to="/portfolio">portfolio</Link>
      </div>
      <div>
        <Link to="/utils">utils</Link>
      </div>
      <div>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}

export default Home;
