import Card from "./components/Card";


import "./index.css";
const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    companyName: "Google",
    daysPosted: "5 days ago",
    post: "Software Engineer II",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNuvdA60X9tQmlPWSA2qd2ZojccIVAes_HA&s",
    companyName: "Apple",
    daysPosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    daysPosted: "10 days ago",
    post: "Frontend Engineer (React)",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    daysPosted: "3 days ago",
    post: "Backend Engineer (Node.js)",
    tag1: "Full Time",
    tag2: "Junior Level",
    package: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7e1AUwm9Z454JBzN3Pr3dLe60i9Z7LvPwWw&s",
    companyName: "Netflix",
    daysPosted: "1 week ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    daysPosted: "4 weeks ago",
    post: "Cloud Engineer (Azure)",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj7FJwC0vEK-pcoaKv3LNrPWHNXgRM-AhDw&s",
    companyName: "Tesla",
    daysPosted: "6 days ago",
    post: "Software Engineer – Autopilot",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    companyName: "Uber",
    daysPosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    package: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPgPCQ5o_XNfriYRAbp1UKCW8opXlkJZNqQ&s",
    companyName: "Airbnb",
    daysPosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf_k03KRdC4NkZaZ5esQz8sGlxwBJ-xX9sw&s",
    companyName: "Oracle",
    daysPosted: "10 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    package: "$38/hr",
    location: "Mumbai, India"
  }
];



const App=()=>{
  return(
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.package} tag2={elem.tag2} />
      })}
      
    </div>
  )
}

export default App;