export const logInInit = [
  { studentId: "b1801867", password: "123" },
  { studentId: "b1801866", password: "123" },
  { studentId: "admin", password: "admin" },
]

export const Students = [
  // {
  //   Name: "Seyed Mirghafouri",
  //   ID: "B1801866",
  //   Course: "Diploma in Information Technology",
  //   Email: "ali.mirghafouri@gmail.com",
  //   PhoneNumber: "012-3456789",
  //   subjects: [
  //     {
  //       DIPMPR01: ["DIPMPR01", "75%"],
  //       DIP202: ["DIP202", "45%"],
  //       DIP204: ["DIP204", "80%"],
  //       DIP222: ["DIP222", "50%"],
  //     },
  //   ],
  //   CourseProgress: [{ y: 50, indexLabel: "progressed" }],
  //   Attendence: 80,
  //   CGPA: [
  //     //   {
  //     //     L1S1: 2.75,
  //     //     L1S2: 3.45,
  //     //     L1S3: 3.15,
  //     //     L2S1: null,
  //     //     L2S2: null,
  //     //     L2S3: null,

  //     // },
  //     {
  //       x: 1,
  //       y: 2.75,
  //     },
  //     {
  //       x: 2,
  //       y: 3.45,
  //     },
  //     {
  //       x: 3,
  //       y: 3.15,
  //     },
  //   ],
  // },
  {
    Name: "Seyed Ali Mirghafouri",
    ID: "B1801867",
    Course: "Diploma in Information Technology",
    Email: "ali.mirghafouri@gmail.com",
    PhoneNumber: "012-3456789",
    subjects: [
      {
        Subject: "DIPMPR01",
        description: "IT MINI PROJECT",
        mark: "3.25",
      },
      {
        Subject: "DIP202",
        description: "BUSINESS COMUNNICATIONS",
        mark: "3.5",
      },
      {
        Subject: "DIP1PRG12",
        description: "INTRODUCTION TO STRUCTURED PROGRAMMING",
        mark: "0",
      },
      {
        Subject: "DIP222",
        description: "PROGRAMMING PRINCPLES",
        mark: "3.0",
      },
      {
        Subject: "DIP1SAD01",
        description: "INTRODUCTION TO ANALYSIS & DESIGN",
        mark: "-1",
      },
      {
        Subject: "DIP1ITC01",
        description: "INTRODUCTION TO INFORMATION TECHNOLOGY",
        mark: "-1",
      },
    ],
    CourseProgress: [
      { y: 50, indexLabel: "progressed" },
      { y: 50, indexLabel: "not progressed" },
    ],
    Attendence: [
      { y: 80, indexLabel: "present" },
      { y: 20, indexLabel: "absent" },
    ],
    CGPA: [
      //   {
      //     L1S1: 2.75,
      //     L1S2: 3.45,
      //     L1S3: 3.15,
      //     L2S1: null,
      //     L2S2: null,
      //     L2S3: null,

      // },
      {
        x: 1,
        y: 2.75,
      },
      {
        x: 2,
        y: 3.45,
      },
      {
        x: 3,
        y: 3.15,
      },
      {
        x: 4,
        y: NaN,
      },
      {
        x: 5,
        y: NaN,
      },
      {
        x: 6,
        y: NaN,
      },
    ],
  },
]
