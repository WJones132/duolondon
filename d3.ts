const V: number = 8
let graph: AdjListNode[]


export class AdjListNode {
    dest: number;
    weight: number;

    constructor(theDest: number, theWeight: number) {
        this.dest = theDest
        this.weight = theWeight
    }
}

export function dijkstra(V: number, graph: AdjListNode[]) {
    let distance: number[] = []
    let visited: boolean[] = []

    for (let i = 0; i < V; i++) {
        distance.push(Infinity)
        visited.push(false)
    }

    // distance = 0

    for (let i = 0; i < V; i++) {
        let u = getMinDistance(distance, visited)
        visited[u] = true

        for (let j = 0; j < graph.length; j++) {
            let v: number = graph[u].dest
            let weight: number = graph[u].weight

            if (!visited[v] && 
                distance[u] !== Infinity && 
                distance[u] + weight < distance[v]) {
                    distance[v] = distance[u] + weight
            }
        }
    }

    return distance
}

function getMinDistance(distance: number[], visited: boolean[]) {
    let minDistance: number = Infinity
    let minIndex: number = -1

    for (let i = 0; i < distance.length; i++) {
        if (!visited[i] && distance[i] <= minDistance) {
            minDistance = distance[i]
            minIndex = i
        }
    }

    return minIndex
}