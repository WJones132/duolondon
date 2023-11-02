import { lines } from './lines'
import { Station } from './dijkstra-algorithm'

export const stations = new Map<string, Station>([
    ["Bond", { name: "Bond Street", lines: [lines.get('Central')?.name!, lines.get('Jubilee')?.name!, lines.get('Lizzy')?.name!] }],
    ["Covent", { name: "Covent Garden", lines: [lines.get('Picadilly')?.name!] }],
    ["Green", { name: "Green Park", lines: [lines.get('Jubilee')?.name!, lines.get('Picadilly')?.name!, lines.get('Victoria')?.name!] }],
    ["Holborn", { name: "Holborn", lines: [lines.get('Central')?.name!, lines.get('Picadilly')?.name!] }],
    ["Leicester", { name: "Leicester Square", lines: [lines.get('Northern')?.name!, lines.get('Picadilly')?.name!] }],
    ["Oxford", { name: "Oxford Circus", lines: [lines.get('Bakerloo')?.name!, lines.get('Central')?.name!, lines.get('Victoria')?.name!] }],
    ["Picadilly", { name: "Piccadilly Circus", lines: [lines.get('Bakerloo')?.name!, lines.get('Picadilly')?.name!] }],
    ["Tottenham CR", { name: "Tottenham Court Road", lines: [lines.get('Central')?.name!, lines.get('Northern')?.name!, lines.get('Lizzy')?.name!] }],
    ["Charing", { name: "Charing Cross", lines: [lines.get('Bakerloo')?.name!, lines.get('Northern')?.name!] }],
    ["Westminster", { name: "Westminster", lines: [lines.get('District')?.name!, lines.get('Circle')?.name!, lines.get('Jubilee')?.name!] }],
    ["Embankment", { name: "Embankment", lines: [lines.get('District')?.name!, lines.get('Circle')?.name!, lines.get('Northern')?.name!, lines.get('Bakerloo')?.name!] }],
    ["James", { name: "St. James's Park", lines: [lines.get('District')?.name!, lines.get('Circle')?.name!] }],
    ["Victoria", { name: "Victoria", lines: [lines.get('District')?.name!, lines.get('Circle')?.name!, lines.get('Victoria')?.name!] }],
]);