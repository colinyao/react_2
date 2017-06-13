import loadAbout from 'bundle-loader?lazy!./loadAbout'
import loadDashboard from 'bundle-loader?lazy!./loadDashboard'

// components load their module for initial visit
const About = () => (
  <Bundle load={loadAbout}>
    {
      (About) => <About/>
    }
  </Bundle>
)

const Dashboard = () => (
  <Bundle load={loadDashboard}>
    {(Dashboard) => <Dashboard/>}
  </Bundle>
)

class App extends React.Component {
  componentDidMount() {
    // preloads the rest
    loadAbout(() => {})
    loadDashbaord(() => {})
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Route path="/about" component={About}/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    )
  }
}
ReactDOM.render(<App/>, preloadTheRestOfTheApp)