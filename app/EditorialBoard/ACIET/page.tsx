import FooterSection from '@/components/Home/FooterSection' // Assuming FooterSection component path
import NavigationPage from '@/components/Home/nav/page'
import ProfileCard from '@/components/Home/ProfileCard'

const page = () => {

  const Editorial_members =[
  {
    "Id": 1,
    "image": "/editorial-images/aciet/Dr. Anand Shukla .jpeg",
    "Name": "Dr. Anand Shukla",
    "Role": "Sub Division-Editor in Chief",
    "Designation/College Name": "Dean / Lovely Professional University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-anand-shukla-59342838/",
    "collegeUrl": "https://www.lpu.in/faculty/staff-profile.php?EmpCode=32898"
  },
  {
    "Id": 2,
    "image": "/editorial-images/aciet/Dr.Chandrashekar Jatoth.jpg",
    "Name": "Dr. Chandrashekar Jatoth",
    "Role": "Deputy Editor in Chief",
    "Designation/College Name": "Assistant Professor / National Institute of Technology, Raipur",
    "linkedinUrl": "",
    "collegeUrl": "https://nitrr.ac.in/viewdetails.php?q=it.jchandrashekar"
  },
  {
    "Id": 3,
    "image": "/editorial-images/aciet/Dr .Easwar krishna Iyer.jpg",
    "Name": "Dr. Easwar Krishna Iyer",
    "Role": "Sr Associate Editor",
    "Designation/College Name": "Director / Indus Business Academy (IBA), Bengaluru",
    "linkedinUrl": "https://www.linkedin.com/in/dr-easwar-krishna-iyer/",
    "collegeUrl": "https://iba.ac.in/about-iba/director-message"
  },
  {
    "Id": 4,
    "image": "/editorial-images/aciet/Dr. Chinmaya Kumar Swain.jpg",
    "Name": "Dr. Chinmaya Kumar Swain",
    "Role": "Associate Editor",
    "Designation/College Name": "Assistant Professor / IIM Jammu",
    "linkedinUrl": "https://www.linkedin.com/in/dr-chinmaya-kumar-swain-77b358128/",
    "collegeUrl": "https://iimj.ac.in/faculty-datae8d3.php?n=MTI0"
  },
  {
    "Id": 5,
    "image": "/editorial-images/aciet/Dr.Rishi Chopra.jpg",
    "Name": "Dr. Rishi Chopra",
    "Role": "Managing Editor",
    "Designation/College Name": "Associate Professor & Asst. Dean / Lovely Professional University",
    "linkedinUrl": "https://www.linkedin.com/in/dr-rishi-chopra-5b3260247/",
    "collegeUrl": "https://www.lpu.in/faculty/staff-profile.php?EmpCode=11111"
  },
  {
    "Id": 6,
    "image": "/editorial-images/aciet/Dr. T.V. Rajini Kanth.jpg",
    "Name": "Dr. T.V. Rajini Kanth",
    "Role": "Associate Managing Editor",
    "Designation/College Name": "Professor & Convener RDC / MGIT Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/dr-rajini-kanth-t-v-22384724/",
    "collegeUrl": "https://mgit.ac.in/wp-content/uploads/2025/01/Dr.-TV-Rajini-Kanth.pdf"
  },
  {
    "Id": 7,
    "image": "/editorial-images/aciet/Dr. Shaik Mahaboob Basha.jpg",
    "Name": "Dr. Shaik Mahaboob Basha",
    "Role": "Sr Review Editor",
    "Designation/College Name": "Professor & Head of Department (CSE) / Sree Dattha Institute of Engineering and Science, Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/dr-mahaboob-4a086657/",
    "collegeUrl": "https://www.sreedattha.ac.in/sdes/departments/computer-science-engineering/about-cse-department/faculty-members"
  },
  {
    "Id": 8,
    "image": "/editorial-images/aciet/Dr. Uma Rani Vanamala.jpg",
    "Name": "Dr. Uma Rani Vanamala",
    "Role": "Review Editor",
    "Designation/College Name": "Head of the Department, IT / Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    "linkedinUrl": "https://www.linkedin.com/in/dr-uma-rani-vanamala-87053620b/",
    "collegeUrl": "https://jntuhceh.ac.in/faculty_portal/uploads/resumes/uma_rani_profile.pdf"
  },
  {
    "Id": 9,
    "image": "/editorial-images/aciet/Dr.Balaji Halavath.png",
    "Name": "Dr. Balaji Halavath",
    "Role": "Domain Editor",
    "Designation/College Name": "Professor, CSE Department / Sreenidhi Institute of Science & Technology, Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/balaji-halavath-065268297/",
    "collegeUrl": "https://sreenidhi.edu.in/departments-faculty/dr-halavath-balaji-ph-d/"
  },
  {
    "Id": 10,
    "image": "/editorial-images/aciet/Dr.Kranthi Kumar Singamaneni.png",
    "Name": "Dr. Kranthi Kumar Singamaneni",
    "Role": "Editorial Executive",
    "Designation/College Name": "Associate Professor & In-Charge / Symbiosis Institute of Technology, Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/dr-kranthi-kumar-singamaneni-smieee-761540168/",
    "collegeUrl": "https://sithyd.edu.in/faculty/dr-kranthi-kumar-singamaneni"
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
          Editorial Message - ACIET
        </span>
      </div>

      <br />

      <p className="text-lg text-gray-700 leading-relaxed">
        The ACIET section is dedicated to advancing research in artificial intelligence and cutting-edge computational technologies. As the world moves toward intelligent automation, our focus is to publish work that offers new methods, models, and solutions addressing real-world challenges. We welcome contributions that push the boundaries of AI, strengthen interdisciplinary collaboration, and support the global transformation toward smarter technologies.
Our goal is to ensure that every published study adds meaningful value to the scientific community and contributes to the future of intelligent systems.
      </p>
    </div>
  </div>
</section>

  <section className="py-10 px-6 ">
   <div className=" flex-1 text-start lg:text-left space-y-2">
      {/* Centered title */}
      <div className="w-full flex justify-center">
        <span className="text-2xl font-bold text-center">
          Editorial Board Members (ACIET)
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