// import Image from 'next/image';
// import img1 from '@/app/img/podcast.png'
// import {server} from '../api/podcasts/route';
// import Controller from '@/app/components/Controller'


// // async function fetchPodcast() {
// //   const response = await fetch(`${server}/api/podcasts`);
// //   const res = await response.json();
// //   return res;
// // }

// const Podcast = async ({ id , podcast }) => {
//   // const podcasts = await fetchPodcast(id);
//   // const podcast = podcasts.filter((podcast) => podcast.id == id);
//   console.log(podcast);
//   return (
//     <div className='container mx-auto p-3'>
//       {/* {podcasts.map((podcast) => ( */}
//         <div className='md:flex md:items-center justify-center p-5'>
//           {/* <div className='flex flex-col justify-center'>
//             <div className='w-28 md:w-full w-full me-5'><Image className='rounded-xl w-full' src={img1} /></div>
//             <h1 className='md:hidden text-4xl font-bold mt-8 md:mt-0'>{podcast.title}</h1>
//           </div>
//           <div>
//             <h1 className='hidden md:block text-4xl text-center font-bold mt-3 md:ms-4 md:mt-0'>{podcast.title}</h1>
//             <p className='text-lg mt-3 md:ms-3 text-Gray'>{podcast.description}</p>
//           </div> */}
//           {/* <audio src={podcast.url} controls autoPlay></audio> */}
//           <Controller url={podcast.url} />
//         </div>
//       {/* ))} */}
//     </div>
//   )
// }



// export const getServerSideProps = async (context) => {
//   const response = await fetch(`${server}/api/podcasts`);
//   const podcasts = await response.json();
//   const podcast = podcasts.filter((podcast) => podcast.id == context.params.id);

//   return {
//     props: {
//       podcast
//     }
//   }
// }

// // export const getStaticProps = async (context) => {
// //   const response = await fetch(`${server}/api/podcasts`);
// //   const podcasts = await response.json();
// //   const podcast = podcasts.filter((podcast) => podcast.id == context.params.id);

// //   return {
// //     props: {
// //       podcast
// //     }
// //   }
// // }

// // export const getStaticPaths = async () => {
// // 	const res = await fetch(`${server}/api/podcasts`);
// // 	const podcasts = await res.json();

// // 	const ids = podcasts.map(podcast => podcast.id);
// // 	const paths = ids.map(id => ({params: {id: id.toString()}}))

// // 	return {
// // 		paths,
// // 		fallback: false // if there isn't any data, it is return page 404
// // 	}
// // }


// export default Podcast



import {server} from '@/app/api/podcasts/route'

const Podcast = async ({  }) => {
  const podcasts = await getServerSideProps()
  console.log(podcasts);
  return (
    <div>
      this is podcast  {podcasts.id}
    </div>
  )
}

export const getServerSideProps = async () => {
  // const res = await fetch(`${server}/api/podcasts`);
  const res = await fetch(`http://localhost:3000/api/podcasts`);
  const podcast = await res.json();
  return{
    // props:{
      podcast
    // }
  }
}

export default Podcast
