import { stations } from './stations'

export class Station {
    name: string = '';
    lines: string[] = [];
}

export class Line {
    name: string = '';
    colour: string = '';
}

export class Graph {
    private adjacencyList: Map<string, any>;
    // private adjacencyList: { [name: string]: { weight: number, lines: string[] } };

    /*
    station: {
        weight: number
        line: [
            string
        ]
    }
    */

    constructor() {
        this.adjacencyList = new Map();
    }

    addStation(vertex: Station) {
        if (!this.adjacencyList.has(vertex.name)) {
            this.adjacencyList.set(vertex.name, new Map());
            this.adjacencyList.get(vertex.name)!.set('line', vertex.lines)
        }
    }

    addEdge(vertex1: Station, vertex2: Station, weight: number) {
        this.addStation(vertex1);
        this.addStation(vertex2);
        this.adjacencyList.get(vertex1.name)!.set(vertex2.name, weight);
        this.adjacencyList.get(vertex2.name)!.set(vertex1.name, weight);
    }

    dijkstra(startStation: string, endStation: string) {
        const distances: Map<string, number> = new Map();
        const previous: Map<string, string | null> = new Map();
        const visited: Set<string> = new Set();

        for (const vertex of this.adjacencyList.keys()) {
            distances.set(vertex, vertex === startStation ? 0 : Infinity);
            previous.set(vertex, null);
        }

        let currentStation = startStation;

        while (currentStation !== endStation) {
            const neighbors = this.adjacencyList.get(currentStation);

            if (!neighbors) break;

            for (const neighbor of neighbors.keys()) {
                if (!visited.has(neighbor)) {
                    const candidate = distances.get(currentStation)! + neighbors.get(neighbor)!;

                    if (candidate < distances.get(neighbor)!) {
                        distances.set(neighbor, candidate);
                        previous.set(neighbor, currentStation);
                    }
                }
            }

            visited.add(currentStation);

            let unvisitedVertices: [string, number][] = Array.from(distances.entries())
                .filter(([vertex]) => !visited.has(vertex));

            if (unvisitedVertices.length === 0) break;

            unvisitedVertices = unvisitedVertices.sort((a, b) => a[1] - b[1]);

            currentStation = unvisitedVertices[0][0];
        }

        const path: string[] = [];
        const linesUsed: string[] = [];

        if (currentStation === null || currentStation === undefined) {
            return {
                path: ['No available path to end vertex'],
                distance: Infinity
            }; // No path to endStation
        }

        while (currentStation) {
            path.unshift(currentStation);
            linesUsed.unshift()
            currentStation = previous.get(currentStation)!;
        }

        if (path[0] === startStation) {
            return {
                path,
                distance: distances.get(endStation),
                lines: linesUsed
            };
        } else {
            return {
                path: [],
                distance: Infinity
            };
        }
    }
}

export const graph = new Graph();

graph.addEdge(stations.get('Bond')!, stations.get('Oxford')!, 3) // bond to oxford
graph.addEdge(stations.get('Bond')!, stations.get('Green')!, 3) // bond to green
graph.addEdge(stations.get('Covent')!, stations.get('Leicester')!, 6) // covent to leicester
graph.addEdge(stations.get('Covent')!, stations.get('Holborn')!, 14) // covent to holborn
graph.addEdge(stations.get('Oxford')!, stations.get('Green')!, 4) // oxford to green
graph.addEdge(stations.get('Oxford')!, stations.get('Picadilly')!, 4) // oxford to piccadilly
graph.addEdge(stations.get('Oxford')!, stations.get('Tottenham CR')!, 6) // oxford to tottenham
graph.addEdge(stations.get('Picadilly')!, stations.get('Green')!, 4) // piccadilly to green
graph.addEdge(stations.get('Picadilly')!, stations.get('Leicester')!, 6) // piccadilly to leicester
graph.addEdge(stations.get('Tottenham CR')!, stations.get('Leicester')!, 4) // tottenham to leicester
graph.addEdge(stations.get('Tottenham CR')!, stations.get('Holborn')!, 10) // tottenham to holborn