import React from "react";
import repairImg from "../assets/images/a1.jpg";

const VehicleRepair = () => {
  return (
    <div className="pt-24 px-6">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Repair & Maintenance Services
      </h1>

      <img
        src={repairImg}
        alt="Vehicle Repair"
        className="w-full max-w-3xl rounded-lg shadow-md"
      />

      <p className="mt-4 text-gray-600">
        येथे vehicle repair services बद्दल माहिती दाखवा...
      </p>
    </div>
  );
};

export default VehicleRepair;