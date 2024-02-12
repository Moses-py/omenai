"use client";
import Loader from "@/components/loader/Loader";
import { fetchHighlightData } from "@/services/overview_highlights/fetchHighlightData";
import { useQuery } from "@tanstack/react-query";
type HightlightCardProps = {
  title: string;
  icon: React.ReactNode;
  tag: string;
};
export default function HighlightCard({ tag }: HightlightCardProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`highlight`, tag],
    queryFn: async () => {
      const data = await fetchHighlightData(tag);
      return data;
    },
  });

  if (isLoading) return <Loader theme="dark" />;

  return <h4 className="font-normal text-xs sm:text-base text-dark">{data}</h4>;
}
