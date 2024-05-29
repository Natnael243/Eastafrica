import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";


const HomeSectionCrosel = ({data,sectionName}) => {

  const [activeIndex,setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 2.5 },
    720: { items: 3 },
    1024: { items: 5.5},
  };

  const slidePrev=()=>setActiveIndex(activeIndex - 1);
  const slideNext=()=>setActiveIndex(activeIndex + 1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = data.map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="">
      <h3 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h3>
      <div className="relative p-4">

        <AliceCarousel
          items={items}
          disableDotsControls
          disableArrows
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
        />
        { activeIndex !== items.length-5 && <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
}
{ activeIndex !== 0 && <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCrosel;
