import OverviewComponentCard from "../../../overview/components/OverviewComponentCard";

export default function BillingInfo() {
  return (
    <div className="mt-8">
      <OverviewComponentCard fullWidth={false} title={"Billing information"}>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm">Jonathan Wick</h4>
          <p>Gallery name: Louvre musuem</p>
          <p>Email address: abcdef@ghijk.com</p>
          <p>Gallery ID: scd443-sds43-vsdc34-d sd</p>
          <p>Next billing period: 24th july, 2024 </p>
        </div>
      </OverviewComponentCard>
    </div>
  );
}
