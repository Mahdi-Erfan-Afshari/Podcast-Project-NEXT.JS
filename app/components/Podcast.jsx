import Image from 'next/image';
import img1 from '@/app/img/podcast.png'
import {server} from '../api/podcasts/route';
import Controller from '@/app/components/Controller'


async function fetchPodcast() {
  const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });

  const podcasts = await response.json();
  return podcasts;
}

const Podcast = async ({ id }) => {
  const podcasts = await fetchPodcast();
  const podcast = podcasts.filter((podcast) => podcast.id == id);
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


// // export const getServerSideProps = async (context) => {
// //   const response = await fetch(`${server}/api/podcasts`);
// //   const podcasts = await response.json();
// //   const podcast = podcasts.filter((podcast) => podcast.id == context.params.id);

// //   return {
// //     props: {
// //       podcast
// //     }
// //   }
// // }

// // // export const getStaticProps = async (context) => {
// // //   const response = await fetch(`${server}/api/podcasts`);
// // //   const podcasts = await response.json();
// // //   const podcast = podcasts.filter((podcast) => podcast.id == context.params.id);

// // //   return {
// // //     props: {
// // //       podcast
// // //     }
// // //   }
// // // }

// // // export const getStaticPaths = async () => {
// // // 	const res = await fetch(`${server}/api/podcasts`);
// // // 	const podcasts = await res.json();

// // // 	const ids = podcasts.map(podcast => podcast.id);
// // // 	const paths = ids.map(id => ({params: {id: id.toString()}}))

// // // 	return {
// // // 		paths,
// // // 		fallback: false // if there isn't any data, it is return page 404
// // // 	}
// // // }





// import {server} from '@/app/api/podcasts/route'

// const Podcast = async ({  }) => {
//   const podcasts = await getServerSideProps()
//   console.log(podcasts);
//   return (
//     <div>
//       this is podcast  {podcasts.id}
//     </div>
//   )
// }

// export const getServerSideProps = async () => {
//   const res = await fetch(`${server}/api/podcasts`);
//   // const res = await fetch(`http://localhost:8000/api/podcasts`);
//   const podcast = await res.json();
//   return{
//     props:{
//       podcast
//     }
//   }
// }

// export default Podcast
