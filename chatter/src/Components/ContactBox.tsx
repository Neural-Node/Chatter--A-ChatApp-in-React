import React, { useState } from "react";
interface ContactBoxProps{
    item : String[];
}

const ContactBox=({item}: ContactBoxProps)=>{
//     const [value, setValue] = useState '';
// const onChange = (event) => {
//     setValue(event.target.value);
// }
    return(
       <>
            <div className="w-[300px] h-[700px] bg-slate-600">
                <h1>Search Contacts</h1>
                <div className='search-container'>
                    <div className='search-inner'>
                        <input type="text">
                        </input>
                    </div>
                </div>
                <h2>Contacts</h2>
                {/* {item.length === 0 && <p>No Contacts</p>}
                    <ul className="list-group">
                        {item.map((item) => (
                            <li key={item}>
                                {item}
                            </li> */}
                         {/* ))} */}
                    {/* </ul> */}
            </div>
        </>
    )
}; export default ContactBox