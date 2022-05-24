import {Component} from 'react'
import './index.css'
import HistoryDetails from '../HistoryDetails'

class HistoryItems extends Component {
  state = {
    searchInput: '',
    userSearchDetails: initialHistoryList,
    isDataAvailable: true,
  }

  onInputElement = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteDetails = id => {
    const {userSearchDetails} = this.state
    const UpdatedSearchList = userSearchDetails.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({userSearchDetails: UpdatedSearchList})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const {userSearchDetails} = this.state
    const searchResults = userSearchDetails.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const {isDataAvailable} = this.state
    if (searchResults === null) {
      this.setState(prevState => ({
        isDataAvailable: prevState.false,
      }))
    } else {
      this.setState(prevState => ({isDataAvailable: prevState.true}))
    }

    return (
      <div className="bg-cont">
        <nav className="nav-bar">
          <img
            className="logo-history"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-icon-input-cont">
            <div className="search-icon-cont">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="search-input-box"
              type="search"
              placeholder="Search history"
              onChange={this.onInputElement}
              value={searchInput}
            />
          </div>
        </nav>
        {isDataAvailable && (
          <ul className="list-item-cont">
            {searchResults.map(eachList => (
              <HistoryDetails
                historyDetails={eachList}
                key={eachList.id}
                onDeleteDetails={this.onDeleteDetails}
              />
            ))}
          </ul>
        )}
        {!isDataAvailable && <p>There is no history to show</p>}
      </div>
    )
  }
}

export default HistoryItems
