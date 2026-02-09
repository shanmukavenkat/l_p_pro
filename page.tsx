
"use client";

import React, { useState, useEffect } from 'react';
import NavigationPage from '@/components/Home/nav/page';
import FooterSection from '@/components/Home/FooterSection';
import { User, Mail, Award, BookOpen } from 'lucide-react';

// --- FRONTEND DATA: ALL BOARDS COMBINED ---
const All_Editorial_Boards = [
  // Example entries - Add all your board data here
  {
    "Id": "Lurnexa_2538a01",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538a01.jpeg",
    "Name": "Dr. Anand Shukla",
    "Board": "ACIET",
    "Role": "Sub Division-Editor in Chief",
    "Designation/College Name": "Dean / Lovely Professional University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-anand-shukla-59342838/",
    "collegeUrl": "https://www.lpu.in/faculty/staff-profile.php?EmpCode=32898"
  },
  {
    "Id": "Lurnexa_2538c02",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538c02.jpg",
    "Name": "Dr. Chandrashekar Jatoth",
    "Board": "ACIET",
    "Role": "Deputy Editor in Chief",
    "Designation/College Name": "Assistant Professor / National Institute of Technology, Raipur",
    "linkedinUrl": "",
    "collegeUrl": "https://nitrr.ac.in/viewdetails.php?q=it.jchandrashekar"
  },
  {
    "Id": "Lurnexa_2538e03",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538e03.jpg",
    "Name": "Dr. Easwar Krishna Iyer",
    "Board": "ACIET",
    "Role": "Sr Associate Editor",
    "Designation/College Name": "Director / Indus Business Academy (IBA), Bengaluru",
    "linkedinUrl": "https://www.linkedin.com/in/dr-easwar-krishna-iyer/",
    "collegeUrl": "https://iba.ac.in/about-iba/director-message"
  },
  {
    "Id": "Lurnexa_2538c04",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538c04.jpg",
    "Name": "Dr. Chinmaya Kumar Swain",
    "Board": "ACIET",
    "Role": "Associate Editor",
    "Designation/College Name": "Assistant Professor / IIM Jammu",
    "linkedinUrl": "https://www.linkedin.com/in/dr-chinmaya-kumar-swain-77b358128/",
    "collegeUrl": "https://iimj.ac.in/faculty-datae8d3.php?n=MTI0"
  },
  {
    "Id": "Lurnexa_2538r05",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538r05.jpg",
    "Name": "Dr. Rishi Chopra",
    "Board": "ACIET",
    "Role": "Managing Editor",
    "Designation/College Name": "Associate Professor & Asst. Dean / Lovely Professional University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-rishi-chopra-5b3260247/",
    "collegeUrl": "https://www.lpu.in/faculty/staff-profile.php?EmpCode=11111"
  },
  {
    "Id": "Lurnexa_2538t06",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538t06.jpg",
    "Name": "Dr. T.V. Rajini Kanth",
    "Board": "ACIET",
    "Role": "Associate Managing Editor",
    "Designation/College Name": "Professor & Convener RDC / MGIT Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/dr-rajini-kanth-t-v-22384724/",
    "collegeUrl": "https://mgit.ac.in/wp-content/uploads/2025/01/Dr.-TV-Rajini-Kanth.pdf"
  },
  {
    "Id": "Lurnexa_2538s07",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538s07.jpg",
    "Name": "Dr. Shaik Mahaboob Basha",
    "Board": "ACIET",
    "Role": "Sr Review Editor",
    "Designation/College Name": "Professor & Head of Department (CSE) / Sree Dattha Institute of Engineering and Science, Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/dr-mahaboob-4a086657/",
    "collegeUrl": "https://www.sreedattha.ac.in/sdes/departments/computer-science-engineering/about-cse-department/faculty-members"
  },
  {
    "Id": "Lurnexa_2538u08",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538u08.jpg",
    "Name": "Dr. Uma Rani Vanamala",
    "Board": "ACIET",
    "Role": "Review Editor",
    "Designation/College Name": "Head of the Department, IT / Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    "linkedinUrl": "https://www.linkedin.com/in/dr-uma-rani-vanamala-87053620b/",
    "collegeUrl": "https://jntuhceh.ac.in/faculty_portal/uploads/resumes/uma_rani_profile.pdf"
  },
  {
    "Id": "Lurnexa_2538b09",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538b09.png",
    "Name": "Dr. Balaji Halavath",
    "Board": "ACIET",
    "Role": "Domain Editor",
    "Designation/College Name": "Professor, CSE Department / Sreenidhi Institute of Science & Technology, Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/balaji-halavath-065268297/",
    "collegeUrl": "https://sreenidhi.edu.in/departments-faculty/dr-halavath-balaji-ph-d/"
  },
  {
    "Id": "Lurnexa_2538k10",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538k10.png",
    "Name": "Dr. Kranthi Kumar Singamaneni",
    "Board": "ACIET",
    "Role": "Editorial Executive",
    "Designation/College Name": "Associate Professor & In-Charge / Symbiosis Institute of Technology, Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/dr-kranthi-kumar-singamaneni-smieee-761540168/",
    "collegeUrl": "https://sithyd.edu.in/faculty/dr-kranthi-kumar-singamaneni"
  },

    {
    "Id": "Lurnexa_2562b32",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562b32.jpg",
    "Name": "Dr. Badri Narayanan Gopalakrishnan",
    "Board": "ARESS",
    "Role": "Sub Division-Editor in Chief",
    "Designation/College Name": "Fellow, NITI Aayog, Government of India / Boston College",
    "linkedinUrl": "https://www.linkedin.com/in/badrinarayanang/",
    "collegeUrl": "https://www.bc.edu/bc-web/schools/wcas/about/faculty-research/faculty-directory-folder/badri-narayanan-gopalakrishnan.html"
  },
  {
    "Id": "Lurnexa_2562a33",
    "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562a33.jpg",
    "Name": "Dr. Aruna Kumar Dash",
    "Board": "ARESS",
    "Role": "Deputy Editor in Chief",
    "Designation/College Name": "Associate Professor / IBS Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/aruna-dash-62a74a19/",
    "collegeUrl": "https://www.ifheindia.org/icfai-school-of-social-sciences/Facultyprofiles/Economics/Aruna-Kumar-Dash.pdf"
  },
  {
    "Id": "Lurnexa_2562s34",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562s34.jpg",
    "Name": "Dr. Sumeet Gupta",
    "Board": "ARESS",
    "Role": "Sr Associate Editor",
    "Designation/College Name": "Professor and Associate Dean - IQAC at UPES",
    "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Dr.Sumeet%20Gupta&origin=GLOBAL_SEARCH_HEADER&sid=-dZ",
    "collegeUrl": "https://www.upes.ac.in/faculty/school-of-business/prof-dr-sumeet-gupta"
  },
  {
    "Id": "Lurnexa_2562k35",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562k35.jpg",
    "Name": "Dr. Krishna Raj",
    "Board": "ARESS",
    "Role": "Associate Editor",
    "Designation/College Name": "Professor and Head, Centre for Economic Studies and Policy (CESP)",
    "linkedinUrl": "https://www.linkedin.com/in/krishna-raj-71098823/",
    "collegeUrl": "https://www.isec.ac.in/krishna-raj/"
  },
  {
    "Id": "Lurnexa_2562m36",
    "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562m36.jpg",
    "Name": "Dr. Minaketan Behera",
    "Board": "ARESS",
    "Role": "Managing Editor",
    "Designation/College Name": "Professor / Jawaharlal Nehru University",
    "linkedinUrl": "",
    "collegeUrl": "https://www.jnu.ac.in/content/minaketan"
  },

  {
    "Id": "Lurnexa_2562d37",
    "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562d37.jpg",
    "Name": "Dr. Debi Prasad Bal",
    "Board": "ARESS",
    "Role": "Associate Managing Editor",
    "Designation/College Name": "Associate Professor / XLRI Jamshedpur",
    "linkedinUrl": "https://www.linkedin.com/in/debi-prasad-bal-4386136a/",
    "collegeUrl": "https://xlri.ac.in/about/full-time-faculty/debi-prasad"
  },
  {
    "Id": "Lurnexa_2562p38",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562p38.jpg",
    "Name": "Dr. Pravin Jadhav",
    "Board": "ARESS",
    "Role": "Sr Review Editor",
    "Designation/College Name": "Associate Professor and HoD / Institute of Infrastructure Technology Research and Management (IITRAM), Ahmedabad",
    "linkedinUrl": "https://www.linkedin.com/in/pravin-jadhav-16314322/",
    "collegeUrl": "https://iitram.ac.in/empdetail/2015152"
  },
    {
   "Id": "Lurnexa_2562s39",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562s39.png",
    "Name": "Dr. Subhash Chandra ",
    "Board": "ARESS",
    "Role": "Review Editor",
    "Designation/College Name": "Assistant Professor/Tata Institute of Social Sciences",
    "linkedinUrl": "https://www.linkedin.com/in/dr-subhash-chandra-09274565/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "collegeUrl": "https://tiss.ac.in/view/9/employee/subhash-chandra/"
  },
  // {
  //   "Id": 8,
  //   "image": "/editorial-images/null",
  //   "Name": "",
  //   "Role": "Review Editor",
  //   "Designation/College Name": "",
  //   "linkedinUrl": "",
  //   "collegeUrl": ""
  // },
  // {
  //   "Id": 9,
  //   "image": "/editorial-images/null",
  //   "Name": "",
  //   "Role": "Domain Editor",
  //   "Designation/College Name": "",
  //   "linkedinUrl": "",
  //   "collegeUrl": ""
  // },
  {
    "Id": "Lurnexa_2562g41",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562g41.jpg",
    "Name": "Prof. P. Guru Prasad",
    "Board": "ARESS",
    "Role": "Editorial Executive",
    "Designation/College Name": "Assistant Professor / VVIT University",
    "linkedinUrl": "https://www.linkedin.com/in/puttu-guru-prasad-569014136/",
    "collegeUrl": "https://www.vvitguntur.com/pgp-profile"
  },
  {
    "id": "Lurnexa_2544oa22",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544oa22.png",
    "name": "Dr. Amitava Mukherjee",
      "Board": "CIMS-Operation Management",
    "role": "Sub Division Editor in Chief",
    "Designation/College Name": "Professor/XLRI - Xavier School of Management",
    "linkedinUrl": "https://www.linkedin.com/in/amitava-mukherjee-96b4511b/?originalSubdomain=in",
    "collegeUrl": "https://www.xlri.ac.in/about/full-time-faculty/amitava-mukherjee"
  },
  {
    "id": "Lurnexa_2544ok23",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544ok23.jpg",
    "name": "Dr. Kapil Manohar Gumte",
      "Board": "CIMS-Operation Management",
    "role": "Deputy Editor in Chief",
    "Designation/College Name": "Assistant Professor/Indian Institute of Management Jammu",
    "linkedinUrl": "https://www.linkedin.com/in/kapilgumte/",
    "collegeUrl": "https://www.iimj.ac.in/faculty-data4261.php?n=ODY="
  },
  {
    "id": "Lurnexa_2544od24",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544od24.jpg",
    "name": "Dr. Debopam Chakrabarti",
      "Board": "CIMS-Operation Management",
    "role": "Senior Associate Editor",
    "Designation/College Name": "Professor of Practice/Mahindra University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-debopam-chakarabarti-3352b97/",
    "collegeUrl": "https://www.mahindrauniversity.edu.in/faculty/dr-debopam-chakrabarti/"
  },
  {
    "id": "Lurnexa_2544ov25",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544ov25.jpg",
    "name": "Dr. Vaibhav Mishra",
      "Board": "CIMS-Operation Management",
    "role": "Associate Editor",
    "Designation/College Name": "Associate Professor/IBS Hyderabad",
    "linkedinUrl": null,
    "collegeUrl": "https://www.ifheindia.org/FacultyImages/ZFUqkjs63hPyifyetu45eRiY6syRgLdpuVNmdTj9FyDSgYZbxAUTyEainLYJS.pdf"
  },
  {
    "id": "Lurnexa_2544or26",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544or26.jpg",
    "name": "Dr. D. Ravindran",
      "Board": "CIMS-Operation Management",
    "role": "Managing Editor",
    "Designation/College Name": "Assistant Professor/Kristu Jayanti Institute of Management, Bengaluru",
    "linkedinUrl": "https://www.linkedin.com/in/ravindran-d-b65b8416/?originalSubdomain=in",
    "collegeUrl": "https://kristujayanti.irins.org/profile/168699"
  },
  // {
  //   "id": 6,
  //   "image": "",
  //   "name": null,
  //   "role": "Senior Review Editor",
  //   "Designation/College Name": null,
  //   "linkedinUrl": null,
  //   "collegeUrl": null
  // },
  {
    "id": "Lurnexa_2544os28",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544os28.jpg",
    "name": "Dr. Sourav Mondal",
      "Board": "CIMS-Operation Management",
    "role": "Review Editor",
    "Designation/College Name": "Assistant Professor / IIM Jammu",
    "linkedinUrl": "https://www.linkedin.com/in/sourav-mondal-a13906a7/?originalSubdomain=in",
    "collegeUrl": "https://iimj.ac.in/faculty-datad429.php?n=MTMy"
  },
  // {
  //   "id": 8,
  //   "image": "",
  //   "name": null,
  //   "role": "Domain Editor",
  //   "Designation/College Name": null,
  //   "linkedinUrl": null,
  //   "collegeUrl": null
  // },
  {
    "id": "Lurnexa_2544ob30",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544ob30.jpg",
    "name": "Dr. Bijetha Shaw",
      "Board": "CIMS-Operation Management",
    "role": "Assistant Editor",
    "Designation/College Name": "Assistant Professor/IBS Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/bijeta-shaw-5576269b/?originalSubdomain=in",
    "collegeUrl": "https://www.ifheindia.org/FacultyImages/ZFUqkjs63hPyifyetu45eUrjppP7DJtxe9oBQK2hBVp8Jv0UmNwKTMVPHPBp.pdf"
  },
  {   Id:"Lurnexa_2544fm11",
        "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm11.jpg",
        "Name": "Dr.M V S Kameshwar Rao",
        "Board": "CIMS-Finance Management",
        "Role": "Sub Division-Editor in Chief",
        "Designation/College Name": "Associate Professor/IBS Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/dr-kameshwar-rao-modekurti-45145223/",
       "collegeUrl":"https://www.ifheindia.org/FacultyImages/Mq5sTPjgSkn8J4jPjlnscFWYy0p5MvTXrigIGJsvcPDF5qOn1r3b6nnL3Ne6KVk.pdf"
    },
    {   
        Id:"Lurnexa_2544fs12",
        "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs12.jpg",
        "Name": "Dr.Srikanth Potharla",
          "Board": "CIMS-Finance Management",
        "Role": "Deputy Editor in Chief",
        "Designation/College Name": "Assistant Professor/IBS Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/srikanth-p-2a06751a/",
       "collegeUrl":"https://www.ifheindia.org/FacultyImages/N3DYZbNMKEAYseOGmrIl82HhZWPoLASoqtAlM751FNF4wbU4jtHblFT5GokaxCW.pdf"
    },
    {
        Id:"Lurnexa_2544fs13",
         "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs13.jpg",
        "Name": "Dr Susanta K Mishra",
        "Board": "CIMS-Finance Management",
        "Role": "Sr Associate Editor",
        "Designation/College Name": "Professor/ Centurion University",
        "linkedinUrl": "https://www.linkedin.com/in/dr-susanta-k-mishra-3b5a9433/?originalSubdomain=in",
       "collegeUrl":"https://faculty.cutm.ac.in/general_profilesc.php?xyz=susanta.mishra@cutm.ac.in"
    },
    {  Id:"Lurnexa_2544fm21",
       "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm21.jpg",
        "Name": "Dr.Muhammed Shafi M K",
        "Board": "CIMS-Finance Management",
        "Role": "Associate Editor",
        "Designation/College Name": "Assistant Professor/ NIT Warangal",
        "linkedinUrl": "https://www.linkedin.com/in/dr-muhammed-shafi-mk-68a49254/?originalSubdomain=in",
       "collegeUrl":"https://erp.nitw.ac.in/ext/profile/sm-shafimk"
    },
    {    Id:"Lurnexa_2544fm15",
      "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm15.jpg",
        "Name": "Dr. Manisha Kumari",
        "Board": "CIMS-Finance Management",
        "Role": "Managing Editor",
        "Designation/College Name": "Associate Faculty Member/ (ni-msme)",
        "linkedinUrl": "https://www.linkedin.com/in/manishakumari-ba344857/",
       "collegeUrl":"https://www.nimsme.gov.in/employee/a7b4a35465d9853607aaa02f9ea4f0a3"
    },
    {
        Id:"Lurnexa_2544fs16",
       "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs16.jpg",
        "Name": "Dr. Sandeep Kumar Kesarwani",
        "Board": "CIMS-Finance Management",
        "Role": "Sr Review Editor",
        "Designation/College Name": "Associate Professor/ Indian Institute of Information Technology",
       "linkedinUrl": "https://www.linkedin.com/in/dr-sandeep-kumar-kesarwani-48023755/?originalSubdomain=in",
       "collegeUrl":"https://imparc.org/dr-sandeep-kumar-kesarwani/"
    },
    {   
        Id:"Lurnexa_2544fc17",
        "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fc17.jpg",
        "Name": "Dr.CH Shanker",
        "Board": "CIMS-Finance Management",
        "Role": "Review Editor",
        "Designation/College Name": "Assistant Professor/ Geetam Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/dr-ch-shankar-30881a3b/",
       "collegeUrl":"https://www.gitam.edu/faculty/chanagala-shankar"
    },
    {   Id:"Lurnexa_2544fk18",
      "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fk18.jpg",
        "Name": "Dr. Kumaraswamy Manepalli",
        "Board": "CIMS-Finance Management",
        "Role": "Domain Editor",
        "Designation/College Name": "Assistant Professor/Vignan's University, Vadlamudi",
       "linkedinUrl": "https://www.linkedin.com/in/manepalli-kumaraswamy-71b310126/?originalSubdomain=in",
       "collegeUrl":"https://vignan.ac.in/newvignan/departments/deptpeople.php?deptid=sch5_dept1&school=sch5&deptnm=MG"
    },
    {
      Id:"Lurnexa_2544fr19",
      "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fr19.jpg",
        "Name": "Dr.Rintu Anthony",
        "Board": "CIMS-Finance Management",
        "Role": "Assistant Editor",
        "Designation/College Name": "Assistant Professor / Rajagiri Business School",
       "linkedinUrl": "https://www.linkedin.com/in/rintu-anthony-8b2bb124/?originalSubdomain=in",
       "collegeUrl":"https://www.rajagiribusinessschool.edu.in/faculty-details/rintu-anthony"
    },
    {   Id:"Lurnexa_2544fs20",
      "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs20.jpg",
        "Name": "Dr.Saravanan Vellaiyan",
        "Board": "CIMS-Finance Management",
        "Role": "Editorial Executive",
        "Designation/College Name": "Assistant Professor / Christ University",
       "linkedinUrl": "https://www.linkedin.com/in/saravanan-vellaiyan/?originalSubdomain=in",
       "collegeUrl":"https://m.christuniversity.in/dept/faculty-details/NDc1OA==/MzAx"
    },
    {
      Id:"Lurnexa_2544fm14",
      "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm14.jpg",
        "Name": "Dr. Mohammad Munawar Alam Sayyad",
        "Board": "CIMS-Finance Management",
        "Role": "Editorial Executive",
        "Designation/College Name": "Assistant Professor/ IBS Hyderabad",
       "linkedinUrl": "https://www.linkedin.com/in/munawar-alam-sayyad-a6304a107/?originalSubdomain=ae",
       "collegeUrl":"https://www.ifheindia.org/FacultyImages/i0XM4hGH94EmMaWOLIWwcQMBXqQpOjoItCxNEp1h9ostR2fIEU57B5Bwau4AVg.pdf"
    }, {
    Id:"Lurnexa_2538a01",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538a01.jpeg",
    "Name": "Dr. Anand Shukla",
    "Board": "GJPIR",
    "Role": "Editor-in-Chief",
    "Designation/College Name": "Dean / Lovely Professional University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-anand-shukla-59342838/",
    "collegeUrl": "https://www.lpu.in/faculty/staff-profile.php?EmpCode=32898"
    
  },
  {
   Id:"Lurnexa_2562b32",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562b32.jpg",
    "Name": "Dr. Badri Narayanan Gopalakrishnan",
    "Board": "GJPIR",
    "Role": " Co - Editor-in-Chief",
   "Designation/College Name": "Fellow, NITI Aayog, Government of India / Boston College",
    "linkedinUrl": "https://www.linkedin.com/in/badrinarayanang/",
    "collegeUrl": "https://www.bc.edu/bc-web/schools/wcas/about/faculty-research/faculty-directory-folder/badri-narayanan-gopalakrishnan.html" 
  },
  {
    Id:"Lurnexa_2544oa22",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544oa22.png",
    "Name": "Dr. Amitava Mukherjee",
    "Board": "GJPIR",
    "Role": "Sr.Associate Editor",
    "Designation/College Name": "Professor / XLRI - Xavier School of Management",
    "linkedinUrl": "https://www.linkedin.com/in/amitava-mukherjee-96b4511b/?originalSubdomain=in",
    "collegeUrl": "https://www.xlri.ac.in/about/full-time-faculty/amitava-mukherjee"
  },
  {
    Id:"Lurnexa_2562a33",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2562a33.jpg",
    "Name": "Dr. Aruna Kumar Dash",
    "Board": "GJPIR",
    "Role": "Associate Editor",
    "Designation/College Name": "Associate Professor / IBS Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/aruna-dash-62a74a19/",
    "collegeUrl": "https://www.ifheindia.org/icfai-school-of-social-sciences/Facultyprofiles/Economics/Aruna-Kumar-Dash.pdf"
  },
  {
    Id:"Lurnexa_2553u42",
    "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2553u42.jpg",
    // Lurnexa_2553u42.jpg
    "Name": "Dr. Umesh Chandra Pati",
    "Board": "GJPIR",
    "Role": "Sr.Managing Editor",
    "Designation/College Name": "Professor / National Institute of Technology Rourkela",
    "linkedinUrl": "https://www.linkedin.com/in/dr-umesh-c-pati-13034a20/",
    "collegeUrl": "https://www.nitrkl.ac.in/docs/Faculty/CV/1970695.pdf"
  },
  {
    Id:"Lurnexa_2544ok23",
    "image":  "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544ok23.jpg",
    "Name": "Dr. Kapil Manohar Gumte",
    "Board": "GJPIR",
    "Role": "Managing Editor",
    "Designation/College Name": "Assistant Professor / Indian Institute of Management Jammu",
    "linkedinUrl": "https://www.linkedin.com/in/kapilgumte/",
    "collegeUrl": "https://www.iimj.ac.in/faculty-data4261.php?n=ODY="
  },
  {
    Id:"Lurnexa_2544fs13",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs13.jpg",
    "Name": "Dr. Susanta K Mishra",
  "Board": "GJPIR",
    "Role": "Assistant Editor",
    "Designation/College Name": "Professor / Centurion University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-susanta-k-mishra-3b5a9433/?originalSubdomain=in",
    "collegeUrl": "https://faculty.cutm.ac.in/general_profilesc.php?xyz=susanta.mishra@cutm.ac.in"
  },
  {
    Id:"Lurnexa_2544fs12",
    "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs12.jpg",
    "Name": "Dr. Srikanth Potharla",
    "Board": "GJPIR",
    "Role": "Section Editor",
    "Designation/College Name": "Assistant Professor / IBS Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/srikanth-p-2a06751a/",
    "collegeUrl": "https://www.ifheindia.org/FacultyImages/N3DYZbNMKEAYseOGmrIl82HhZWPoLASoqtAlM751FNF4wbU4jtHblFT5GokaxCW.pdf"
  },
  {
    Id:"Lurnexa_2538c04",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2538c04.jpg",
    "Name": "Dr. Chinmaya Kumar Swain",
    "Board": "GJPIR",
    "Role": "Review Editor",
    "Designation/College Name": "Assistant Professor / IIM Jammu",
    "linkedinUrl": "https://www.linkedin.com/in/dr-chinmaya-kumar-swain-77b358128/",
    "collegeUrl": "https://iimj.ac.in/faculty-datae8d3.php?n=MTI0"
  },
  {
    Id:"Lurnexa_2553n43",
   "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2553n43.jpeg",
    "Name": "Dr. CH. Naga Sai Kalyan",
    "Board": "GJPIR",
    "Role": "Advisory Member",
   "Designation/College Name": " M.Tech, Ph.D, Associate Professor/vvit Guntur",
    "linkedinUrl": "",
    "collegeUrl": "https://www.vvitguntur.com/chnsk-profile"
  },
  {
   Id: "Lurnexa_2553u42",
   "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2553u42.jpg",
    "name": "Dr. Umesh Chandra Pati",
    "Board": "IAEES",
    "role": "Sub Division – Editor in Chief",
    "Designation/College Name": "Professor/National Institute of Technology Rourkela",
    "linkedinUrl": "https://www.linkedin.com/in/dr-umesh-c-pati-13034a20/",
    "collegeUrl": "https://www.nitrkl.ac.in/docs/Faculty/CV/1970695.pdf"
  },
  {
   Id: "Lurnexa_2553n43",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2553n43.jpeg",
    "name": "Dr. CH. Naga Sai Kalyan",
    "Board": "IAEES",
    "role": "Deputy Editor in Chief",
   "Designation/College Name": " M.Tech, Ph.D, Associate Professor/vvit Guntur",
    "linkedinUrl": "",
    "collegeUrl": "https://www.vvitguntur.com/chnsk-profile"
  },
  {
   Id: "Lurnexa_2553s45",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2553s45.jpg",
    "name": "Dr. D. Srilatha",
    "Board": "IAEES",
    "role": "Associate Editor ",
    "Designation/College Name": "Professor/VVIT Guntur",
    "linkedinUrl": "https://www.linkedin.com/in/srilatha-dande-86a62937b/",
    "collegeUrl": "https://www.vvitguntur.com/drsrilatha-profile"
  },
//   {
//    "id": 3,
//     "image": "",
//     "name": "",
//     "role": "Senior Associate Editor",
//     "Designation/College Name": "",
//     "collegeName": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   },
  
  {
   Id: "Lurnexa_2553c47",
    "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2553c47.jpg",
    "name": "Dr. Chandan Nayak",
    "Board": "IAEES",
    "role": "Associate Managing Editor",
    "Designation/College Name": "asst professor/ vit-ap",
    "linkedinUrl": "https://www.linkedin.com/in/dr-chandan-nayak-143447128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "collegeUrl": "https://share.google/EvGjVqhAixAA2uQdH"
  },
//   {
//    "id": 7,
//     "image": "",
//     "name": "",
//     "role": "Senior Review Editor",
//     "Designation/College Name": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   },
//   {
//    "id": 8,
//     "image": "",
//     "name": "",
//     "role": "Review Editor",
//     "Designation/College Name": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   },
//   {
//    "id": 9,
//     "image": "",
//     "name": "",
//     "role": "Domain Editor",
//     "Designation/College Name": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   },
//   {
//    "id": 10,
//     "image": "",
//     "name": "",
//     "role": "Editorial Executive",
//     "Designation/College Name": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   }
];
export default function ProfileDetail({ params }: { params: any }) {
  const resolvedParams = React.use(params) as { id: string };
  const id = resolvedParams.id;

  const [member, setMember] = useState<any>(null);
  const [frontendRoles, setFrontendRoles] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  
  const [imgExtensionIndex, setImgExtensionIndex] = useState(0);
  const extensions = ['jpg', 'png', 'jpeg'];
  const [useFallback, setUseFallback] = useState(false);
const [version] = useState(Date.now());
 useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch("https://api.lurnexa.in/user-dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });
      const result = await response.json();
      
      if (result.data && result.data.length > 0) {
        const apiMember = result.data[0];

        // This ensures "8" matches 8 and catches both lowercase 'id' and uppercase 'Id'
        const matchedRoles = All_Editorial_Boards.filter((m) => {
          const entryId = m.Id || m.id;
          return String(entryId) === String(id);
        });

        setFrontendRoles(matchedRoles);
        setMember(apiMember);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }
  if (id) fetchData();
}, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
  
  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
}

