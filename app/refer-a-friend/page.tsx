import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { ReferAFriendPageClient } from "./refer-a-friend-page-client";

const seo = buildPageSeo({
  title: "Refer a Friend  Umbrella Health NYC",
  description: "Send a friend or partner to Umbrella  both of you get something back.",
  path: "/refer-a-friend",
  crumbs: [{ label: "Home", to: "/" }, { label: "Refer a Friend" }],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function ReferAFriendPage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ReferAFriendPageClient />
    </>
  );
}
