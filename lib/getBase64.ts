import type { Photo, ImagesResults } from "@/models/Images";
import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to get images ${res.status}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    // console.log(base64);

    return base64;
  } catch (error) {
    console.log(error);
  }
}

export default async function addBlurredDataUrls(
  images: ImagesResults
): Promise<Photo[]> {
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );

  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i];

    return photo;
  });

  return photosWithBlur;
}
