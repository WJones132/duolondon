import { stations } from './stations';
import { lines } from './lines';
import { Line, Station } from './dijkstra-algorithm'
import { graph } from './dijkstra-algorithm'
import * as readline from 'readline';

export const questions: Function[] = [
    stationBetweenStations,
    connectingStationsOnDifferentLines,
    lineOnBothStations,
    lineAtStation,
    colourOfLine
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getRandomStation(): Station {
    const stationsValues = [...stations.values()]
    return stationsValues[Math.floor(Math.random() * stationsValues.length)]
}

function getRandomLine(): Line {
    const lineValues = [...lines.values()]
    return lineValues[Math.floor(Math.random() * lineValues.length)];
}

// station between stations
function stationBetweenStations(): void {
    // get random line
    // filter stations on that line
    // 

    // const line: Line = getRandomLine();
    const station: Station = stations.get('Leicester')! // getRandomStation();
    console.log(station)

    const twoAway = graph.findVerticesCountEdgesAway(station, 2);

    console.log(twoAway)

    for (let i = 0; i < station.lines.length; i++) {

    }

    // const stationsValues = [...stations.values()]

    // const f = stationsValues.filter((li, index) => li.lines[index] === line.name);

    // console.log(f);

    // const fi = stationsValues.filter((li) => li === line.name);

    // console.log(fi);

    rl.close()


    // const stationsOnLine = stationsValues.reduce((ids, currentStation) => {
    //     if (currentStation.lines.filter((l) => l === line.name)) {
    //         return 
    //     }

    // }, [],);

}


// stations connecting stations on different lines
function connectingStationsOnDifferentLines() {

}

async function lineOnBothStations() {

}


// what line is at this station?
async function lineAtStation(): Promise<void> {
    const station: Station = getRandomStation();
    let query: string = `What line(s) are at ${station.name}? `;
    let answer: string[] = [];

    while (true) {
        const ans: Promise<string> = new Promise(resolve => rl.question(query, ans => { resolve(ans) }));
        const awaited: string = await ans;

        answer = awaited.toLowerCase().split(/[\s,]+/)

        console.log(answer.sort().toString())

        if (answer.sort().toString() === station.lines.sort().toString().toLowerCase()) {
            console.log('\nCorrect!');
            break;
        }

        console.log('\nIncorrect.')
        answer.splice(0, answer.length);
        continue;

    }
    rl.close();
}


// what colour is this line?
async function colourOfLine(): Promise<void> {
    const line = getRandomLine();
    let query: string = `What is the line colour of the ${line.name} line? `;

    // return new Promise(resolve => rl.question(query, ans => {
    while (true) {
        const ans: Promise<string> = new Promise(resolve => rl.question(query, ans => { resolve(ans) }));
        const awaited: string = await ans;

        if (awaited.toLowerCase() === line.colour.toLowerCase()) {
            console.log("Correct!");
            break;
        }

        console.log("Incorrect!");
        query = 'Enter another answer: '
    }
    rl.close();
}


//