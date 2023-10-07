// import React, { useState } from 'react';
// import MDBox from "components/MDBox";
// import './Podcasts.css';
// import { Podcasts } from '@mui/icons-material';



// const Podcasts = () => {
 

//   return (
//     <MDBox py={3}>
//             <div className='podcasts'>
//       <h1>GeeksforGeeks</h1>
//       <h2>HTML iframe Tag</h2>
//       <p>Content goes here</p>
//       <iframe
//         src="https://ide.geeksforgeeks.org/tryit.php"
//         height="300"
//         width="400"
//       ></iframe>
//     </div>
   
//     </MDBox>
//   );
// };

// export default Podcasts;

import React, { useState } from 'react';
import MDBox from "components/MDBox";
import './Podcasts.css';
import { Podcasts } from '@mui/icons-material';

const Podcasts = () => {

    const [vid1, setVid1] = useState('');

    const handleVid1Change = (event) => {
        setVid1(event.target.value);
      };

  return (
    <MDBox py={3}>
    <html>
      <body className='podcasts'>
        <h1>Latest Podcats</h1>
        <h2>HTML iframe Tag</h2>
        <p>Content goes here</p>
        <iframe width="790" height="444" src="https://www.youtube.com/embed/Ug9lI4OJ9QA" 
        title="Dak Ghar Niryat Kendra - Step by Step Process | India Post | Hindi | Ankit Sahu | ExportWala |" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        value={vid1} onChange={handleVid1Change}
        allowfullscreen>
        </iframe>
      </body>
    </html>
    </MDBox>
  );
}

export default Podcasts;
