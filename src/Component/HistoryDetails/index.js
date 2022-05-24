import './index.css'

const HistoryDetails = props => {
  const {historyDetails, onDeleteDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDeleteButton = () => {
    onDeleteDetails(id)
  }

  return (
    <li className="list-style">
      <div className="content-cont">
        <p className="time">{timeAccessed}</p>
        <div className="box-cont">
          <img className="site-image" src={logoUrl} alt="domain logo" />
          <div className="site-details-cont">
            <div>
              <p className="site-name">{title}</p>
              <p className="site-url">{domainUrl}</p>
            </div>
            <button
              className="delete-button"
              type="button"
              onClick={onDeleteButton}
              testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryDetails
