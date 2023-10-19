import { SkeletonText, Stack } from '@/components/chakra';

export default function CakeViewLoading() {
  return (
    <Stack>
      <SkeletonText mt="4" noOfLines={10} skeletonHeight={5} width="500px" />
    </Stack>
  );
}
