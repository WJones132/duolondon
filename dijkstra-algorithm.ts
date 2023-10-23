class NodeVertex {
    nameOfVertex: string = '';
    weight: number = 0;
}

export class Vertex {
    name: string;
    nodes: NodeVertex[];
    weight: number;

    constructor(theName: string, theNodes: NodeVertex[], theWeight: number) {
        this.name = theName;
        this.nodes = theNodes;
        this.weight = theWeight;
    }
}

export class Dijkstra {

    vertices: any;

    constructor() {
        this.vertices = {};
    }

    addVertex(vertex: Vertex): void {
        this.vertices[vertex.name] = vertex;
    }

    findPointsOfShortestWay(start: string, finish: string, weight: number): string[] {

        let nextVertex: string = finish;
        let arrayWithVertex: string[] = [];
        while (nextVertex !== start) {

            let minWeigth: number = Number.MAX_VALUE;
            let minVertex: string = "";
            for (let i of this.vertices[nextVertex].nodes) {
                if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                    minWeigth = this.vertices[i.nameOfVertex].weight;
                    minVertex = i.nameOfVertex;
                }
            }
            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        }
        return arrayWithVertex;
    }


    findShortestWay(start: string, finish: string): string[] {
        const vertices = this.vertices;
        
        const distance = {};
        const visited = {};
        const previous = {};
    
        // Initialize distances, visited flags, and previous vertices
        for (let vertex of vertices) {
            distance[vertex.name] = vertex.name === start ? 0 : Infinity;
            visited[vertex.name] = false;
            previous[vertex.name] = null;
        }
    
        // Continue until all vertices have been visited
        while (true) {
            let minDistance = Infinity;
            let currentVertex: boolean = false;
    
            // Find the unvisited vertex with the smallest distance
            for (let vertex of vertices) {
                if (!visited[vertex.name] && distance[vertex.name] < minDistance) {
                    currentVertex = vertex.name;
                    minDistance = distance[vertex.name];
                }
            }
    
            if (currentVertex === null) {
                break; // All remaining vertices are unreachable
            }
    
            visited[currentVertex] = true;
    
            // Update distances to neighbors
            for (let neighbor of this.vertices[currentVertex].nodes) {
                const calculateWeight = distance[currentVertex] + neighbor.weight;
                if (calculateWeight < distance[neighbor.nameOfVertex]) {
                    distance[neighbor.nameOfVertex] = calculateWeight;
                    previous[neighbor.nameOfVertex] = currentVertex;
                }
            }
        }
    
        // Reconstruct the shortest path
        if (distance[finish] === Infinity) {
            return []; // No path found
        }
    
        const shortestPath = [];
        let current: string = finish;
        while (current !== null) {
            shortestPath.unshift(current);
            current = previous[current];
        }
        shortestPath.push(distance[finish].toString());
    
        return shortestPath;
    }
    

}