import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <h1 className='text-7xl font-extrabold'>Hello I&apos;m &nbsp;
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          Morgan
        </span>
      </h1>
      <p className='mt-3 text-xl text-gray-600'>Hello World! Check out projects.</p>
      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link key={project._id}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
            href={`/projects/${project.slug}`}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className='object-cover rounded-lg border border-gray-500' />
            )}

            <div className='font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>{project.name}</div>
            {/* <img src={project.image} alt={project.name} /> */}
            {/* <p>{project.content}</p> */}
          </Link>
        ))}
      </div>
    </>
  );
}
