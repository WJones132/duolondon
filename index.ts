#!/usr/bin/env ts-node
console.log('Hello world!')

import { Dijkstra, Vertex } from './dijkstra-algorithm'
import { Graph } from './d2'
import * as readline from 'readline'

const lines: string[] = [
    "Bakerloo",
    "Central",
    "Circle",
    "District",
    "Hammersmith & City",
    "Jubilee",
    "Metropolitan",
    "Northern",
    "Picadilly",
    "Victoria",
    "Waterloo & City"
]

const stations: string[] = [
    "Bond Street", // 0 connects to Green and Oxford
    "Covent Garden", // 1 connects to Holborn and Leicester
    "Green Park", // 2 connects to Bond, Oxford, and Picadilly
    "Holborn", // 3 connects to Covent and Tottenham
    "Leicester Square", // 4 connects to Covent, Picadilly, and Tottenham
    "Oxford Circus", // 5 connects to Bond, Green, Picadilly, and Tottenham
    "Piccadilly Circus", // 6 connects to Green, Leicester, and Oxford
    "Tottenham Court Road", // 7 connects to Holborn, Leicester, Oxford
]

const graph = new Graph();
graph.addEdge(stations[0], stations[5], 3) // bond to oxford
graph.addEdge(stations[0], stations[2], 3) // bond to green
graph.addEdge(stations[1], stations[4], 6) // covent to leicester
graph.addEdge(stations[1], stations[3], 14) // covent to holborn
graph.addEdge(stations[2], stations[5], 4) // oxford to green
graph.addEdge(stations[5], stations[6], 4) // oxford to piccadilly
graph.addEdge(stations[5], stations[7], 6) // oxford to tottenham
graph.addEdge(stations[6], stations[2], 4) // piccadilly to green
graph.addEdge(stations[6], stations[4], 6) // piccadilly to leicester
graph.addEdge(stations[7], stations[4], 4) // tottenham to leicester
graph.addEdge(stations[7], stations[3], 10) // tottenham to holborn



const result = graph.dijkstra(stations[5], stations[1])
// console.log(result)
console.log("Shortest Path:", result.path);
console.log("Shortest Distance:", result.distance);





// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// async function stationChooser() {
//     let startStation!: string
//     let endStation!: string

    
//     rl.question('Choose the end station: ', (ans) => {
//         let found: string | undefined

//         while (true) {
//             found = stations.find((el) => el.toLowerCase() == ans.toLowerCase())

//             if (found !== undefined) {
//                 endStation = found
//                 rl.close()
//                 break;
//             }
//             console.log('Station not found. Please try again: ')
//         }
//     })

//     return [
//         startStation,
//         endStation
//     ]
// }


// let dijkstra = new Dijkstra()

// dijkstra.addVertex(new Vertex(stations[0], [
//     {nameOfVertex: stations[2], weight: 1},
//     {nameOfVertex: stations[5], weight: 1},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[1], [
//     {nameOfVertex: stations[3], weight: 1},
//     {nameOfVertex: stations[4], weight: 1},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[2], [
//     {nameOfVertex: stations[0], weight: 1},
//     {nameOfVertex: stations[5], weight: 1},
//     {nameOfVertex: stations[6], weight: 1},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[3], [
//     {nameOfVertex: stations[1], weight: 1},
//     {nameOfVertex: stations[7], weight: 1},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[4], [
//     {nameOfVertex: stations[1], weight: 1},
//     {nameOfVertex: stations[6], weight: 1},
//     {nameOfVertex: stations[7], weight: 1},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[5], [
//     {nameOfVertex: stations[0], weight: 1},
//     {nameOfVertex: stations[4], weight: 1},
//     {nameOfVertex: stations[6], weight: 2},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[6], [
//     {nameOfVertex: stations[2], weight: 1},
//     {nameOfVertex: stations[4], weight: 1},
//     {nameOfVertex: stations[5], weight: 1},
// ], 1))

// dijkstra.addVertex(new Vertex(stations[7], [
//     {nameOfVertex: stations[3], weight: 1},
//     {nameOfVertex: stations[4], weight: 1},
//     {nameOfVertex: stations[5], weight: 1},
// ], 1))

// // console.log(dijkstra)
// console.log(dijkstra.findShortestWay(stations[0], stations[7]))
