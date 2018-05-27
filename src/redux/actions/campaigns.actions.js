import {CampaignsActionTypes} from '../actiontypes/campaigns.actiontypes';
import CampaignsService from '../../services/campaigns.services';

export const handleCampaignInfoInputChange = (field, value) => ({
    type: CampaignsActionTypes.UPDATE_CAMPAIGN_INFO,
    field,
    value
});

export const saveImageUrl = (imageUrl) => ({
    type: CampaignsActionTypes.SAVE_IMAGE_URL,
    imageUrl
});

export const saveCanvasObject = (canvasObject) => ({
    type: CampaignsActionTypes.SAVE_CANVAS_OBJECT,
    canvasObject
});

export const createCampaign = (campaign) => ({
    type: CampaignsActionTypes.CREATE,
    payload: CampaignsService.createCampaign(campaign)
});
