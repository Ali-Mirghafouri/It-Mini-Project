import React from "react";
import {
  HomeIcon,
  EnrolledSubjectsIcon,
  GradesIcon,
  NewsAndEventsIcon,
  ProfileIcon
} from "../assets/icons";

export const VerticalNavCardInfo = [
  {
    id: 0,
    Option: "Home",
    logo: <HomeIcon />
  },
  {
    id: 1,
    Option: "Enrolled Subjects",
    logo: <EnrolledSubjectsIcon />
  },
  {
    id: 2,
    Option: "Grades",
    logo: <GradesIcon />
  },
  {
    id: 3,
    Option: "News & Events",
    logo: <NewsAndEventsIcon />
  },
  {
    id: 4,
    Option: "Profile",
    logo: <ProfileIcon />
  }
];

export const SubjectEnrolled = [
  {
    id: 0,
    Subject: "DIP202",
    SubjectName: "Business Communications",
    Lecturer: "name",
    Email: "email",
    Lectures: ["l1", "l2", "l3"],
    Toturial: ["t1", "t2", "t3"]
  },
  {
    id: 1,
    Subject: "DIP222",
    SubjectName: "Programming Principles",
    Lecturer: "name",
    Email: "email",
    Lectures: ["l1", "l2", "l3"],
    Toturial: ["t1", "t2", "t3"]
  },
  {
    id: 2,
    Subject: "DIP1MPR01",
    SubjectName: "IT Mini Project",
    Lecturer: "YONG YIK LOONG",
    Email: "yongyl@help.edu.my",
    Lectures: ["l1", "l2", "l3"],
    Toturial: ["t1", "t2", "t3"]
  }
];

export const WeeklySCH = [
  {
    id:0,
    WeedDay: "MON",
    Class1Name: "DIP222",
    Class1Time: "8AM - 11AM",
    Class2Name: null,
    Class2Time: null,
    Class3Name: "DIP202",
    Class3Time: "2:30PM - 4:30PM",
    Class4Name: null,
    Class4Time: null,
  },
  {
    id:1,
    WeedDay: "TUES",
    Class1Name: "DIP1MPR01",
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
    WeedDay: "WED",
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
    id:3,
    WeedDay: "THURS",
    Class1Name: null,
    Class1Time: null,
    Class2Name: null,
    Class2Time: null,
    Class3Name: null,
    Class3Time: null,
    Class4Name: null,
    Class4Time: null,
  },
  {
    id:2,
    WeedDay: "FRI",
    Class1Name: null,
    Class1Time: null,
    Class2Name: null,
    Class2Time: null,
    Class3Name: "DIP202",
    Class3Time: "2PM - 3:30PM",
    Class4Name: null,
    Class4Time: null,
  },
]