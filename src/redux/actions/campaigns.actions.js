import {CampaignsActionTypes} from '../actiontypes/campaigns.actiontypes';
import CampaignsService from '../../services/campaigns.services';

export const handleCampaignInfoInputChange = (field, value) => {
    return {
        type: CampaignsActionTypes.UPDATE_CAMPAIGN_INFO,
        field,
        value
    }
};

export const createCampaign = () => {

};
