
import Card1 from "./components/Card1";
const App = () => {
  
    const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    post: "1 day ago",
    role: "Software Engineer",
    jobTime: "Full-time",
    roleLevel: "Junior Level",
    rate: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://i.pinimg.com/736x/29/f6/41/29f641b507ccb60bb7a62a830b988736.jpg",
    company: "Amazon",
    post: "2 days ago",
    role: "Data Analyst",
    jobTime: "Full-time",
    roleLevel: "Entry Level",
    rate: "$38/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    company: "Google",
    post: "3 days ago",
    role: "Software Developer",
    jobTime: "Full-time",
    roleLevel: "Junior Level",
    rate: "$50/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    post: "5 days ago",
    role: "Data Scientist",
    jobTime: "Full-time",
    roleLevel: "Mid Level",
    rate: "$42/hr",
    location: "Pune, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/026/783/567/non_2x/cisco-logo-editorial-free-vector.jpg",
    company: "Cisco",
    post: "1 week ago",
    role: "Software Engineer",
    jobTime: "Full-time",
    roleLevel: "Junior Level",
    rate: "$44/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    company: "Oracle",
    post: "2 weeks ago",
    role: "Cloud Engineer",
    jobTime: "Full-time",
    roleLevel: "Mid Level",
    rate: "$46/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    company: "Accenture",
    post: "2 weeks ago",
    role: "Business Analyst",
    jobTime: "Full-time",
    roleLevel: "Entry Level",
    rate: "$32/hr",
    location: "Gurugram, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    company: "SAP",
    post: "3 weeks ago",
    role: "Software Developer",
    jobTime: "Full-time",
    roleLevel: "Junior Level",
    rate: "$40/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/046/437/264/non_2x/adobe-acrobat-icon-free-png.png",
    company: "Adobe",
    post: "4 weeks ago",
    role: "Frontend Developer",
    jobTime: "Part-time",
    roleLevel: "Junior Level",
    rate: "$35/hr",
    location: "Noida, India"
  },
];
  return (
    
    <div className='parent'>

      {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card1 company={elem.company} logo={elem.logo} post={elem.post}
         role={elem.role} jobTime={elem.jobTime} roleLevel={elem.roleLevel}
         rate={elem.rate} location={elem.location} />
        </div>
      })}
      
    
           

    </div>
  )
}

export default App