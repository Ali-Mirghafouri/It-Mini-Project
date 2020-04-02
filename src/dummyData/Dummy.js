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
