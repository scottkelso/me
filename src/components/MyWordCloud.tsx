import { Wordcloud } from '@visx/wordcloud';
import { scaleLog } from '@visx/scale';
import { Text } from '@visx/text';
import { useTooltip } from '@visx/tooltip';
import technologiesCSV from './technologies.csv?raw';

interface WordCloudWord {
  text: string;
  value: number;
  description?: string;
}

interface TechnologyRow {
  Technology: string;
  Description: string;
  Confidence: string;
  Category: string;
  LastUsed: string;
}

interface CSVLine {
  text: string;
  value: number;
  description: string;
}

const parseCSV = (csv: string): WordCloudWord[] => {
  const lines = csv.trim().split('\n');
  
  return lines.slice(1)
    .map(parseCSVLine())
    .filter(word => word.text && word.value);
};

const parseCSVLine = (): (value: string, index: number, array: string[]) => CSVLine => {
  return line => {
    // Handle quoted fields with commas
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue);
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue);

    const technology: TechnologyRow = {
      Technology: values[0],
      Description: values[1],
      Confidence: values[2],
      Category: values[3],
      LastUsed: values[4],
    };

    return {
      text: technology.Technology,
      value: parseInt(technology.Confidence) || 50,
      description: technology.Description,
    };
  };
}

export default function MyWordCloud() {
  const isMobile = window.innerWidth < 600;
  const width = isMobile ? window.innerWidth - 32 : 600;
  const height = isMobile ? 300 : 400;

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    showTooltip,
    hideTooltip,
    tooltipOpen,
  } = useTooltip<{ text: string }>();

const words: WordCloudWord[] = parseCSV(technologiesCSV);

const colors = ['#2e7ae8', '#FFFFFF', '#82a6c2', '#A4C8E1', '#D9E6F2', '#33ccc9'];

const fontScale = scaleLog({
  domain: [Math.min(...words.map(w => w.value)), Math.max(...words.map(w => w.value))],
  range: [20, 80],
});

  return (
    <div style={{ position: 'relative', width, height, margin: '0 auto', maxWidth: '100vw' }}>
      <Wordcloud
        words={words}
        width={width}
        height={height}
        fontSize={word => fontScale(word.value)}
        font={'Impact'}
        padding={2}
        spiral={'archimedean'}
        rotate={0}
        random={() => 0.5}
        children={cloudWords =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor="middle"
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
              style={{ cursor: 'pointer' }}
              onMouseMove={e => {
                const original = words.find(word => word.text === w.text);
                showTooltip({
                  tooltipLeft: e.clientX - e.currentTarget.getBoundingClientRect().left,
                  tooltipTop: e.clientY - e.currentTarget.getBoundingClientRect().top,
                  tooltipData: { text: original?.description ?? w.text as string },
                });
              }}
              onMouseLeave={hideTooltip}
            >
              {w.text}
            </Text>
          ))
        }
      />
      {tooltipOpen && tooltipData && (
        <div
          style={{
            position: 'absolute',
            left: (tooltipLeft ?? 0) + 10,
            top: (tooltipTop ?? 0) - 10,
            background: 'rgba(30,41,59,0.97)',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            fontSize: '1rem',
            maxWidth: 320,
            pointerEvents: 'none',
            zIndex: 9999,
            whiteSpace: 'pre-line',
          }}
        >
          {tooltipData.text}
        </div>
      )}
    </div>
  );
}
