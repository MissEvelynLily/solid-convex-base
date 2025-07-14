import { api } from '@convex/_generated/api';
import { createMutation, createQuery } from '~/convex.ts';

export default function Counter() {
  const count = createQuery<number>(api.counter.get);
  const setCount = createMutation<void>(api.counter.increment);

  return (
    <button
      class='w-[200px] rounded-full border-2 border-gray-300 bg-gray-100 px-[2rem] py-[1rem] focus:border-gray-400 active:border-gray-400'
      onClick={() => setCount({ increment: 1 })}>
      Clicks: {count()}
    </button>
  );
}
