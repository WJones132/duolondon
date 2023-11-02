#!/usr/bin/env ts-node

import { graph } from './dijkstra-algorithm'
import { stations } from './stations'

const result = graph.dijkstra(stations.get('Covent')?.name!, stations.get('Oxford')?.name!);
console.log("Shortest Path:", result.path);
console.log("Shortest Distance:", result.distance);