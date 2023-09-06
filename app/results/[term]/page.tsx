import Gallery from "@/components/Gallery";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

export function generateMetadata({ params: { term } }: Props) {
  return {
    title: `Results for ${term}`,
  };
}

export default function SearchPage({ params: { term } }: Props) {
  return <Gallery topic={term} />;
}
