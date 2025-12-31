import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function NewsSkeleton() {
  return (
    <section className="mt-10">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "2fr 1fr",
        },
        gap: 3,
        px: 4,
      }}
    >
      {/* LEFT: HERO NEWS */}
      <Box>
        {/* Hero image */}
        <Skeleton
          variant="rounded"
          width="100%"
          height={320}
          sx={{ bgcolor: "#bfeeffff" }}
        />

        {/* Overlay content */}
        <Stack spacing={1} mt={2}>
          <Skeleton variant="text" width="30%" height={24}  sx={{ bgcolor: "#bfeeffff" }}/>
          <Skeleton variant="text" width="90%" height={36}  sx={{ bgcolor: "#bfeeffff" }}/>
          <Skeleton variant="text" width="85%" height={36}  sx={{ bgcolor: "#bfeeffff" }}/>
          <Skeleton variant="text" width="70%" height={20}  sx={{ bgcolor: "#bfeeffff" }}/>

          {/* Author row */}
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <Skeleton variant="circular" width={32} height={32}  sx={{ bgcolor: "#bfeeffff" }}/>
            <Skeleton variant="text" width={120} height={20}  sx={{ bgcolor: "#bfeeffff" }}/>
            <Skeleton variant="text" width={80} height={20}  sx={{ bgcolor: "#bfeeffff" }}/>
          </Stack>
        </Stack>
      </Box>

      {/* RIGHT: TRENDING NEWS */}
      <Box>
        <Skeleton variant="text" width="60%" height={32} sx={{ bgcolor: "#bfeeffff" }} />

        <Stack spacing={2} mt={2}>
          {[1, 2, 3, 4].map((i) => (
            <Stack
              key={i}
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Skeleton
                variant="rounded"
                width={80}
                height={60}  sx={{ bgcolor: "#bfeeffff" }}
              />
              <Stack spacing={1} flex={1}>
                <Skeleton variant="text" width="90%" height={18} sx={{ bgcolor: "#bfeeffff" }}/>
                <Skeleton variant="text" width="70%" height={16} sx={{ bgcolor: "#bfeeffff" }}/>
                <Skeleton variant="text" width="40%" height={14} sx={{ bgcolor: "#bfeeffff" }}/>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
    </section>
  );
}
