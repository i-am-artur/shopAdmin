import Link from 'next/link';
import { flattenUrls } from '@/source/routes/routes';

export default function Home() {
  flattenUrls();

  return (
    <main>
      {flattenUrls().map((el, i) => (
        <li key={i}>
          <Link href={el.path}>{el.path}</Link>
        </li>
      ))}
    </main>
  );
}
