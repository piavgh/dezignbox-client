import axios from 'axios';

const campaignsRoutesPrefix = "/api/v1/campaigns";

const CampaignsService = {
    createCampaign: (campaign, callback) => {
        axios.post(campaignsRoutesPrefix + '/', {
            campaign
        }).then(function (response) {
            return callback(null, response.data.data);
        }).catch(function (error) {
            return callback(error);
        });
    }
};

export default CampaignsService;
