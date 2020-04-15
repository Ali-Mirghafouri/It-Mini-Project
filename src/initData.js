export const logInInit = [
  { studentId: "b1801867", password: "123" },
  { studentId: "b1801866", password: "123" },
  { studentId: "admin", password: "admin" },
]

export const Students = [
  {
    Name: "Admin",
    ID: "admin",
  },
  {
    Name: "Seyed Ali Mirghafouri",
    ID: "b1801867",
    Course: "Diploma in Information Technology",
    Email: "ali.mirghafouri@gmail.com",
    PhoneNumber: "0123456789",
    subjectTime: [
      {
        id: 0,
        WeekDay: "MON",
        Class1Name: "DIP1MPR01",
        Class1Time: "8AM - 11AM",
        Class2Name: null,
        Class2Time: null,
        Class3Name: "DIP202",
        Class3Time: "2:30PM - 4:30PM",
        Class4Name: null,
        Class4Time: null,
      },
      {
        id: 1,
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
        id: 2,
        WeekDay: "WED",
        Class1Name: null,
        Class1Time: null,
        Class2Name: "DIP202",
        Class2Time: "12PM - 2PM",
        Class3Name: null,
        Class3Time: null,
        Class4Name: null,
        Class4Time: null,
      },
      {
        id: 3,
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
        id: 2,
        WeekDay: "FRI",
        Class1Name: null,
        Class1Time: null,
        Class2Name: null,
        Class2Time: null,
        Class3Name: "DIP1MPR01",
        Class3Time: "2PM - 3:30PM",
        Class4Name: null,
        Class4Time: null,
      },
    ],
    subjects: [
      {
        id: 0,
        Subject: "DIP1ITC01",
        description: "INTRODUCTION TO INFORMATION TECHNOLOGY",
        Grade: "3.25",
        perc: "60",
        Lecturer: "MR. Steven",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 1,
        Subject: "DIP1SAD01",
        description: "INTRODUCTION TO ANALYSIS & DESIGN",
        Grade: "3.5",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"],
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
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 3,
        Subject: "DIP222",
        description: "PROGRAMMING PRINCPLES",
        Grade: "-1",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: [
          "DIP222 - Lecture1",
          "DIP222 - Lecture2",
          "DIP222 - Lecture3",
          "DIP222 - Lecture4",
        ],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 4,
        Subject: "DIP202",
        description: "BUSINESS COMMUNICATIONS",
        Grade: "-1",
        perc: "75",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: [
          "DIP202 - Lecture1",
          "DIP202 - Lecture2",
          "DIP202 - Lecture3",
          "DIP202 - Lecture4",
        ],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 5,
        Subject: "DIP1MPR01",
        description: "IT MINI PROJECT",
        Grade: "-1",
        perc: "80",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: [
          "DIP1MPRO1 - Lecture1",
          "DIP1MPRO1 - Lecture2",
          "DIP1MPRO1 - Lecture3",
          "DIP1MPRO1 - Lecture4",
        ],
        Toturial: ["t1", "t2", "t3"],
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
  {
    Name: "Lisa",
    ID: "b1801866",
    Course: "Diploma in Information Technology",
    Email: "lisa@gmail.com",
    PhoneNumber: "0123456789",
    subjectTime: [
      {
        id: 0,
        WeekDay: "MON",
        Class1Name: null,
        Class1Time: null,
        Class2Name: "DIP1MPR01",
        Class2Time: "8AM - 11AM",
        Class3Name: "DIP202",
        Class3Time: "2:30PM - 4:30PM",
        Class4Name: null,
        Class4Time: null,
      },
      {
        id: 1,
        WeekDay: "TUES",
        Class1Name: "DIP222",
        Class1Time: "9AM - 12PM",
        Class2Name: null,
        Class2Time: null,
        Class3Name: null,
        Class3Time: null,
        Class4Name: "DIP222",
        Class4Time: "9AM - 12PM",
      },
      {
        id: 2,
        WeekDay: "WED",
        Class1Name: null,
        Class1Time: null,
        Class2Name: "DIP202",
        Class2Time: "12PM - 2PM",
        Class3Name: null,
        Class3Time: null,
        Class4Name: null,
        Class4Time: null,
      },
      {
        id: 3,
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
        id: 2,
        WeekDay: "FRI",
        Class1Name: null,
        Class1Time: null,
        Class2Name: null,
        Class2Time: null,
        Class3Name: "DIP1MPR01",
        Class3Time: "2PM - 3:30PM",
        Class4Name: "DIP1MPR01",
        Class4Time: "2PM - 3:30PM",
      },
    ],
    subjects: [
      {
        id: 0,
        Subject: "DIP1ITC01",
        description: "INTRODUCTION TO INFORMATION TECHNOLOGY",
        Grade: "1.25",
        perc: "60",
        Lecturer: "MR. Steven",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 1,
        Subject: "DIP1SAD01",
        description: "INTRODUCTION TO ANALYSIS & DESIGN",
        Grade: "2.5",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 2,
        Subject: "DIP1PRG12",
        description: "INTRODUCTION TO STRUCTURED PROGRAMMING",
        Grade: "3.2",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: ["l1", "l2", "l3"],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 3,
        Subject: "DIP222",
        description: "PROGRAMMING PRINCPLES",
        Grade: "-1",
        perc: "60",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: [
          "DIP222 - Lecture1",
          "DIP222 - Lecture2",
          "DIP222 - Lecture3",
          "DIP222 - Lecture4",
        ],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 4,
        Subject: "DIP202",
        description: "BUSINESS COMMUNICATIONS",
        Grade: "-1",
        perc: "75",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: [
          "DIP202 - Lecture1",
          "DIP202 - Lecture2",
          "DIP202 - Lecture3",
          "DIP202 - Lecture4",
        ],
        Toturial: ["t1", "t2", "t3"],
      },
      {
        id: 5,
        Subject: "DIP1MPR01",
        description: "IT MINI PROJECT",
        Grade: "-1",
        perc: "80",
        Lecturer: "name",
        Email: "lecturer@gmail.com",
        Lectures: [
          "DIP1MPRO1 - Lecture1",
          "DIP1MPRO1 - Lecture2",
          "DIP1MPRO1 - Lecture3",
          "DIP1MPRO1 - Lecture4",
        ],
        Toturial: ["t1", "t2", "t3"],
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
        y: 3.75,
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
        y: 3.0,
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
