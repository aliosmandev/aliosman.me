import { postivaClient } from "@/libs/postiva";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const content = await postivaClient.contents.getContentBySlug(params.slug);
  console.log(content);

  return (
    <div>
      <h1>Blog Detail</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
