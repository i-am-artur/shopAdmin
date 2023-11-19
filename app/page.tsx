import { Button } from '@mui/material';
import { page } from '@/source/routes/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {Object.values(page.categories).map((el, i) => (
        <li key={i}>
          <Link href={el.path}>{el.path}</Link>
        </li>
      ))}
    </main>
  );
}
