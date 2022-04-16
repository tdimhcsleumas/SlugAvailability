import {getUserAvailability} from '../../data/static';
import {UserAvailability} from '../../data/types';
import './AvailabilitySelector.scss'

export interface AvailabilitySelectorProps {
    startTime: number;  // should be the start of an hour
    endTime: number;    // should be the start of an hour
};

const heatClasses: string[] = [ 
  "#138808", // hottest first
  "#2a9320",
  "#429f39",
  "#59ab52",
  "#71b76a",
  "#89c383",
  "#a0cf9c",
  "#ffffff", // coldest last
];

const heatClassCount = 8;

const buildHeatMap = (
  startTime: number,
  endTime: number,
  userCount: number,
  userAvailabilities: UserAvailability[],
): [number, string][] => {
  const divisor = 3600 / 4; // consider 15 min increments
  const numberOfHours = Math.floor((endTime - startTime) / divisor);
  const heatMap = new Array(numberOfHours).fill(0);

  for (const userAvailability of userAvailabilities) {
    let start = Math.max(startTime, userAvailability.startTime);
    const end = Math.min(endTime, userAvailability.endTime);
    for (; start < end; start += divisor) {
      const idx = Math.floor((start - startTime) / divisor);
      heatMap[idx]++;
    }
  }

  const thresholds: number[] = [];
  let thresholdIncrement = 0;

  if (userCount <= heatClassCount - 1) {
    // number of colors exceeds number of users
    thresholdIncrement = Math.floor(heatClassCount / userCount); 
    for (let start = userCount; start > 0; start--) {
      thresholds.push(start);
    }
  } else {
    // number of users exceeds heat classes
    thresholdIncrement = 1;
    const inc = Math.floor(userCount / heatClassCount);    
    for (let start = userCount; start > 0; start -= inc) {
      thresholds.push(start);
    }
  }

  const colorMap: [number, string][] = heatMap.map(value => {
    let count = thresholds.length;
    for (let idx = 0; idx < count; ++idx) {
      if (value >= thresholds[idx]) {
        return [value, heatClasses[idx * thresholdIncrement]];
     }
    }

    // zero case
    return [value, heatClasses[heatClassCount - 1]];
  });

  

  return colorMap;
};


const AvailabilitySelector = ({startTime, endTime}: AvailabilitySelectorProps) => {
  const heatMap = buildHeatMap(startTime, endTime, getUserAvailability().length, getUserAvailability());

  return (
    <div>
      <table>
        <tbody>
          {heatMap.map(([value, color], idx) => (
            <tr key={idx}>
              <td className="tableRow" style={{background: color}}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailabilitySelector;
