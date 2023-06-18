import axios from "axios";
import styled from "styled-components";
import {useEffect,useState} from "react"
import './repos.css'
export const HomePageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 39%;
  transform: translateX(-50%);
  color: black;
  font-size: 30px;
  font-weight: bold;
  .Box-row{
    border-top: 5px;
    list-style-type: none;
    margin-top: 50px;

}

  }

`;


let programmingLanguages = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'Ruby',
    'Go',
    'TypeScript',
    'Swift',
    'Kotlin',
    'Rust',
    'PHP',
    'HTML',
    'CSS',
    'Shell',
    'Objective-C',
    'Scala',
    'Perl',
    'R',
    'Matlab',
    'Groovy',
    'Lua',
    'Haskell',
    'Julia',
    'PowerShell',
    'Elixir',
    'Dart',
    'VB.NET',
    'Clojure',
    'F#',
    'Fortran',
    'Assembly',
    'PL/SQL',
    'Scratch',
    'Ada',
    'Racket',
    'LabVIEW',
    'COBOL',
    'Prolog',
    'Lisp',
    'Scheme',
    'Verilog',
    'RPG',
    'ABAP',
    'Tcl',
    'Logo',
    'Delphi',
    'VHDL',
    'Alice',
    'Erlang',
    'Groovy',
    'Julia',
    'OCaml',
    'Q#',
    'Smalltalk',
    'Visual Basic'
  ];
export const Repos = () => {
    const[repositories,setRepositories]=useState([])
    const[language,setLanguage]=useState('any')
    const[progamming,setProgramming]=useState(programmingLanguages)
    const[input,setInput]=useState('')
    const[time,setTime]=useState('daily')
    const getTrendingRepositories =  async () => {
        const now=new Date()
        const today=now.getFullYear()+now.getMonth()+now.getDate()
        axios.get(`https://api.github.com/search/repositories?since=${time}`, {
        params: {
            q: `created:<=${today} language:${language}`,
            sort: 'stars',
            order: 'desc'
        }
    })
      .then(response => {
        // Extract the list of repositories from the response data
        const repositories = response.data.items;
    
        // Process and display the repository information
        setRepositories(repositories)
      })
      .catch(error => {
        console.log('Error:', error);
      });
       
    };
    useEffect(()=>{
        getTrendingRepositories()

        setProgramming(programmingLanguages)
    
    },[language,time])
    return (
        <div className="container">
            <div className="row">
            <h1 className="text-center">Repos</h1>
                <div className=" card col-sm-12 col-xs-12 col-md-8 col-lg-8 d-flex flex-column justify-content-lg-betweeen justify-content-md-betweeen p-10">
                
                    <div className="header  d-flex justify-content-md-between justify-content-lg-between flex-row p-10" style={{height:'80px',width:'100%'}} >
                        <div className="d-flex flex-row align-items-center">
                        <button className="btn btn-sm btn-primary">Repositories</button>
                    <button className=" card btn btn-sm btn-transparent">Developers</button>    
                        </div>

                    <div className="d-flex flex-row align-items-center justify-content-md-between justify-content-lg-between gap-5 p-10 " >
                        <div>
                        <div >Spoken Language:<b className="color-fg-muted">Any</b></div>
          </div>


<div className="dropdown-toggle "data-bs-toggle="dropdown" aria-expanded="false">Language:<b className="color-fg-muted">{language}</b></div>
<ul className="dropdown-menu" >

    <input className="form-control" onChange={(event)=>{
        const result=programmingLanguages.filter(each=>each.includes(event.target.value))
        setProgramming(result)
    }}></input>
    <li><p className="dropdown-item" onClick={()=>{setLanguage('any')}}>Clear</p></li>
    <ul style={{overflowY:"scroll",overflowX:"hidden",height:"200px",listStyle:"none"}}>
    {progamming.filter(every=>every.includes(input)).map(each=>{
    return(
        <>
     
<li><p className="dropdown-item" onClick={()=>{setLanguage(each)}}>{each}</p></li>
    </>
    )

})}
    </ul>


  </ul>
              
<div className="dropdown-toggle "data-bs-toggle="dropdown" aria-expanded="false">Date Range:<b className="color-fg-muted">{time}</b></div>
<ul className="dropdown-menu">
    <li><p className="dropdown-item" onClick={()=>{setTime('daily')}}>Today</p></li>
    <li><p className="dropdown-item" onClick={()=>{setTime('weekly')}}>This week</p></li>
    <li><p className="dropdown-item"onClick={()=>{setTime('monthly')}} >This month</p></li>
  </ul>
                    </div>  
                </div>
                {repositories.map((each:any)=>(

<article className="Box-row card container p-10" key={each.id}>
    <div className="row">
        
    <h2 className="h3 ln-condonsed col-10">
        <a className="link" href={`https://github.com/${each.full_name}`} target="_blank">{each.full_name}</a>
    </h2>
    <div style={{float:"right"}} className="col-2">Star</div>
    </div>

    <p className="col-9 color-fg-muted my-1 pr-4">{each.description}</p>
    <div className="f6 color-fg-muted mt-2 gap-2">
        <div className="col-4 d-flex justify-content-md-between">
        <p>{each.language}</p>
        <p>{each.stargazers_count}</p>
        <p>{each.forks_count}</p>
             </div>
        
    </div>
</article>

                    )
                )}
                
        
                
                </div>
            </div>
        </div>
    );
};
export default Repos;