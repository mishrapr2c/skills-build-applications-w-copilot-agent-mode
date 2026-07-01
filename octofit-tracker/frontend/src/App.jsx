import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            Track workouts, manage teams, and celebrate progress in one modern multi-tier app.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
              View API health
            </a>
            <button className="btn btn-outline-secondary btn-lg" type="button">
              Explore features
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Ready for launch</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React 19 + Vite presentation tier</li>
                <li className="list-group-item">Express + TypeScript logic tier</li>
                <li className="list-group-item">Mongoose + MongoDB data tier</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
