export const initialState = {
  users: [
    {
      name: 'Jett',
      id: 1,
      roles: ['child'],
      approvers: [3],
      primaryColor: '#372ccf',
      secondaryColor: '#b3affc',
      pointsValue: 95
    },
    {
      name: 'Reagan',
      id: 2,
      roles: ['child'],
      approvers: [3, 4],
      pointsValue: 199
    },
    {
      name: 'Dad',
      id: 3,
      roles: ['admin', 'adult'],
      approvers: [3, 4],
      approverFor: [1, 2, 3, 4],
      pointsValue: 2000
    },
    {
      name: 'Mom',
      id: 4,
      roles: ['admin', 'adult'],
      approvers: [3, 4],
      approverFor: [1, 2, 3, 4],
      pointsValue: 1999
    }
  ],
  activities: [
    {
      id: 1,
      name: 'Cleaned my room',
      description:
        'I cleaned my entire room. There is nothing on the floor, my bed is made and trash is empty.',
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
      description: "I vacuumed the entire living room and around Dad's desk.",
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
    },
    {
      id: 6,
      name: 'Cleaned up after Charlie - Small Mess',
      description: "I cleaned up a small mess of Charlie's",
      points: 5
    },
    {
      id: 7,
      name: 'Cleaned up after Charlie - Large Mess',
      description: "I cleaned up a large mess of Charlie's",
      points: 10
    }
  ],
  rewards: [
    {
      id: 1,
      name: 'Pick dinner at home',
      cost: 50
    },
    {
      id: 2,
      name: 'Pick dinner out - Fast food',
      cost: 200
    },
    {
      id: 3,
      name: 'Pick dessert at grocery store',
      cost: 200
    },
    {
      id: 4,
      name: 'Pick out small toy from grocery store',
      cost: 100
    },
    {
      id: 5,
      name: 'Choose the movie for family at home',
      cost: 100
    },
    {
      id: 6,
      name: 'Choose movie for family outside the house',
      cost: 1000
    },
    {
      id: 7,
      name: 'Go to the mall and trip to candy store in mall',
      cost: 2000
    }
  ],
  approvalQueue: [],
  activeUser: {},
  toasts: {
    visible: false,
    title: '',
    body: ''
  },
  router: {}
};
