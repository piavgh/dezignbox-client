import CampaignsActionTypes from '../actiontypes/campaigns.actiontypes';
import CampaignsService from '../../services/campaigns.services';

export const handleCampaignInfoInputChange = (field, value, params) => ({
  type: CampaignsActionTypes.UPDATE_CAMPAIGN_INFO,
  field,
  value,
  params
});

export const saveImageUrl = (imageUrl) => ({
  type: CampaignsActionTypes.SAVE_IMAGE_URL,
  imageUrl
});

export const saveCanvasDataUrl = (canvasDataUrl) => ({
  type: CampaignsActionTypes.SAVE_CANVAS_DATA_URL,
  canvasDataUrl
});

export const createCampaign = (ownerId, campaign) => ({
  type: CampaignsActionTypes.CREATE,
  payload: CampaignsService.createCampaign(ownerId, campaign)
});

export const updateCampaign = (campaign) => ({
  type: CampaignsActionTypes.UPDATE,
  payload: CampaignsService.updateCampaign(campaign)
});

export const deleteCampaign = (campaignId) => ({
  type: CampaignsActionTypes.DELETE,
  payload: CampaignsService.deleteCampaign(campaignId)
});

export const fetchCampaigns = (userId, page) => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGNS,
  payload: CampaignsService.fetchCampaigns(userId, page)
});

export const fetchCampaignDetail = (id) => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL,
  payload: CampaignsService.fetchCampaignDetail(id)
});
