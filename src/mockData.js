export const initialState = {
  users: [
    {
      name: "Jett",
      id: 1,
      roles: ['child'],
      approver: 'Dad',
      primaryColor: "#372ccf",
      secondaryColor: "#b3affc",
      pointsValue: 95,
    },
    {
      name: "Reagan",
      id: 2,
      roles: ['child'],
      approver: 'Dad',
      pointsValue: 199,
    },
    {
      name: 'Dad',
      id: 3,
      roles: ['admin', 'adult'],
      approver: null,
      approverFor: ['Reagan', 'Jett'],
      pointsValue: 2000,
    }
  ],
  activities: [
    {
      id: 1,
      name: 'Cleaned my room',
      description: 'I cleaned my entire room. There is nothing on the floor, my bed is made and trash is empty.',
      points: 10
    },
    {
      id: 2,
      name: 'Organized the entryway',
      description: 'I organized all of the shoes and cleaned up the entryway.',
      points: 10
    },
    {
      id: 3,
      name: 'Vacuumed living room',
      description: 'I vacuumed the entire living room and around Dad\'s desk.',
      points: 5
    },
    {
      id: 4,
      name: 'Cleaned bathroom',
      description: 'I cleaned the bathroom to the standards I was taught.',
      points: 15
    },
    {
      id: 5,
      name: 'Cleaned the house windows',
      description: 'I cleaned all the windows in the house with Windex',
      points: 10
    }
  ],
  approvalQueue: [
    {
      activityId: 1,
      requesterId: 1,
      approverId: 3
    },
    {
      activityId: 2,
      requesterId: 1,
      approverId: 3
    },
    {
      activityId: 2,
      requesterId: 2,
      approverId: 3
    }
  ],
  activeUser: {},
  router: {},
  form: {}
};