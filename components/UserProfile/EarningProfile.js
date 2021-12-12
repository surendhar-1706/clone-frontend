import React from "react";

function EarningProfile() {
  return (
    <div className="border-r space-y-3 py-2 pb-4">
      <div className="flex items-center justify-between md:px-8  border-b  md:py-2">
        <div>
          <div className="font-bold">$10</div>
          <div className="text-sm">Total Earnings</div>
        </div>
        <div>
          <div className="font-bold">1</div>
          <div className="text-sm">Total Jobs</div>
        </div>
      </div>
      <div className=" md:px-8">
        <div> Video Introduction</div>
      </div>
      <div className=" md:px-8">
        <div className="font-semibold text-lg">Availability</div>
        <div>Available </div>
        <div>As Needed - Open to Offers</div>
      </div>
      <div className=" md:px-8">
        <div className="font-semibold text-lg"> Languages</div>
        <div>English: Fluent </div>
        <div>Tamil: Native or Bilingual</div>
      </div>
      <div className=" md:px-8">
        <div className="font-semibold text-lg">Education</div>
        <div>
          College of Engineering(Guindy) Bachelor of Technology (BTech),
          Information Technology
        </div>
      </div>
    </div>
  );
}

export default EarningProfile;
