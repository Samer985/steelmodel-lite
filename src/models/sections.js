// src/models/sections.js
// Comprehensive steel section database for SteelModel Lite
// Exports a default object `Sections` containing common profiles grouped by type.

// Units: all linear dimensions in millimetres (mm).
// Example usage:
// import Sections from './src/models/sections.js';
// const ipe200 = Sections.IPE['IPE200'];
// console.log(ipe200.h, ipe200.b);

const Sections = {
  IPE: {
    IPE80: { h: 80, b: 46, tw: 3.8, tf: 5.2, area: 5.6 },
    IPE100: { h: 100, b: 55, tw: 4.1, tf: 5.7, area: 7.1 },
    IPE120: { h: 120, b: 64, tw: 4.4, tf: 6.4, area: 8.7 },
    IPE140: { h: 140, b: 73, tw: 4.6, tf: 7.1, area: 10.4 },
    IPE160: { h: 160, b: 82, tw: 5.0, tf: 7.8, area: 12.3 },
    IPE180: { h: 180, b: 91, tw: 5.2, tf: 8.5, area: 14.3 },
    IPE200: { h: 200, b: 100, tw: 5.6, tf: 8.5, area: 16.4 },
    IPE220: { h: 220, b: 110, tw: 5.9, tf: 9.1, area: 18.9 },
    IPE240: { h: 240, b: 120, tw: 6.2, tf: 9.7, area: 21.6 },
    IPE270: { h: 270, b: 125, tw: 6.5, tf: 10.2, area: 24.7 },
    IPE300: { h: 300, b: 150, tw: 6.9, tf: 10.2, area: 28.3 }
  },

  HEA: {
    HEA100: { h: 96, b: 100, tw: 4.5, tf: 6.5, area: 14.2 },
    HEA120: { h: 120, b: 120, tw: 5.1, tf: 7.1, area: 18.3 },
    HEA140: { h: 140, b: 140, tw: 5.6, tf: 7.5, area: 22.1 },
    HEA160: { h: 160, b: 160, tw: 6.0, tf: 8.0, area: 26.4 }
  },

  HEB: {
    HEB100: { h: 100, b: 100, tw: 5.6, tf: 8.0, area: 18.2 },
    HEB140: { h: 140, b: 140, tw: 6.6, tf: 9.0, area: 29.4 },
    HEB200: { h: 200, b: 200, tw: 8.0, tf: 13.0, area: 49.8 }
  },

  RHS: { // Rectangular Hollow Sections (width x height)
    RHS100x50x4: { w: 100, h: 50, t: 4, area: 12.1 },
    RHS150x100x6: { w: 150, h: 100, t: 6, area: 25.9 }
  },

  SHS: { // Square Hollow Sections
    SHS100x100x5: { w: 100, t: 5, area: 19.6 },
    SHS150x150x6: { w: 150, t: 6, area: 36.8 }
  },

  C: { // C-sections (channels)
    C100: { h: 100, b: 43, tw: 4.0, tf: 6.8, area: 10.2 },
    C150: { h: 150, b: 55, tw: 4.5, tf: 7.5, area: 14.6 }
  },

  L: { // Angles (L)
    L50x50x5: { a: 50, t: 5, area: 4.9 },
    L75x75x8: { a: 75, t: 8, area: 11.4 }
  }
};

export default Sections;
