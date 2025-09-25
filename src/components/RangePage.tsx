import React from "react";
import { useParams } from "react-router-dom"; 
import KokanRangeTable from "../components/KokanRangeTable";  // ✅ correct import
import PuneRangeTable from "../components/PuneRangeTable";
import NagpurRangeTable from "../components/NagpurRange";
import CSNagarRangeTable from "../components/ChtrapatiSambhajiNagarRange";
import BruhMumbai from "../components/BruhMumbai"
const RangePage = () => {
  const { id } = useParams();

  const renderTable = () => {
    switch (id) {
      case "konkan":    // ✅ matches with OrganizationalChart
        return <KokanRangeTable />;
      case "pune":
        return <PuneRangeTable />;
      case "nagpur":
        return <NagpurRangeTable />;
      case "cs_nagar":
        return <CSNagarRangeTable />;
        case "bruhmumbai":
        return <BruhMumbai/>;
      default:
        return <p>Range data available नाही.</p>;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        {id === "konkan" && "SPMT कोकण रेंज"}
        {id === "pune" && "SPMT पुणे रेंज"}
        {id === "nagpur" && "SPMT नागपूर रेंज"}
        {id === "cs_nagar" && "SPMT छ.स. नगर रेंज"}
        {id === "bruhmumbai" && "बृहमुंबई "}

      </h1>
      {renderTable()}
    </div>
  );
};

export default RangePage;
