class Vertex {
    name: string;
    line: string[];
}

export class Graph {
    private adjacencyList: Map<string, Map<string, number>>;

    /*
    string: {
        string: number
        string: [
            string
        ]
    }
    */

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: Vertex) {
        if (!this.adjacencyList.has(vertex.name)) {
            this.adjacencyList.set(vertex.name, new Map());
        }
    }

    addEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1.name)!.set(vertex2.name, weight);
        this.adjacencyList.get(vertex2.name)!.set(vertex1.name, weight);
    }

    dijkstra(startVertex: string, endVertex: string) {
        const distances: Map<string, number> = new Map();
        const previous: Map<string, string | null> = new Map();
        const visited: Set<string> = new Set();

        for (const vertex of this.adjacencyList.keys()) {
            distances.set(vertex, vertex === startVertex ? 0 : Infinity);
            previous.set(vertex, null);
        }

        let currentVertex = startVertex;

        while (currentVertex !== endVertex) {
            const neighbors = this.adjacencyList.get(currentVertex);

            if (!neighbors) break;

            for (const neighbor of neighbors.keys()) {
                if (!visited.has(neighbor)) {
                    const candidate = distances.get(currentVertex)! + neighbors.get(neighbor)!;

                    if (candidate < distances.get(neighbor)!) {
                        distances.set(neighbor, candidate);
                        previous.set(neighbor, currentVertex);
                    }
                }
            }

            visited.add(currentVertex);

            let unvisitedVertices: [string, number][] = Array.from(distances.entries())
                .filter(([vertex]) => !visited.has(vertex));

            if (unvisitedVertices.length === 0) break;

            unvisitedVertices = unvisitedVertices.sort((a, b) => a[1] - b[1]);

            currentVertex = unvisitedVertices[0][0];
        }

        const path: string[] = [];
        const linesUsed: string[] = [];

        if (currentVertex === null || currentVertex === undefined) {
            return { 
                path: ['No available path to end vertex'], 
                distance: Infinity 
            }; // No path to endVertex
        }

        while (currentVertex) {
            path.unshift(currentVertex);
            linesUsed.unshift()
            currentVertex = previous.get(currentVertex)!;
        }

        if (path[0] === startVertex) {
            return {
                path,
                distance: distances.get(endVertex),
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