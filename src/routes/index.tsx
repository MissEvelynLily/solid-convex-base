import { A } from '@solidjs/router';
import Counter from '~/components/Counter.tsx';

export default function Home() {
  return (
    <main class='mx-auto p-4 text-center text-gray-700'>
      <h1 class='max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase'>Hello world!</h1>
      <Counter />
      <p class='mt-8'>
        Visit{' '}
        <a href='https://solidjs.com' target='_blank' class='text-sky-600 hover:underline' rel='noopener'>
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class='my-4'>
        <span>Home</span>
        {' - '}
        <A href='/about' class='text-sky-600 hover:underline'>
          About Page
        </A>{' '}
      </p>
    </main>
  );
}
