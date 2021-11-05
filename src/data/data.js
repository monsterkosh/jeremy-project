import avatar from '../assets/images/image-jeremy.png';
import iconWork from '../assets/images/icon-work.svg';
import iconPlay from '../assets/images/icon-play.svg';
import iconStudy from '../assets/images/icon-study.svg';
import iconExercise from '../assets/images/icon-exercise.svg';
import iconSocial from '../assets/images/icon-social.svg';
import iconSelfCare from '../assets/images/icon-self-care.svg';

export const user = {
  name: 'Jeremy Robson',
  avatar: avatar,
  schedule: {
    work: {
      name: 'work',
      img: iconWork,
      color: '#ff8c66',
      period: {
        daily: {
          hours: '5hrs',
          lastPeriod: 'last day - 7hrs',
        },
        weekly: {
          hours: '32hrs',
          lastPeriod: 'last week - 36hrs',
        },
        monthly: {
          hours: '103hrs',
          lastPeriod: 'last month - 128hrs',
        },
      },
    },
    play: {
      name: 'play',
      img: iconPlay,
      color: '#56c2e6',
      period: {
        daily: {
          hours: '1hrs',
          lastPeriod: 'last day - 2hrs',
        },
        weekly: {
          hours: '10hrs',
          lastPeriod: 'last week - 8hrs',
        },
        monthly: {
          hours: '23hrs',
          lastPeriod: 'last month - 29hrs',
        },
      },
    },
    study: {
      name: 'study',
      img: iconStudy,
      color: '#ff5c7c',
      period: {
        daily: {
          hours: '0hrs',
          lastPeriod: 'last day - 1hrs',
        },
        weekly: {
          hours: '4hrs',
          lastPeriod: 'last week - 7hrs',
        },
        monthly: {
          hours: '13hrs',
          lastPeriod: 'last month - 19hrs',
        },
      },
    },
    exercise: {
      name: 'exercise',
      img: iconExercise,
      color: '#4acf81',
      period: {
        daily: {
          hours: '1hrs',
          lastPeriod: 'last day - 1hrs',
        },
        weekly: {
          hours: '4hrs',
          lastPeriod: 'last week - 5hrs',
        },
        monthly: {
          hours: '11hrs',
          lastPeriod: 'last month - 18hrs',
        },
      },
    },
    social: {
      name: 'social',
      img: iconSocial,
      color: '#7536d3',
      period: {
        daily: {
          hours: '1hrs',
          lastPeriod: 'last day - 3hrs',
        },
        weekly: {
          hours: '5hrs',
          lastPeriod: 'last week - 10hrs',
        },
        monthly: {
          hours: '21hrs',
          lastPeriod: 'last month - 23hrs',
        },
      },
    },
    selfCare: {
      name: 'self care',
      img: iconSelfCare,
      color: '#f1c65b',
      period: {
        daily: {
          hours: '0hrs',
          lastPeriod: 'last day - 1hrs',
        },
        weekly: {
          hours: '2hrs',
          lastPeriod: 'last week - 2hrs',
        },
        monthly: {
          hours: '7hrs',
          lastPeriod: 'last month - 11hrs',
        },
      },
    },
  },
};
