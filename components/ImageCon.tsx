import type { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";

type Props = {
  photo: Photo;
};

const ImageCon = ({ photo }: Props) => {
  const wHRatio = photo.height / photo.width;

  const galleryH = Math.ceil(250 * wHRatio);

  const photoSpans = Math.ceil(galleryH / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{
        gridRow: `span ${photoSpans}`,
      }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={250}
            height={galleryH}
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
            className="group-hover:opacity-75"
            sizes="250px"
          />
        </div>
      </Link>
    </div>
  );
};

export default ImageCon;
