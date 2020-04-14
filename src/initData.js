export const logInInit = [
  { studentId: "b1801867", password: null },
  { studentId: "b1801866", password: "123" },
  { studentId: "admin", password: "admin" },
]

export const Students = [
  {
    Name: "Admin",
    ID: "Admin",
    Course: "Diploma in Information Technology",
    Email: "ali.mirghafouri@gmail.com",
    PhoneNumber: "012-3456789",
    subjects: [
      {
        DIPMPR01: ["DIPMPR01", "75%"],
        DIP202: ["DIP202", "45%"],
        DIP204: ["DIP204", "80%"],
        DIP222: ["DIP222", "50%"],
      },
    ],
    CourseProgress: [{ y: 50, indexLabel: "progressed" }],
    Attendence: 80,
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
    ],
  },
  {
    Name: "Seyed Ali Mirghafouri",
    ID: "B1801867",
    Course: "Diploma in Information Technology",
    Email: "ali.mirghafouri@gmail.com",
    PhoneNumber: "0123456789",
    subjectTime: [
      {
        id:0,
        WeekDay: "MON",
        Class1Name: "DIP1ITC01",
        Class1Time: "8AM - 11AM",
        Class2Name: null,
        Class2Time: null,
        Class3Name: "DIP1SAD01",
        Class3Time: "2:30PM - 4:30PM",
        Class4Name: null,
        Class4Time: null,
      },
      {
        id:1,
        WeekDay: "TUES",
        Class1Name: "DIP222",
        Class1Time: "9AM - 12PM",
        Class2Name: null,
        Class2Time: null,
        Class3Name: null,
        Class3Time: null,
        Class4Name: null,
        Class4Time: null,
      },
      {
        id:2,
        WeekDay: "WED",
        Class1Name: null,
        Class1Time: null,
        Class2Name: "DIP1SAD01",
        Class2Time: "12PM - 2PM",
        Class3Name: null,
        Class3Time: null,
        Class4Name: null,
        Class4Time: null,
      },
      {
        id:3,
        WeekDay: "THURS",
        Class1Name: "DIP222",
        Class1Time: "9AM - 12PM",
        Class2Name: null,
        Class2Time: null,
        Class3Name: null,
        Class3Time: null,
        Class4Name: null,
        Class4Time: null,
      },
      {
        id:2,
        WeekDay: "FRI",
        Class1Name: null,
        Class1Time: null,
        Class2Name: null,
        Class2Time: null,
        Class3Name: "DIP1ITC01",
        Class3Time: "2PM - 3:30PM",
        Class4Name: null,
        Class4Time: null,
      },
    ],
    subjects: [
      {
        id: 0,
        Subject: "DIPMPR01",
        description: "IT MINI PROJECT",
        Grade: "3.25",
        perc: "60",
        Lecturer: "MR. Steven",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"]
      },
      {
        id: 1,
        Subject: "DIP202",
        description: "BUSINESS COMUNNICATIONS",
        Grade: "3.5",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"]
      },
      {
        id: 2,
        Subject: "DIP1PRG12",
        description: "INTRODUCTION TO STRUCTURED PROGRAMMING",
        Grade: "0",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"]
      },
      {
        id: 3,
        Subject: "DIP222",
        description: "PROGRAMMING PRINCPLES",
        Grade: "-1",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"]
      },
      {
        id: 4,
        Subject: "DIP1SAD01",
        description: "INTRODUCTION TO ANALYSIS & DESIGN",
        Grade: "-1",
        perc: "75",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"]
      },
      {
        id: 5,
        Subject: "DIP1ITC01",
        description: "INTRODUCTION TO INFORMATION TECHNOLOGY",
        Grade: "-1",
        perc: "80",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"]
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
