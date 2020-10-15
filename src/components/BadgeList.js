import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';
class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          {/* <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          /> */}
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email} 
            />

  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }
  
  class BadgeList extends React.Component {
    render() {
      if (this.props.badges.length===0){
        return(
          <div>
            <h3>No Badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new Badge
            </Link>
          </div>
        )
      }
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map(badge => {
              return (
                <li key={badge.id}>
                  <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`} >
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
export default BadgeList;