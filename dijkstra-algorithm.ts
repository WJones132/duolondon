import { stations } from './stations'

export class Station {
    name: string = '';
    lines: Line[] = [];
}

export class Line {
    name: string = '';
    colour: string = '';
}

export class Graph {
    private adjacencyList: Map<string, any>;
    private vertices: Map<string, Station>;

    constructor() {
        this.adjacencyList = new Map();
        this.vertices = new Map();
    }

    addStation(vertex: Station) {
        if (!this.adjacencyList.has(vertex.name)) {
            this.adjacencyList.set(vertex.name, new Map());
            this.vertices.set(vertex.name, vertex)
        }
    }

    addEdge(vertex1: Station, vertex2: Station, weight: number) {
        this.addStation(vertex1);
        this.addStation(vertex2);
        this.adjacencyList.get(vertex1.name)!.set(vertex2.name, weight);
        this.adjacencyList.get(vertex2.name)!.set(vertex1.name, weight);
    }

    findVerticesCountEdgesAway(startVertex: Station, count: number): Station[] {
        const countEdgesAway: Station[] = [];
        const visited: Set<string> = new Set();

        const queue: { vertex: Station; distance: number }[] = [{ vertex: startVertex, distance: 0 }];
        const vertexLines: string[] = startVertex.lines.reduce((vertexLines: string[], currentStation: Line) => {
            vertexLines.push(currentStation.name);
            return vertexLines;
        }, []);

        while (queue.length > 0) {
            const { vertex, distance } = queue.shift()!;

            if (distance === count) {
                countEdgesAway.push(vertex);
                continue;
            }

            visited.add(vertex.name);

            const neighbors = this.adjacencyList.get(vertex.name);

            if (!neighbors) continue;

            for (const neighborName of neighbors.keys()) {
                const neighbor = this.vertices.get(neighborName);

                if (neighbor && !visited.has(neighbor.name)) {

                    // if neighbour and vertex are on same line
                    for (let i = 0; i < neighbor.lines.length; i++) {
                        if ((vertexLines.includes(neighbor.lines[i].name))) {
                            queue.push({ vertex: neighbor, distance: distance + 1 });
                        }
                    }

                }
            }
        }

        return [...new Set(countEdgesAway)];
    }

    dijkstra(startStation: Station, endStation: Station): { path: Station[] | string[], distance: number } {
        const distances: Map<string, number> = new Map();
        const previous: Map<string, string | null> = new Map();
        const visited: Set<string> = new Set();

        for (const vertex of this.adjacencyList.keys()) {
            distances.set(vertex, vertex === startStation.name ? 0 : Infinity);
            previous.set(vertex, null);
        }

        let currentStation = startStation.name;

        while (currentStation !== endStation.name) {
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

        const path: Station[] = [];
        const linesUsed: Line[] = [];

        if (currentStation === null || currentStation === undefined) {
            return {
                path: ['No available path to end vertex'],
                distance: Infinity
            }; // No path to endStation
        }

        while (currentStation) {
            path.unshift(this.vertices.get(currentStation)!);
            // linesUsed.unshift()
            currentStation = previous.get(currentStation)!;
        }

        console.log(path)

        if (path[0].name === startStation.name) {
            return {
                path,
                distance: distances.get(endStation.name)!,
                // lines: linesUsed
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

graph.addEdge(stations.get('Bond')!, stations.get('Oxford')!, 7) // bond to oxford
graph.addEdge(stations.get('Bond')!, stations.get('Green')!, 14) // bond to green
graph.addEdge(stations.get('Bond')!, stations.get('Tottenham CR')!, 12) // bond to tottenhamcr
graph.addEdge(stations.get('Covent')!, stations.get('Leicester')!, 4) // covent to leicester
graph.addEdge(stations.get('Covent')!, stations.get('Holborn')!, 8) // covent to holborn
graph.addEdge(stations.get('Oxford')!, stations.get('Green')!, 15) // oxford to green
graph.addEdge(stations.get('Oxford')!, stations.get('Picadilly')!, 12) // oxford to piccadilly
graph.addEdge(stations.get('Oxford')!, stations.get('Tottenham CR')!, 9) // oxford to tottenham
graph.addEdge(stations.get('Picadilly')!, stations.get('Green')!, 8) // piccadilly to green
graph.addEdge(stations.get('Picadilly')!, stations.get('Leicester')!, 6) // piccadilly to leicester
graph.addEdge(stations.get('Tottenham CR')!, stations.get('Leicester')!, 8) // tottenham to leicester
graph.addEdge(stations.get('Tottenham CR')!, stations.get('Holborn')!, 10) // tottenham to holborn
graph.addEdge(stations.get('Charing')!, stations.get('Picadilly')!, 11) // charing to picadilly
graph.addEdge(stations.get('Charing')!, stations.get('Leicester')!, 7) // charing to leicester
graph.addEdge(stations.get('Embankment')!, stations.get('Charing')!, 3) // embankment to charing
graph.addEdge(stations.get('Embankment')!, stations.get('Westminster')!, 10) // embankment to westminster
graph.addEdge(stations.get('Westminster')!, stations.get('James')!, 11) // westminster to james
graph.addEdge(stations.get('Westminster')!, stations.get('Green')!, 21) // westminster to green
graph.addEdge(stations.get('James')!, stations.get('Victoria')!, 11) // james to victoria
graph.addEdge(stations.get('Green')!, stations.get('Victoria')!, 19) // green to victoria