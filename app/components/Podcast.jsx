import Image from 'next/image';
import img1 from '@/app/img/podcast.png'
import {server} from '../api/podcasts/route';
import Controller from '@/app/components/Controller'


async function fetchPodcast() {
  // const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
  const response = await fetch('https://podcastnextjs.netlify.app/api/podcasts', { cache: 'no-store' });

  const podcasts = await response.json();
  return podcasts;
}

const Podcast = async ({ id }) => {
  const podcasts = await fetchPodcast();
  const podcast = await podcasts.filter((podcast) => podcast.id == id);

  return (
    <div className='container mx-auto p-3'>
      {podcast.map((podcast) => (
        <div className='md:flex md:items-center justify-center p-5'>
          <Controller url={podcast.url} />
        </div>
       ))}
    </div>
  )
}

export default Podcast


