import { stations } from './stations';
import { lines } from './lines';
import { Line, Station } from './dijkstra-algorithm'
import * as readline from 'readline';

const maxStations = stations.size;

export const questions: Function[] = [
    stationBetweenStations,
    connectingStationsOnDifferentLines,
    lineAtStation,
    colourOfLine
]

function getRandomStation(): Station {
    const values = [...stations.values()]
    return values[Math.floor(Math.random() * values.length)]
}

function getRandomLine(): Line {
    const num = Math.floor(Math.random() * lines.length)
    return lines[num];
}

// station between stations
function stationBetweenStations() { 

}


// stations connecting stations on different lines
function connectingStationsOnDifferentLines() {

}


// what line is at this station?
function lineAtStation(): string[] {
    const station: Station = getRandomStation();
    return station.lines;
}


// what colour is this line?
async function colourOfLine(): Promise<string> {
    const line = getRandomLine();
    const query: string = `What is the line colour of the ${line.name} line? `;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        if (ans.toLowerCase() === line.colour.toLowerCase()) {
            console.log("Correct!");
        }
        else {
            console.log("Incorrect!");
        }
        rl.close();
        resolve(ans);
    }))
}


//