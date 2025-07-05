import works from '../../../data/works.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { linkify } from '@/lib/linkify';

type Work = {
  slug: string;
  title: string;
  images: string[];
  videos?: string[];
  videolink?: string;
  day?: string;
  credit?: string;
  description?: string;
  linker?: string; 
};

type Props = {
  params: { slug: string };
};

export default function WorkDetail({ params }: Props) {
    const work: Work | undefined = works.find((w) => w.slug === params.slug);  
    if (!work) return notFound();

  return (
    <main>
      <div className="detail-images">
        {work.videos?.map((src, i) => (
        <video
            key={i}
            autoPlay
            controls
            loop
            muted
            playsInline
            className="detail-video"
            width={600}
            height={400}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        ))}
        {work.videolink && (
            <div className="embed-video">
            <iframe
                src={work.videolink}
                width={395}
                height={702}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="embedded video"
            />
            </div>
        )}
        {work.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${work.title} ${i + 1}`}
            width={600}
            height={400}
          />
        ))}
      </div>
      {work.linker && (
        <h2
            dangerouslySetInnerHTML={{ __html: linkify(work.linker) }}
        />
      )}
      <p>{work.title}</p>
      <p>{work.day}</p>
      <p>{work.credit}</p>
      <h1 style={{ whiteSpace: 'pre-line' }}>{work.description}</h1>
    </main>
  );
}
