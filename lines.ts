import { Line } from "./dijkstra-algorithm";

export const lines = new Map<string, Line>([
    ["Bakerloo", { name: "Bakerloo", colour: "Brown" }],
    ["Central", { name: "Central", colour: "Red" }],
    ["Circle", { name: "Circle", colour: "Yellow" }],
    ["District", { name: "District", colour: "Green" }],
    ["H&S", { name: "Hammersmith & City", colour: "Pink" }],
    ["Jubilee", { name: "Jubilee", colour: "Grey" }],
    // ["Met", { name: "Metropolitan", colour: "Plum" }],
    ["Northern", { name: "Northern", colour: "Black" }],
    ["Picadilly", { name: "Picadilly", colour: "Dark Blue" }],
    ["Victoria", { name: "Victoria", colour: "Blue" }],
    ["Lizzy", { name: "Elizabeth", colour: "Purple" }],
    // { name: "Waterloo & City", colour: "Aquamarine" }
]);