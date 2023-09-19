import { Skeleton, SkeletonText, Stack } from '@/components/chakra';
import { getSession } from '@/utils/auth';

export default async function SettingsPage() {
  const session = await getSession();

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
