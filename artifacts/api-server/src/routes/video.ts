import { Router } from "express";
import path from "path";
import { existsSync } from "fs";

const router = Router();

router.get("/video/intro.mp4", (req, res) => {
  const isProd = process.env.NODE_ENV === "production";

  const candidates = isProd
    ? [
        path.resolve(process.cwd(), "artifacts/portfolio/dist/public/intro.mp4"),
        path.resolve(process.cwd(), "../portfolio/dist/public/intro.mp4"),
      ]
    : [
        path.resolve(process.cwd(), "artifacts/portfolio/public/intro.mp4"),
        path.resolve(process.cwd(), "../portfolio/public/intro.mp4"),
      ];

  const videoPath = candidates.find((p) => existsSync(p));

  if (!videoPath) {
    res.status(404).json({ error: "Video not found" });
    return;
  }

  res.sendFile(videoPath);
});

export default router;
