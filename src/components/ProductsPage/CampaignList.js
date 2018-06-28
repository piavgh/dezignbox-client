import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Campaign from "./Campaign";

export default class CampaignList extends Component {

  static propTypes = {
    campaigns: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="campaign-list">
        {
          this.props.campaigns.map(campaign => {
            return (
              <Campaign
                id={campaign._id}
                title={campaign.title}
                image={campaign.canvasDataUrl}
                status={campaign.active}
                key={campaign._id}/>
            )
          })
        }
      </div>
    )
  }
}

