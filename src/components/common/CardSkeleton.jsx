import { Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rectangular" width={250} height={150} />
      <Skeleton variant="rectangular" width={100} height={30} />
      <Skeleton variant="rounded" width={250} height={60} />
    </Stack>
  );
};
