import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CampaignItem from "./CampaignItem";

export default class CampaignList extends Component {

  static propTypes = {
    campaigns: PropTypes.array.isRequired
  };

  render() {
    if (this.props.campaigns.length > 0) {
      return (
        <div className="campaign-list">
          {
            this.props.campaigns.map(campaign => {
              return (
                <CampaignItem
                  id={campaign._id}
                  title={campaign.title}
                  image={campaign.canvasDataUrl}
                  status={campaign.status}
                  key={campaign._id}/>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className="campaign-list">
          There is no product yet.
        </div>
      )
    }
  }
}