// Only show a message if loading is finished AND we definitely have no data
if (!member) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavigationPage />
      <p className="mt-10 text-gray-500 font-medium">Profile data is syncing... please refresh.</p>
      <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
        Refresh Now
      </button>
    </div>
  );
}

const s3ImageUrl = `https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/${member?.Id || id}.${extensions[imgExtensionIndex]}?v=${version}`;  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=300`;

  const handleImageError = () => {
    if (imgExtensionIndex < extensions.length - 1) {
      setImgExtensionIndex(prev => prev + 1);
    } else {
      setUseFallback(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <NavigationPage />
      
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-[#0f172a] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30"
          alt="Professional Background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-slate-50" />
      </div>

      <main className="grow -mt-52 px-4 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-white overflow-visible">
            <div className="p-8 md:p-14">
              
              <div className="flex flex-col md:flex-row items-center md:items-end gap-8 -mt-24 md:-mt-32 mb-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 transition-opacity"></div>
                  <img 
                    src={useFallback ? fallbackImage : s3ImageUrl}
                    onError={handleImageError}
                    className="relative w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-8 border-white shadow-xl bg-white transition-transform duration-300 group-hover:scale-[1.02]"
                    alt={member.name}
                  />
                  <div className="absolute bottom-6 right-3 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm animate-pulse"></div>
                </div>

                <div className="flex-1 text-center md:text-left pb-2">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 truncate">
                    {member.name}
                  </h1>

                  {/* DISPLAYING MULTIPLE DESIGNATIONS FROM FRONTEND */}
                 

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                    {/* DISPLAYING ALL ROLES AS BADGES */}
                    {frontendRoles.length > 0 ? (
                      frontendRoles.map((roleObj, idx) => (
                        <span key={idx} className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">
                          {/* FIX: Handles both 'Role' and 'role' keys */}
                          {roleObj.Role || roleObj.role} {roleObj.Board ? `(${roleObj.Board})` : ""}
                        </span>
                      ))
                    ) : (
                      <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">
                        {member.role || "Board Member"}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 ">
                <div className="space-y-6 ">
                  <div className="bg-blue-200/40 p-6 rounded-[2rem] border border-slate-100 ">
                    <h3 className="text-slate-900 font-bold mb-5 flex items-center gap-2">
                       <User size={18} className="text-indigo-500" /> Identity Details
                    </h3>
                    <div className="space-y-5 ">
                      <div className="flex flex-col ">
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Official Email</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail size={16} className="text-slate-400" />
                          <span className="text-slate-700 font-semibold break-all text-sm">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-indigo-600 to-blue-700 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-200">
                    <Award size={40} className="mb-4 text-indigo-200" />
                    <h4 className="font-bold text-xl leading-tight">Editorial Excellence</h4>
                    <p className="text-indigo-100/80 text-sm mt-3 leading-relaxed">
                      Top-tier contributor specializing in academic governance and peer review.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="h-1 w-10 bg-indigo-600 rounded-full"></div> Professional Bio
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                      {member.description || "This profile is currently under active update by the user."}
                    </p>
                  </div>

                  <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                    <BookOpen size={20} className="text-indigo-500" /> Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {member.area_of_expertise ? (
                      (typeof member.area_of_expertise === 'string' 
                        ? member.area_of_expertise.split(',') 
                        : member.area_of_expertise
                      ).map((skill: string, i: number) => (
                        <span key={i} className="px-6 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold shadow-sm">
                          {skill.trim()}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 italic">No expertise listed yet.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}