import { REMOVE_APPROVAL_FROM_QUEUE } from './';

export const removeApprovalFromQueue = approvalId => ({
  type: REMOVE_APPROVAL_FROM_QUEUE,
  approvalId
});
