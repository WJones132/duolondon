#!/usr/bin/env ts-node

import { graph } from './dijkstra-algorithm'
import { stations } from './stations'

const result = graph.dijkstra(stations.get('Oxford')?.name!, stations.get('Covent')?.name!);
console.log("Shortest Path:", result.path);
console.log("Shortest Distance:", result.distance);