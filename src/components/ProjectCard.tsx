import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  thumbnail: string;
};


export default function ProjectCard({ slug, thumbnail, title }: Props) {
  return (
    <Link href={`/work/${slug}`} className="card">
        <div className="thumb-wrapper">
            <Image 
                src={thumbnail} 
                alt={slug} 
                fill
                className="thumb-image" 
            />
            <div className='thumb-overlay' />
        </div>
    </Link>
  );
}
