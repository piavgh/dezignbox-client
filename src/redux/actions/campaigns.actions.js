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

export const fetchCampaignsPending = () => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGNS_PENDING
});

export const fetchCampaignsSuccess = campaigns => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGNS_SUCCESS,
  payload: {campaigns}
});

export const fetchCampaignsFailure = error => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGNS_FAILURE,
  payload: {error}
});

export function fetchCampaigns(userId, page) {
  return dispatch => {
    dispatch(fetchCampaignsPending());
    return CampaignsService.fetchCampaigns(userId, page)
      .then(res => {
        dispatch(fetchCampaignsSuccess(res.data.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchCampaignsFailure(error.response.data.error));
      });
  };
}

export const fetchCampaignDetailPending = () => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL_PENDING
});

export const fetchCampaignDetailSuccess = campaign => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL_SUCCESS,
  payload: {campaign}
});

export const fetchCampaignDetailFailure = error => ({
  type: CampaignsActionTypes.FETCH_CAMPAIGN_DETAIL_FAILURE,
  payload: {error}
});

export function fetchCampaignDetail(id) {
  return dispatch => {
    dispatch(fetchCampaignDetailPending());
    return CampaignsService.fetchCampaignDetail(id)
      .then(res => {
        dispatch(fetchCampaignDetailSuccess(res.data.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchCampaignDetailFailure(error.response.data.error));
      });
  };
}
