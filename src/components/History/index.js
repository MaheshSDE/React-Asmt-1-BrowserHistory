import './index.css'

const History = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="listItems">
      <div className="detailsContainer">
        <p className="timeAccessed">{timeAccessed}</p>
        <div className="descriptionContainer">
          <img src={logoUrl} alt="domain logo" className="logoImg" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>

      <button
        type="button"
        className="button"
        onClick={onDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

export default History
