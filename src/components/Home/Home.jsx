import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Benvenuto alla Homepage!</h1>
      <p>
        Per vedere tutti i progetti, clicca 
        <Link to="/projects"> qui</Link>.
      </p>
    </div>
  );
}

export default Home;
