import { lines } from './lines'
import { Station } from './dijkstra-algorithm'

export const stations = new Map<string, Station>([
    ["Bond", { name: "Bond Street", lines: [lines.get('Central')!, lines.get('Jubilee')!, lines.get('Lizzy')!] }],
    ["Covent", { name: "Covent Garden", lines: [lines.get('Picadilly')!] }],
    ["Green", { name: "Green Park", lines: [lines.get('Jubilee')!, lines.get('Picadilly')!, lines.get('Victoria')!] }],
    ["Holborn", { name: "Holborn", lines: [lines.get('Central')!, lines.get('Picadilly')!] }],
    ["Leicester", { name: "Leicester Square", lines: [lines.get('Northern')!, lines.get('Picadilly')!] }],
    ["Oxford", { name: "Oxford Circus", lines: [lines.get('Bakerloo')!, lines.get('Central')!, lines.get('Victoria')!] }],
    ["Picadilly", { name: "Piccadilly Circus", lines: [lines.get('Bakerloo')!, lines.get('Picadilly')!] }],
    ["Tottenham CR", { name: "Tottenham Court Road", lines: [lines.get('Central')!, lines.get('Northern')!, lines.get('Lizzy')!] }],
    ["Charing", { name: "Charing Cross", lines: [lines.get('Bakerloo')!, lines.get('Northern')!] }],
    ["Westminster", { name: "Westminster", lines: [lines.get('District')!, lines.get('Circle')!, lines.get('Jubilee')!] }],
    ["Embankment", { name: "Embankment", lines: [lines.get('District')!, lines.get('Circle')!, lines.get('Northern')!, lines.get('Bakerloo')!] }],
    ["James", { name: "St. James's Park", lines: [lines.get('District')!, lines.get('Circle')!] }],
    ["Victoria", { name: "Victoria", lines: [lines.get('District')!, lines.get('Circle')!, lines.get('Victoria')!] }],
]);