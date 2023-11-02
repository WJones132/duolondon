import { lines } from './lines'
import { Station } from './dijkstra-algorithm'

// export const stations: string[] = [
//     "Bond Street", // 0 connects to Green and Oxford
//     "Covent Garden", // 1 connects to Holborn and Leicester
//     "Green Park", // 2 connects to Bond, Oxford, and Picadilly
//     "Holborn", // 3 connects to Covent and Tottenham
//     "Leicester Square", // 4 connects to Covent, Picadilly, and Tottenham
//     "Oxford Circus", // 5 connects to Bond, Green, Picadilly, and Tottenham
//     "Piccadilly Circus", // 6 connects to Green, Leicester, and Oxford
//     "Tottenham Court Road", // 7 connects to Holborn, Leicester, Oxford
// ]

export const stations = new Map<string, Station>([
    ["Bond", { name: "Bond Street", lines: [lines[1].name, lines[4].name, lines[6].name] }],
    ["Covent", { name: "Covent Garden", lines: [lines[8].name] }],
    ["Green", { name: "Green Park", lines: [lines[5].name, lines[8].name, lines[9].name] }],
    ["Holborn", { name: "Holborn", lines: [lines[1].name, lines[8].name] }],
    ["Leicester", { name: "Leicester Square", lines: [lines[7].name, lines[8].name] }],
    ["Oxford", { name: "Oxford Circus", lines: [lines[0].name, lines[1].name, lines[9].name] }],
    ["Picadilly", { name: "Piccadilly Circus", lines: [lines[0].name, lines[8].name] }],
    ["Tottenham CR", { name: "Tottenham Court Road", lines: [lines[1].name, lines[7].name] }]
])

// export const stations = new Map<string, Station>([
//     ["Bond Street", { name: "Bond Street", lines: [lines[1].name, lines[4].name, lines[6].name] }],
// ])

// export const bondVertex: Station = {
//     name: "Bond Street",
//     lines: [
//         lines[1].name,
//         lines[4].name,
//         lines[6].name
//     ],
// }

// export const coventVertex: Station = {
//     name: "Covent Garden",
//     lines: [
//         lines[8].name
//     ]
// }

// export const greenVertex: Station = {
//     name: "Green Park",
//     lines: [
//         lines[5].name,
//         lines[8].name,
//         lines[9].name
//     ]
// }

// export const holbornVertex: Station = {
//     name: "Holborn",
//     lines: [
//         lines[1].name,
//         lines[8].name
//     ]
// }

// export const leicesterVertex: Station = {
//     name: "Leicester Square",
//     lines: [
//         lines[7].name,
//         lines[8].name
//     ]
// }

// export const oxfordVertex: Station = {
//     name: "Oxford Circus",
//     lines: [
//         lines[0].name,
//         lines[1].name,
//         lines[9].name
//     ]
// }

// export const piccadillyVertex: Station = {
//     name: "Piccadilly Circus",
//     lines: [
//         lines[0].name,
//         lines[8].name
//     ]
// }

// export const tottenhamcrVertex: Station = {
//     name: "Tottenham Court Road",
//     lines: [
//         lines[1].name,
//         lines[7].name
//     ]
// }