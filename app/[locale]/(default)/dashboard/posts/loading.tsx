import { Skeleton, SkeletonText, Stack } from '@/components/chakra';

export default function PostsViewLoading() {
  return (
    <Stack>
      <Skeleton height="36px" width="200px" />
      <SkeletonText mt="4" noOfLines={4} skeletonHeight={4} />
    </Stack>
  );
}
