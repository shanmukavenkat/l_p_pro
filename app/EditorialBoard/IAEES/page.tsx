import FooterSection from '@/components/Home/FooterSection' // Assuming FooterSection component path
import NavigationPage from '@/components/Home/nav/page'
import ProfileCard from '@/components/Home/ProfileCard'

const page = () => {

  const Editorial_members = [
  {
   "id": 1,
   "image": "/editorial-images/iaees/Dr. Umesh Chandra Pati.jpg",
    "name": "Dr. Umesh Chandra Pati",
    "role": "Sub Division – Editor in Chief",
    "Designation/College Name": "Professor/National Institute of Technology Rourkela",
    "linkedinUrl": "https://www.linkedin.com/in/dr-umesh-c-pati-13034a20/",
    "collegeUrl": "https://www.nitrkl.ac.in/docs/Faculty/CV/1970695.pdf"
  },
  {
   "id": 2,
    "image": "/editorial-images/iaees/Dr.D. Srilatha.jpg",
    "name": "Dr. D. Srilatha",
    "role": "Deputy Editor in Chief",
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
//   {
//    "id": 4,
//     "image": "/editorial-images/Dr. CH. Naga Sai Kalyan.jpg",
//     "name": "Dr. CH. Naga Sai Kalyan",
//     "role": "Associate Editor",
//    "Designation/College Name": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   },
//   {
//    "id": 5,
//     "image": "",
//     "name": "",
//     "role": "Managing Editor",
//     "Designation/College Name": "",
//     "linkedinUrl": "",
//     "collegeUrl": ""
//   },
  {
   "id": 6,
    "image": "/editorial-images/Dr. Chandan Nayak.jpg",
    "name": "Dr. Chandan Nayak",
    "role": "Associate Managing Editor",
    "Designation/College Name": "",
    "linkedinUrl": "",
    "collegeUrl": ""
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

  return (
    <>
    
   <section className="py-20 px-6 bg-linear-to-b from-neutral-50 to-white border-b border-gray-300">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
    <NavigationPage />

    <div className=" flex-1 text-start lg:text-left space-y-2">
      {/* Centered title */}
      <div className="w-full flex justify-center">
        <span className="text-2xl font-bold text-center">
           Editorial Message - IAEES
        </span>
      </div>

      <br />

      <p className="text-lg text-gray-700 leading-relaxed">
      The IAEES section focuses on fostering innovation and excellence in electrical and electronics engineering. As engineering continues to evolve toward smarter, efficient, and sustainable solutions, we aim to support research that advances these frontiers.
We encourage submissions that propose new technologies, improve existing systems, and integrate modern tools such as automation, IoT, and intelligent devices. Our commitment is to publish work that contributes to engineering progress, addresses global
 technological needs, and supports the development of next-generation systems for a better future.

      </p>
    </div>
  </div>
</section>

  <section className="py-10 px-6 ">
   <div className=" flex-1 text-start lg:text-left space-y-2">
      {/* Centered title */}
      <div className="w-full flex justify-center">
        <span className="text-2xl font-bold text-center">
          Editorial Board Members (IAEES) 
        </span>
      </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

      {Editorial_members.map((member)=>(
        <ProfileCard
          key ={member.id}
          image={member.image || ''}
          name={member.name}
          role={member.role}
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