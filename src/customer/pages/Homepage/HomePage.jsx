import React from "react";
import MainCrosel from "../../component/HomeCrosel/MainCrosel";
import HomeSectionCrosel from "../../component/HomeSectionCrosel/HomeSectionCrosel";
import { personal_care } from "../../assets/personalCare";
import { Home_Care } from "../../assets/homeCareProduct";

const HomePage = () => {
  return (
    <div>
      <MainCrosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCrosel data={personal_care} sectionName={"Personal Care Products"}  />
        <HomeSectionCrosel data={Home_Care} sectionName={"Home Care Products"}/>
      </div>
    </div>
  );
};

export default HomePage;
