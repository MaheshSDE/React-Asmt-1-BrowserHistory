import {Component} from 'react'

import History from './components/History'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList, isTrue: false}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const filteredData = historyList.filter(eachItem => eachItem.id !== id)

    if (filteredData.length === 0) {
      this.setState({historyList: filteredData, isTrue: true})
    } else {
      this.setState({historyList: filteredData})
    }
  }

  render() {
    const {searchInput, historyList} = this.state
    let {isTrue} = this.state

    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (searchResults.length === 0) {
      isTrue = true
    }

    return (
      <div className="bg-container">
        <div className="headerContainer">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="historyImg"
            />
          </div>

          <div className="searchInputContainer">
            <div className="searchImageStyle">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchImg"
              />
            </div>

            <input
              type="search"
              className="inputStyle"
              value={searchInput}
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="searchElementsContainer">
          {!isTrue && (
            <div className="cardContainer">
              <ul className="unOrderListContainer">
                {searchResults.map(eachItem => (
                  <History
                    historyDetails={eachItem}
                    key={eachItem.id}
                    onDeleteHistory={this.onDeleteHistory}
                  />
                ))}
              </ul>
            </div>
          )}
          {isTrue && (
            <div className="empty-container">
              <p className="empty-element">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
