import FooterSection from '@/components/Home/FooterSection' // Assuming FooterSection component path
import NavigationPage from '@/components/Home/nav/page'
import ProfileCard from '@/components/Home/ProfileCard'

const page = () => {

  const Editorial_members =[
  {
    "Id": 1,
    "image": "/editorial-images/aress/picture12.jpg",
    "Name": "Dr. Badri Narayanan Gopalakrishnan",
    "Role": "Sub Division-Editor in Chief",
    "Designation/College Name": "Fellow, NITI Aayog, Government of India / Boston College",
    "linkedinUrl": "https://www.linkedin.com/in/badrinarayanang/",
    "collegeUrl": "https://www.bc.edu/bc-web/schools/wcas/about/faculty-research/faculty-directory-folder/badri-narayanan-gopalakrishnan.html"
  },
  {
    "Id": 2,
    "image": "/editorial-images/aress/Dr. Aruna Kumar Dash.jpg",
    "Name": "Dr. Aruna Kumar Dash",
    "Role": "Deputy Editor in Chief",
    "Designation/College Name": "Associate Professor / IBS Hyderabad",
    "linkedinUrl": "https://www.linkedin.com/in/aruna-dash-62a74a19/",
    "collegeUrl": "https://www.ifheindia.org/icfai-school-of-social-sciences/Facultyprofiles/Economics/Aruna-Kumar-Dash.pdf"
  },
  {
    "Id": 3,
    "image": "/editorial-images/aress/Dr.Sumeet Gupta.jpg",
    "Name": "Dr. Sumeet Gupta",
    "Role": "Sr Associate Editor",
    "Designation/College Name": "Professor and Associate Dean - IQAC at UPES",
    "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Dr.Sumeet%20Gupta&origin=GLOBAL_SEARCH_HEADER&sid=-dZ",
    "collegeUrl": "https://www.upes.ac.in/faculty/school-of-business/prof-dr-sumeet-gupta"
  },
  {
    "Id": 4,
    "image": "/editorial-images/aress/Dr.Krishna Raj.jpg",
    "Name": "Dr. Krishna Raj",
    "Role": "Associate Editor",
    "Designation/College Name": "Professor and Head, Centre for Economic Studies and Policy (CESP)",
    "linkedinUrl": "https://www.linkedin.com/in/krishna-raj-71098823/",
    "collegeUrl": "https://www.isec.ac.in/krishna-raj/"
  },
  {
    "Id": 5,
    "image": "/editorial-images/aress/Dr.Minaketan Behara.jpg",
    "Name": "Dr. Minaketan Behera",
    "Role": "Managing Editor",
    "Designation/College Name": "Professor / Jawaharlal Nehru University",
    "linkedinUrl": "",
    "collegeUrl": "https://www.jnu.ac.in/content/minaketan"
  },
  {
    "Id": 6,
    "image": "/editorial-images/aress/Dr.Debi Prasad Bal.jpg",
    "Name": "Dr. Debi Prasad Bal",
    "Role": "Associate Managing Editor",
    "Designation/College Name": "Associate Professor / XLRI Jamshedpur",
    "linkedinUrl": "https://www.linkedin.com/in/debi-prasad-bal-4386136a/",
    "collegeUrl": "https://xlri.ac.in/about/full-time-faculty/debi-prasad"
  },
  {
    "Id": 7,
    "image": "/editorial-images/aress/Dr.Pravin Jadhav.jpg",
    "Name": "Dr. Pravin Jadhav",
    "Role": "Sr Review Editor",
    "Designation/College Name": "Associate Professor and HoD / Institute of Infrastructure Technology Research and Management (IITRAM), Ahmedabad",
    "linkedinUrl": "https://www.linkedin.com/in/pravin-jadhav-16314322/",
    "collegeUrl": "https://iitram.ac.in/empdetail/2015152"
  },
  {
    "Id": 8,
    "image": "/editorial-images/null",
    "Name": "",
    "Role": "Review Editor",
    "Designation/College Name": "",
    "linkedinUrl": "",
    "collegeUrl": ""
  },
  {
    "Id": 9,
    "image": "/editorial-images/null",
    "Name": "",
    "Role": "Domain Editor",
    "Designation/College Name": "",
    "linkedinUrl": "",
    "collegeUrl": ""
  },
  {
    "Id": 10,
    "image": "/editorial-images/aress/Prof. P. Guru Prasad.jpg",
    "Name": "Prof. P. Guru Prasad",
    "Role": "Editorial Executive",
    "Designation/College Name": "Assistant Professor / VVIT University",
    "linkedinUrl": "https://www.linkedin.com/in/puttu-guru-prasad-569014136/",
    "collegeUrl": "https://www.vvitguntur.com/pgp-profile"
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
   <div className=" flex-1 text-start lg:text-left space-y-2">
      {/* Centered title */}
      <div className="w-full flex justify-center">
        <span className="text-2xl font-bold text-center">
          Editorial Board Members (ARESS)
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