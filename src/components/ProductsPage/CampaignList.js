import React from 'react';
import PropTypes from 'prop-types';

import Campaign from "./Campaign";

const CampaignList = ({campaigns}) => (
    <div className="campaign-list">
        {
            campaigns.map(campaign => {
                return (
                    <Campaign
                        title={campaign.title}
                        image={campaign.canvasDataUrl}
                        status={campaign.active}
                        key={campaign._id}/>
                )
            })
        }
    </div>
);

CampaignList.propTypes = {
    campaigns: PropTypes.array.isRequired
};

export default CampaignList;

