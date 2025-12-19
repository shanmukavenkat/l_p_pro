import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const REGION = "ap-south-1";
const BUCKET_NAME = "lurnexa";

const s3 = new S3Client({ region: REGION });

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing user id" },
        { status: 400 }
      );
    }

    const extensions = ["jpg", "jpeg", "png", "webp"];

    for (const ext of extensions) {
      try {
        const key = `editorial_board_photos/${id}.${ext}`;

        const command = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
        });

        const response = await s3.send(command);

        // Stream image back to browser
        return new Response(response.Body as any, {
          headers: {
            "Content-Type": response.ContentType || "image/jpeg",
            "Cache-Control": "private, max-age=300",
          },
        });
      } catch {
        // try next extension
      }
    }

    return NextResponse.json(
      { error: "Image not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Get image error:", error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}
