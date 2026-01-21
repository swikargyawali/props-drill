import Card from "./components/Card";


import "./index.css";
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    daysPosted: "5 days ago",
    post: "Software Engineer II",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    daysPosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    daysPosted: "10 days ago",
    post: "Frontend Engineer (React)",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    daysPosted: "3 days ago",
    post: "Backend Engineer (Node.js)",
    tag1: "Full Time",
    tag2: "Junior Level",
    package: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    daysPosted: "1 week ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    daysPosted: "4 weeks ago",
    post: "Cloud Engineer (Azure)",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    daysPosted: "6 days ago",
    post: "Software Engineer – Autopilot",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    daysPosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    package: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    daysPosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    package: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
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
        return <Card company={elem.companyName} />
      })}
      
    </div>
  )
}

export default App;