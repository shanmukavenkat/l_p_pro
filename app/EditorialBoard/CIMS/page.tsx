import FooterSection from '@/components/Home/FooterSection' // Assuming FooterSection component path
import NavigationPage from '@/components/Home/nav/page'
import ProfileCard from '@/components/Home/ProfileCard'

const page = () => {

  const Editorial_members = [
    {   Id:1,
        "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm11.jpg",
        "Name": "Dr.Modekurti Venkata Surya Kameshwar Rao",
        "Role": "Sub Division-Editor in Chief",
        "Designation/College Name": "Associate Professor/IBS Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/dr-kameshwar-rao-modekurti-45145223/",
       "collegeUrl":"https://www.ifheindia.org/FacultyImages/Mq5sTPjgSkn8J4jPjlnscFWYy0p5MvTXrigIGJsvcPDF5qOn1r3b6nnL3Ne6KVk.pdf"
    },
    {   
        Id:2,
        "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs12.jpg",
        "Name": "Dr.Srikanth Potharla",
        "Role": "Deputy Editor in Chief",
        "Designation/College Name": "Assistant Professor/IBS Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/srikanth-p-2a06751a/",
       "collegeUrl":"https://www.ifheindia.org/FacultyImages/N3DYZbNMKEAYseOGmrIl82HhZWPoLASoqtAlM751FNF4wbU4jtHblFT5GokaxCW.pdf"
    },
    {
        Id:3,
         "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs13.jpg",
        "Name": "Dr Susanta K Mishra",
        "Role": "Sr Associate Editor",
        "Designation/College Name": "Professor/ Centurion University",
        "linkedinUrl": "https://www.linkedin.com/in/dr-susanta-k-mishra-3b5a9433/?originalSubdomain=in",
       "collegeUrl":"https://faculty.cutm.ac.in/general_profilesc.php?xyz=susanta.mishra@cutm.ac.in"
    },
    {  Id:4,
       "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm21.jpg",
        "Name": "Dr.Muhammed Shafi M K",
        "Role": "Associate Editor",
        "Designation/College Name": "Assistant Professor/ NIT Warangal",
        "linkedinUrl": "https://www.linkedin.com/in/dr-muhammed-shafi-mk-68a49254/?originalSubdomain=in",
       "collegeUrl":"https://erp.nitw.ac.in/ext/profile/sm-shafimk"
    },
    {    Id:5,
      "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm15.jpg",
        "Name": "Dr. Manisha Kumari",
        "Role": "Managing Editor",
        "Designation/College Name": "Associate Faculty Member/ (ni-msme)",
        "linkedinUrl": "https://www.linkedin.com/in/manishakumari-ba344857/",
       "collegeUrl":"https://www.nimsme.gov.in/employee/a7b4a35465d9853607aaa02f9ea4f0a3"
    },
    {
        Id:6,
       "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs16.jpg",
        "Name": "Dr. Sandeep Kumar Kesarwani",
        "Role": "Sr Review Editor",
        "Designation/College Name": "Associate Professor/ Indian Institute of Information Technology",
       "linkedinUrl": "https://www.linkedin.com/in/dr-sandeep-kumar-kesarwani-48023755/?originalSubdomain=in",
       "collegeUrl":"https://imparc.org/dr-sandeep-kumar-kesarwani/"
    },
    {   
        Id:7,
        "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fc17.jpg",
        "Name": "Dr.CH Shanker",
        "Role": "Review Editor",
        "Designation/College Name": "Assistant Professor/ Geetam Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/dr-ch-shankar-30881a3b/",
       "collegeUrl":"https://www.gitam.edu/faculty/chanagala-shankar"
    },
    {   Id:8,
      "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fk18.jpg",
        "Name": "Dr. Kumaraswamy Manepalli",
        "Role": "Domain Editor",
        "Designation/College Name": "Assistant Professor/Vignan's University, Vadlamudi",
       "linkedinUrl": "https://www.linkedin.com/in/manepalli-kumaraswamy-71b310126/?originalSubdomain=in",
       "collegeUrl":"https://vignan.ac.in/newvignan/departments/deptpeople.php?deptid=sch5_dept1&school=sch5&deptnm=MG"
    },
    {
      Id:9,
      "image": "https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fr19.jpg",
        "Name": "Dr.Rintu Anthony",
        "Role": "Assistant Editor",
        "Designation/College Name": "Assistant Professor / Rajagiri Business School",
       "linkedinUrl": "https://www.linkedin.com/in/rintu-anthony-8b2bb124/?originalSubdomain=in",
       "collegeUrl":"https://www.rajagiribusinessschool.edu.in/faculty-details/rintu-anthony"
    },
    {   Id:10,
      "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fs20.jpg",
        "Name": "Dr.Saravanan Vellaiyan",
        "Role": "Copy Editor",
        "Designation/College Name": "Assistant Professor / Christ University",
       "linkedinUrl": "https://www.linkedin.com/in/saravanan-vellaiyan/?originalSubdomain=in",
       "collegeUrl":"https://m.christuniversity.in/dept/faculty-details/NDc1OA==/MzAx"
    },
    {
      Id:11,
      "image":"https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/Lurnexa_2544fm14.jpg",
        "Name": "Dr. Mohammad Munawar Alam Sayyad",
        "Role": "Editorial Member",
        "Designation/College Name": "Assistant Professor/ IBS Hyderabad",
       "linkedinUrl": "https://www.linkedin.com/in/munawar-alam-sayyad-a6304a107/?originalSubdomain=ae",
       "collegeUrl":"https://www.ifheindia.org/FacultyImages/i0XM4hGH94EmMaWOLIWwcQMBXqQpOjoItCxNEp1h9ostR2fIEU57B5Bwau4AVg.pdf"
    }
]
  return (
    <>
    
   <section className="py-20 px-6 bg-linear-to-b from-neutral-50 to-white border-b border-gray-300">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
    <NavigationPage />

    <div className=" flex-1 text-start lg:text-left space-y-2">
      {/* Centered title */}
      <div className="w-full flex justify-center">
        <span className="text-2xl font-bold text-center">
           Editorial Message - CIMS
        </span>
      </div>

      <br />

      <p className="text-lg text-gray-700 leading-relaxed">
       The CIMS section aims to strengthen modern management scholarship by encouraging rigorous, practical, and forward-looking research. In a rapidly changing business landscape, effective strategic thinking, innovation, and data-driven decision-making have become essential.
We invite research that enhances organizational performance, addresses contemporary managerial challenges, and promotes sustainable and ethical practices. Our focus is to support work that bridges academic insight with real-world managerial application, helping shape competent and future-ready leadership.

      </p>
    </div>
  </div>
</section>

  <section className="py-10 px-6 ">
   <div className=" flex-1 text-start lg:text-left space-y-2">
      {/* Centered title */}
      <div className="w-full flex justify-center">
        <span className="text-2xl font-bold text-center">
          Editorial Board Members (CIMS) - Finance Management
        </span>
      </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

      {Editorial_members.map((member)=>(
        <ProfileCard
          key ={member.Id}
          image={member.image || ''}
          name={member.Name}
          role={member.Role}
          Desgination={member['Designation/College Name']}
         college={member['Designation/College Name']}
          linkedinUrl={member.linkedinUrl}
           collegeUrl={member.collegeUrl}
        />

      ))}
      </div>
    </section>
 
    <FooterSection />
    </>
  )
}

export default page