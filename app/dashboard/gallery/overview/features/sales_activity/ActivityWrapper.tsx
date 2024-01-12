import NotFoundData from "../../../../../../components/notFound/NotFoundData";
import { SalesActivity } from "./components/SalesActivity";
import { getSalesActivityData } from "@/services/sales/getSalesActivityData";
import OverviewComponentCard from "../../components/OverviewComponentCard";
import { salesDataAlgorithm } from "@/utils/salesDataAlgorithm";

export default async function ActivityWrapper() {
  const data = await getSalesActivityData();
  const activityData = salesDataAlgorithm(data.data);
  return (
    <>
      <OverviewComponentCard
        fullWidth={false}
        title={"Sales Activity"}
        id="tour-orders"
      >
        {activityData.length === 0 ? (
          <div className="w-full h-full grid pb-10">
            <NotFoundData />
          </div>
        ) : (
          <SalesActivity activityData={activityData} />
        )}
      </OverviewComponentCard>
    </>
  );
}
