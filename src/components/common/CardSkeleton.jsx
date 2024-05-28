import { Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      <Skeleton variant="rectangular" width={150} height={150} />
      <Skeleton variant="rectangular" width={150} height={20} />
      <Skeleton variant="rounded" width={150} height={40} />
    </Stack>
  );
};
