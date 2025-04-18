import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

interface ExampleProps {
  width: number;
  height: number;
  showControls?: boolean;
}

export interface WordData {
  text: string;
  value: number;
}

type SpiralType = 'archimedean' | 'rectangular';

export default function MyWordCloud({ width, height }: ExampleProps) {
  const colors = ['#2e7ae8', '#FFFFFF', '#82a6c2', '#A4C8E1', '#D9E6F2', '#33ccc9'];

  const words = [
    {text: 'Python', value: 100 },
    {text: 'Typescript', value: 60 },
    {text: 'Java', value: 30 },
    {text: 'Javascript', value: 20 },
    {text: 'SQL', value: 45 },
    {text: 'AWS', value: 80 },
    {text: 'Docker', value: 70 },
    {text: 'Kubernetes', value: 55 },
    {text: 'Jenkins', value: 30 },
    {text: 'NodeJS', value: 60 },
    {text: 'GraphQL', value: 35 },
  ];

  const fontScale = scaleLog({
    domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
    range: [10, 100],
  });
  const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

  const fixedValueGenerator = () => 0.5;


  const theme = useTheme();
  const isSmOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="wordcloud">
      <Wordcloud
        words={words}
        width={isSmOrLarger ? width : width / 2}
        height={height}
        fontSize={fontSizeSetter}
        font={'Impact'}
        padding={2}
        spiral={"archimedean" as SpiralType}
        rotate={0}
        random={fixedValueGenerator}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={'middle'}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
      <style>{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
        }

        .wordcloud label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          margin-right: 8px;
        }
        .wordcloud textarea {
          min-height: 100px;
        }
      `}</style>
    </div>
  );
}
