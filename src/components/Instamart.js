// import {useState} from "react";
// const Section=({title,desc})=>{
//     const [isVisible,setIsVisible]=useState(false);
//     return (
//         // built accordion
//         // we need to build if we click on show, it should collapse other accordion
//         // it should open one at a time(collapsable accordion)
//         <div className="border border-black m-2 p-2">
//             <h3 className="font-bold text-xl">{title}</h3>
//             {/* <button className="underline cursor-pointer" onClick={()=>setIsVisible(true)}>show</button>
//             <button className="underline cursor-pointer" onClick={()=>setIsVisible(false)}>hide</button> */}
//             {
//                 isVisible ?  (<button className="underline cursor-pointer" onClick={()=>setIsVisible(false)}>hide</button>)
//             :  (<button className="underline cursor-pointer" onClick={()=>setIsVisible(true)}>show</button>)
//             }
//             {isVisible && <p>{desc}</p>}
//         </div>
//     )
// }

// const Instamart=()=>{

//     return(
//        <div>
//             <Section title="About Instamart" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."/>
//             <Section title="Team Instamart" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."/>
//             <Section title="Careers" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."/>
//        </div>
//     )
// }
// export default Instamart

// import { useState } from "react";
// const Section = ({ title, desc,isVisible }) => {
// //   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="border border-black m-2 p-2">
//       <h3 className="font-bold text-xl">{title}</h3>
//       {isVisible ? (
//         <button
//           className="underline cursor-pointer"
//           onClick={() => setIsVisible(false)}
//         >
//           hide
//         </button>
//       ) : (
//         <button
//           className="underline cursor-pointer"
//           onClick={() => setIsVisible(true)}
//         >
//           show
//         </button>
//       )}
//       {isVisible && <p>{desc}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   return (
//     <div>
//       <Section
//         title="About Instamart"
//         desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
//         isVisible={true}
//       />
//       <Section
//         title="Team Instamart"
//         desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
//         isVisible={false}

//       />
//       <Section
//         title="Careers"
//         desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
//         isVisible={false}

//       />
//     </div>
//   );
// };
// export default Instamart;

// import { useState } from "react";
// const Section = ({ title, desc,isVisible,setIsVisible }) => {
// //   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="border border-black m-2 p-2">
//       <h3 className="font-bold text-xl">{title}</h3>
//       {isVisible ? (
//         <button
//           className="underline cursor-pointer"
//           onClick={() => setIsVisible(false)}
//         >
//           hide
//         </button>
//       ) : (
//         <button
//           className="underline cursor-pointer"
//           onClick={() => setIsVisible(true)}
//         >
//           show
//         </button>
//       )}
//       {isVisible && <p>{desc}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//     const [sectionConfig,setSectionConfig]=useState({
//         showAbout:false,
//         showTeam:false,
//         showCareers:false
//     })
//   return (
//     <div>
//       <Section
//         title="About Instamart"
//         desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
//         isVisible={sectionConfig.showAbout}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:true,
//             showTeam:false,
//             showCareers:false
//         })}
//       />
//       <Section
//         title="Team Instamart"
//         desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
//         isVisible={sectionConfig.showTeam}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:false,
//             showTeam:true,
//             showCareers:false
//         })}
//       />
//       <Section
//         title="Careers"
//         desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
//         isVisible={sectionConfig.showCareers}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:true,
//             showTeam:false,
//             showCareers:false
//         })}
//       />
//     </div>
//   );
// };
// export default Instamart;

import { useState } from "react";
const Section = ({ title, desc,isVisible,setIsVisible }) => {
//   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          className="underline cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          hide
        </button>
      ) : (
        <button
          className="underline cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          show
        </button>
      )}
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection]=useState("about")
  return (
    <div>
      <Section
        title="About Instamart"
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        isVisible={visibleSection==="about"}
        setIsVisible={()=>setVisibleSection("about")}
      />
      <Section
        title="Team Instamart"
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        isVisible={visibleSection==="team"}
        setIsVisible={()=>setVisibleSection("team")}
      />
      <Section
        title="Careers"
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        isVisible={visibleSection==="careers"}
        setIsVisible={()=>setVisibleSection("careers")}
      />
    </div>
  );
};
export default Instamart;