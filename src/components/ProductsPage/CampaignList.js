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
                        image={campaign.image}
                        status={campaign.status}
                        key={campaign.id}/>
                )
            })
        }
    </div>
);

CampaignList.propTypes = {
    campaigns: PropTypes.array.isRequired
};

export default CampaignList;

