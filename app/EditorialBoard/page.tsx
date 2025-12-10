import EditorialMemberCard from '@/components/Home/EditorialMemberCard'
import FooterSection from '@/components/Home/FooterSection' // Assuming FooterSection component path
import NavigationPage from '@/components/Home/nav/page'

const page = () => {

  const Editorial_members = [
    {   Id:1,
        "image":"/editorial-images/Dr.Modekurti Venkata Surya Kameshwar Rao.jpg",
        "Name": "Dr.Modekurti Venkata Surya Kameshwar Rao",
        "Role": "Sub Division-Editor in Chief",
        "Designation/College Name": "Associate Professor/IBS Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/dr-kameshwar-rao-modekurti-45145223/",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {   
        Id:2,
        "image":"/editorial-images/Dr.Srikanth Potharla.jpg",
        "Name": "Dr.Srikanth Potharla",
        "Role": "Deputy Editor in Chief",
        "Designation/College Name": "Assistant Professor/IBS Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/srikanth-p-2a06751a/",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {
        Id:3,
         "image": "/editorial-images/Dr Susanta K Mishra.jpg",
        "Name": "Dr Susanta K Mishra",
        "Role": "Sr Associate Editor",
        "Designation/College Name": "Professor/ Centurion University",
        "linkedinUrl": "https://www.linkedin.com/in/dr-susanta-k-mishra-3b5a9433/?originalSubdomain=in",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {  Id:4,
       "image": "/editorial-images/Dr.Muhammed Shafi M K.jpg",
        "Name": "Dr.Muhammed Shafi M K",
        "Role": "Associate Editor",
        "Designation/College Name": "Assistant Professor/ NIT Warangal",
        "linkedinUrl": "https://www.linkedin.com/in/dr-muhammed-shafi-mk-68a49254/?originalSubdomain=in",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {    Id:5,
      "image": "/editorial-images/Dr. Manisha Kumari.jpg",
        "Name": "Dr. Manisha Kumari",
        "Role": "Managing Editor",
        "Designation/College Name": "Associate Faculty Member/ (ni-msme)",
        "linkedinUrl": "https://www.linkedin.com/in/manishakumari-ba344857/",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {
        Id:6,
       "image": "/editorial-images/Dr. Sandeep Kumar Kesarwani.jpg",
        "Name": "Dr. Sandeep Kumar Kesarwani",
        "Role": "Sr Review Editor",
        "Designation/College Name": "Associate Professor/ Indian Institute of Information Technology",
       "linkedinUrl": "https://www.linkedin.com/in/dr-sandeep-kumar-kesarwani-48023755/?originalSubdomain=in",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {   
        Id:7,
        "image": "/editorial-images/Dr.CH Shanker.jpg",
        "Name": "Dr.CH Shanker",
        "Role": "Review Editor",
        "Designation/College Name": "Assistant Professor/ Geetam Hyderabad",
        "linkedinUrl": "https://www.linkedin.com/in/dr-ch-shankar-30881a3b/",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {   Id:8,
      "image": "/editorial-images/Dr. Kumaraswamy Manepalli.jpg",
        "Name": "Dr. Kumaraswamy Manepalli",
        "Role": "Domain Editor",
        "Designation/College Name": "Assistant Professor/Vignan's University, Vadlamudi",
       "linkedinUrl": "https://www.linkedin.com/in/manepalli-kumaraswamy-71b310126/?originalSubdomain=in",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {
      Id:9,
      "image": "/editorial-images/Dr.Rintu Anthony.jpg",
        "Name": "Dr.Rintu Anthony",
        "Role": "Assistant Editor",
        "Designation/College Name": "Assistant Professor / Rajagiri Business School",
       "linkedinUrl": "https://www.linkedin.com/in/rintu-anthony-8b2bb124/?originalSubdomain=in",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {   Id:10,
      "image": "/editorial-images/Dr.Saravanan Vellaiyan.jpg",
        "Name": "Dr.Saravanan Vellaiyan",
        "Role": "Copy Editor",
        "Designation/College Name": "Assistant Professor / Christ University",
       "linkedinUrl": "https://www.linkedin.com/in/saravanan-vellaiyan/?originalSubdomain=in",
       "collegeUrl":"https://www.ibshyderabad.org/"
    },
    {
      Id:11,
      "image": "/editorial-images/Dr. Mohammad Munawar Alam Sayyad.jpg",
        "Name": "Dr. Mohammad Munawar Alam Sayyad",
        "Role": "Editorial Member",
        "Designation/College Name": "Assistant Professor/ IBS Hyderabad",
       "linkedinUrl": "https://www.linkedin.com/in/munawar-alam-sayyad-a6304a107/?originalSubdomain=ae",
       "collegeUrl":"https://www.ibshyderabad.org/"
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
          Editorial Board Members
        </span>
      </div>

      <br />

      <p className="text-lg text-gray-700 leading-relaxed">
        The Global Journal for Progressive Innovation & Research was created
        with the intention of providing a reliable academic space where
        meaningful research can be shared and preserved. Each of our four
        sections represents an important area of study, yet together they
        reflect a broader purpose supporting knowledge that contributes to
        technological growth, organizational improvement, economic stability,
        and social development. We believe that responsible research plays an
        important role in shaping future progress. Our editorial process is
        designed to maintain fairness and quality, while giving authors the
        opportunity to present their work with clarity and confidence. We
        welcome contributions that are thoughtful, well-structured, and
        grounded in genuine academic effort. It is our hope that this journal
        becomes a useful resource for scholars, educators, professionals, and
        institutions who value knowledge that makes a difference.
      </p>
    </div>
  </div>
</section>

  <section className="py-10 px-6 ">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

      {Editorial_members.map((member)=>(
        <EditorialMemberCard
          key ={member.Id}
          image={member.image || ''}
          name={member.Name}
          role={member.Role}
         college={member['Designation/College Name']}
          linkedinUrl={member.linkedinUrl}
           collegeUrl="https://www.ibshyderabad.org/"
        />

      ))}


        

       

      </div>
    </section>
 
    <FooterSection />
    </>
  )
}

export default page