export const SAVE_PROFILE = 'SAVE_PROFILE';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';

export const saveProfile = (profile) => ({
  type: SAVE_PROFILE,
  payload: profile,
});

export const calculateScore = (score) => ({
  type: CALCULATE_SCORE,
  payload: score,
});
