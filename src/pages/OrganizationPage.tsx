import KokanRangeTable from "../components/KokanRangeTable";
import OrganisationStructure from "@/components/OrganisationStructure"
import PuneRangeTable from "@/components/PuneRangeTable";
import UnitDyspSp from "@/components/UnitDyspSp";
import ChtrapatiSambhajiNagarRange from "../components/ChtrapatiSambhajiNagarRange"
import NagpurRange from "@/components/NagpurRange";
import PoliceLaunchSection from "@/components/PoliceLaunchSection";
import WorkshopPhotos from "@/components/WorkshopPhotos";
import VehicleDepartmentDocument from "@/components/VehicleDepartmentDocument";
import PoliceDepartmentTable from "@/components/PoliceDepartmentTable";
import VehicleTypes from "@/components/VehicleTypes";


const OrganisationPage = () => {
  return (
    <div className="min-h-screen">
     <OrganisationStructure/>
     <UnitDyspSp/>
     <PuneRangeTable/>
     <KokanRangeTable/>
     <ChtrapatiSambhajiNagarRange/>
     <NagpurRange/>
     <PoliceLaunchSection/>
     < WorkshopPhotos/>
     <VehicleDepartmentDocument/>
     <PoliceDepartmentTable/>
     <VehicleTypes/>

      </div>
  )
}
export default OrganisationPage;