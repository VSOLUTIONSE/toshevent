import weddingsImg from '../../assests/toshevent-table setting.jpg';
import socialImg from '../../assests/toshevents_2026-decor.jpg';
import corporateImg from '../../assests/toshevents_people.jpg';
import coordinationImg from '../../assests/toshevents_interior setting.jpg';

export const services = [
  {
    id: 'weddings',
    label: '01 / Signature',
    name: 'Weddings',
    eventType: 'Wedding',
    description: 'Thoughtful planning for celebrations that feel unmistakably yours.',
    image: weddingsImg,
    tags: ['Full Planning', 'Design & Styling', 'Guest Experience']
  },
  {
    id: 'social',
    label: '02 / Joyful',
    name: 'Social Celebrations',
    eventType: 'Birthday',
    description: 'Birthdays, anniversaries and milestones with a little more magic.',
    image: socialImg,
    tags: ['Milestone Galas', 'Private Soirées', 'Bespoke Themes']
  },
  {
    id: 'corporate',
    label: '03 / Refined',
    name: 'Corporate Events',
    eventType: 'Corporate',
    description: 'Polished experiences that make your people and purpose shine.',
    image: corporateImg,
    tags: ['Brand Summits', 'Annual Dinners', 'Award Ceremonies']
  },
  {
    id: 'coordination',
    label: '04 / Seamless',
    name: 'Event Coordination',
    eventType: 'Other',
    description: 'Calm, precise on-the-day direction from first guest to final toast.',
    image: coordinationImg,
    tags: ['Run-of-Show Direction', 'Vendor Management', 'Crisis Prevention']
  }
];

