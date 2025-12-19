import { NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import mime from "mime-types";

const REGION = "ap-south-1";
const BUCKET_NAME = "lurnexa";

const s3 = new S3Client({
  region: REGION,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const id = formData.get("id") as string;

    if (!file || !id) {
      return NextResponse.json(
        { error: "File or ID missing" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop();
    const key = `editorial_board_photos/${id}.${ext}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: mime.lookup(file.name) || "image/jpeg",
      })
    );

    const url = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${key}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
