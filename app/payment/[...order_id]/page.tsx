import ComponentWrapper from "./components/ComponentWrapper";

export default function page({ params }: { params: { order_id: string } }) {
  return <ComponentWrapper order_id={params.order_id} />;
}
