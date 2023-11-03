#!/usr/bin/env ts-node

import { graph } from './dijkstra-algorithm'
import { stations } from './stations'

// const result = graph.dijkstra(stations.get('Covent')!, stations.get('Oxford')!);
// console.log(result)

// ?.name
// console.log("Shortest Path:", result.path);
// console.log("Shortest Distance:", result.distance);


const verticesTwoEdgesAway = graph.findVerticesCountEdgesAway(stations.get('Leicester')!, 2);
console.log("Vertices two edges away from A:", verticesTwoEdgesAway);