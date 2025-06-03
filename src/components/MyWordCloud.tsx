import ReactWordcloud from 'react-wordcloud';

const words = [
  { text: 'Python', value: 100 },
  { text: 'TypeScript', value: 80 },
  { text: 'Java', value: 60 },
  { text: 'JavaScript', value: 70 },
  { text: 'SQL', value: 65 },
  { text: 'AWS', value: 90 },
  { text: 'Docker', value: 75 },
  { text: 'Kubernetes', value: 75 },
  { text: 'NodeJS', value: 80 },
  { text: 'GraphQL', value: 55 },
  { text: 'Jenkins', value: 40 },
  { text: 'Drone', value: 50 },
  { text: 'Azure', value: 40 },
  { text: 'Photoshop', value: 50 },
  { text: 'Jira', value: 50 },
  { text: 'Copilot', value: 65 },
  { text: 'ChatGPT', value: 65 },
];

const options = {
  rotations: 2,
  rotationAngles: [0, 0] as [number, number],
  fontSizes: [20, 80] as [number, number],
  fontFamily: 'Impact',
  colors: ['#2e7ae8', '#FFFFFF', '#82a6c2', '#A4C8E1', '#D9E6F2', '#33ccc9'],
};

const callbacks = {
  getWordTooltip: (word: any) => word.description || word.text,
};

export default function MyWordCloud() {
  return (
    <ReactWordcloud words={words} options={options} callbacks={callbacks} />
  );
}
