import { UPDATE_ACTIVE_USER } from './';

const updateActiveUser = user => ({
  type: UPDATE_ACTIVE_USER,
  user
})

export default updateActiveUser;