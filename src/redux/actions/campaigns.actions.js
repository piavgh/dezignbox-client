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

export const saveCanvasDataUrl = (canvasDataUrl) => ({
  type: CampaignsActionTypes.SAVE_CANVAS_DATA_URL,
  canvasDataUrl
});

export const createCampaign = (ownerId, campaign) => ({
  type: CampaignsActionTypes.CREATE,
  payload: CampaignsService.createCampaign(ownerId, campaign)
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

export function fetchCampaigns(userId) {
  return dispatch => {
    dispatch(fetchCampaignsPending());
    return CampaignsService.fetchCampaigns(userId)
      .then(res => {
        dispatch(fetchCampaignsSuccess(res.data.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchCampaignsFailure(error.response.data.error));
      });
  };
}

export function deleteCampaign(campaignId) {
    return dispatch => {

    };
}
