import React from 'react';
import './Country.css';


const Country:React.FC = () => {
    const country = [
        {
            countryname:  'India',
            population:   '138crores',
            capital:    'delhi',

        },
        {
            countryname:   'China',
            population:   '140.21crores',
            capital:   'bejing',
        },
        {
            countryname:   'USA',
            population:   '32.95crores',
            capital:   'Washington, D.C.',
        },
        {
            countryname:   'Brazil',
            population:   '21.26crores',
            capital:   'Brasília',
        },
        {
            countryname:   'Pakisthan',
            population:   '22.09crores',
            capital:   'Islamabad',
           
        },
        {
            countryname:   'Japan',
            population:   '13crores',
            capital:   'Tokyo',
           
        },
        {
            countryname:   'Russia',
            population:   '12crores',
            capital:   'Moscow',
           
        },
        {
            countryname:'Indonesia',
            population:'10crores',
            capital:'Jakarta',
           
        },
        {
            countryname:'Egypt',
            population:'10crores',
            capital:'Cairo',
           
        },
        {
            countryname:'Bangladesh',
            population:'8crores',
            capital:'Dhaka',
           
        },
        {
            countryname:'Peru',
            population:'8crores',
            capital:'Lima',
           
        },
        {
            countryname:'Iran',
            population:'8crores',
            capital:'Tehran',
           
        },
        {
            countryname:'Thailand',
            population:'8crores',
            capital:'Bangkok',
           
        },
        {
            countryname:'Saudi Arabia',
            population:'7crores',
            capital:'Riyadh',
           
        },
        {
            countryname:'Colombia',
            population:'7crores',
            capital:'Bogota',
           
        },
        {
            countryname:'Germany',
            population:'3crores',
            capital:'Berlin',
           
        },
        {
            countryname:'Spain',
            population:'3crores',
            capital:'Madrid',
           
        },
        {
            countryname:'South Africa',
            population:'2crores',
            capital:'Pretoria',
           
        },
        {
            countryname:'North Korea',
            population:'2crores',
            capital:'Pyongyang',
           
        },
    ];
   



    const[countryList, setCountryList]= React.useState<{countryname: string; population:string; capital:string; }[] | undefined>(country);
    const [text,setText]= React.useState('');

    const handleOnClick=()=>{
        const findUsers = 
        countryList&& countryList?.length >0 ? countryList?.filter((u) => u?.countryname===text):undefined;
        console.log(findUsers);
        setCountryList(findUsers);
    };
    


    return(
        <div>
            <div className="title">
            <h1>Search Countries</h1>
            </div>
            <div className="input__wrapper">
                <input type ="text" 
                placeholder="country name" 
                value={text} 
                onChange={(e)=>
                    {setText(e.target.value); 
                    setCountryList(country)}}
                    />
                <button disabled={!text} onClick={handleOnClick}> Search</button>
            </div>

            <div className="body">

                {countryList && countryList?.length=== 0 &&(
                    <div className="notFound">Not Found</div>
                )}
                {countryList && countryList?.length> 0 &&
                 countryList?.map(countries=>{
                    return(
                        <div className="body__item">
                            <h3> COUNTRYNAME:  {countries?.countryname}</h3>
                            <p>POPULATION:  {countries?.population}</p>
                            <button  onClick={handleOnClick}>capital:{countries?.capital} </button>
 
                         
                        </div>
                    );  
                })}

            </div>
            
        </div>
      
    );

};

export default Country;