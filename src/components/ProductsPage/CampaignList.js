import React from 'react';
import PropTypes from 'prop-types';

import Campaign from "./Campaign";

const CampaignList = (
  {
    campaigns,
    handleDeleteCampaign
  }
) => (
  <div className="campaign-list">
    {
      campaigns.map(campaign => {
        return (
          <Campaign
            id={campaign._id}
            title={campaign.title}
            image={campaign.canvasDataUrl}
            status={campaign.active}
            key={campaign._id}
            handleDelete={() => handleDeleteCampaign(campaign._id)}/>
        )
      })
    }
  </div>
);

CampaignList.propTypes = {
  campaigns: PropTypes.array.isRequired,
  handleDeleteCampaign: PropTypes.func.isRequired
};

export default CampaignList;

