import fetchImages from "@/lib/fetchImages";
import { ImagesResults } from "@/models/Images";
import ImageCon from "./ImageCon";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
};

const Gallery = async ({ topic }: Props) => {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No images found...</h2>;

  const photoWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {photoWithBlur.map((photo) => (
        <ImageCon key={photo.id} photo={photo} />
      ))}
    </section>
  );
};

export default Gallery;
