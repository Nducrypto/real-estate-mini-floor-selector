export interface Unit {
  id: string;
  type: string;
  area: number;
  rooms: number;
  layoutImage: string;
}

export interface Floor {
  number: number;
  units: Unit[];
}

export interface Tower {
  id: string;
  name: string;
  floors: Floor[];
}

// export const towers: Tower[] = [
//   {
//     id: "tower-a",
//     name: "Tower A",
//     floors: Array.from({ length: 15 }, (_, i) => ({
//       number: i + 1,
//       units: [
//         {
//           id: `a-${i + 1}-1`,
//           type: "Studio",
//           area: 45 + Math.floor(Math.random() * 10),
//           rooms: 1,
//           layoutImage: "https://via.placeholder.com/300x200?text=Studio",
//         },
//         {
//           id: `a-${i + 1}-2`,
//           type: "1BR",
//           area: 65 + Math.floor(Math.random() * 10),
//           rooms: 2,
//           layoutImage: "https://via.placeholder.com/300x200?text=1BR",
//         },
//         {
//           id: `a-${i + 1}-3`,
//           type: "2BR",
//           area: 85 + Math.floor(Math.random() * 10),
//           rooms: 3,
//           layoutImage: "https://via.placeholder.com/300x200?text=2BR",
//         },
//       ],
//     })),
//   },
//   {
//     id: "tower-b",
//     name: "Tower B",
//     floors: Array.from({ length: 12 }, (_, i) => ({
//       number: i + 1,
//       units: [
//         {
//           id: `b-${i + 1}-1`,
//           type: "1BR",
//           area: 60 + Math.floor(Math.random() * 15),
//           rooms: 2,
//           layoutImage: "https://via.placeholder.com/300x200?text=1BR",
//         },
//         {
//           id: `b-${i + 1}-2`,
//           type: "2BR",
//           area: 80 + Math.floor(Math.random() * 15),
//           rooms: 3,
//           layoutImage: "https://via.placeholder.com/300x200?text=2BR",
//         },
//         {
//           id: `b-${i + 1}-3`,
//           type: "3BR",
//           area: 110 + Math.floor(Math.random() * 20),
//           rooms: 4,
//           layoutImage: "https://via.placeholder.com/300x200?text=3BR",
//         },
//       ],
//     })),
//   },
//   {
//     id: "tower-c",
//     name: "Tower C",
//     floors: Array.from({ length: 10 }, (_, i) => ({
//       number: i + 1,
//       units: [
//         {
//           id: `c-${i + 1}-1`,
//           type: "Penthouse",
//           area: 150 + Math.floor(Math.random() * 50),
//           rooms: 4,
//           layoutImage: "https://via.placeholder.com/300x200?text=Penthouse",
//         },
//         {
//           id: `c-${i + 1}-2`,
//           type: "Duplex",
//           area: 200 + Math.floor(Math.random() * 50),
//           rooms: 5,
//           layoutImage: "https://via.placeholder.com/300x200?text=Duplex",
//         },
//       ],
//     })),
//   },
// ];

export const towers: Tower[] = [
  {
    id: "tower-a",
    name: "Tower A",
    floors: Array.from({ length: 15 }, (_, i) => ({
      number: i + 1,
      units: [
        {
          id: `a-${i + 1}-1`,
          type: "Studio",
          area: 45 + Math.floor(Math.random() * 10),
          rooms: 1,
          layoutImage:
            "https://plus.unsplash.com/premium_photo-1724788724847-6d5da3271b80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMHN0dWRpbyUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: `a-${i + 1}-2`,
          type: "1BR",
          area: 65 + Math.floor(Math.random() * 10),
          rooms: 2,
          layoutImage:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", // 1BR blueprint
        },
        {
          id: `a-${i + 1}-3`,
          type: "2BR",
          area: 85 + Math.floor(Math.random() * 10),
          rooms: 3,
          layoutImage:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80", // 2BR blueprint
        },
      ],
    })),
  },
  {
    id: "tower-b",
    name: "Tower B",
    floors: Array.from({ length: 12 }, (_, i) => ({
      number: i + 1,
      units: [
        {
          id: `b-${i + 1}-1`,
          type: "1BR",
          area: 60 + Math.floor(Math.random() * 15),
          rooms: 2,
          layoutImage:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: `b-${i + 1}-2`,
          type: "2BR",
          area: 80 + Math.floor(Math.random() * 15),
          rooms: 3,
          layoutImage:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: `b-${i + 1}-3`,
          type: "3BR",
          area: 110 + Math.floor(Math.random() * 20),
          rooms: 4,
          layoutImage:
            "https://images.unsplash.com/photo-1598300053442-9fd854a8098b?auto=format&fit=crop&w=600&q=80", // 3BR blueprint
        },
      ],
    })),
  },
  {
    id: "tower-c",
    name: "Tower C",
    floors: Array.from({ length: 10 }, (_, i) => ({
      number: i + 1,
      units: [
        {
          id: `c-${i + 1}-1`,
          type: "Penthouse",
          area: 150 + Math.floor(Math.random() * 50),
          rooms: 4,
          layoutImage:
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80", // Penthouse layout
        },
        {
          id: `c-${i + 1}-2`,
          type: "Duplex",
          area: 200 + Math.floor(Math.random() * 50),
          rooms: 5,
          layoutImage:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80", // Reuse from 2BR
        },
      ],
    })),
  },
];
