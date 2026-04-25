import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Process with sharp
    // 1. Resize to max 1920px width to save bandwidth
    // 2. Grayscale + Tint to create a Duotone effect (Burgundy: #800020)
    // 3. WebP compression for extreme performance
    const processedBuffer = await sharp(buffer)
      .resize({ width: 1920, withoutEnlargement: true })
      .grayscale()
      .tint('#800020') // Tint maps shadows to Burgundy, creating a premium duotone
      .webp({ quality: 80 })
      .toBuffer();

    // Create Base64 URI so it can be immediately shown or saved
    const base64Data = processedBuffer.toString('base64');
    const dataUri = `data:image/webp;base64,${base64Data}`;

    return NextResponse.json({
      url: dataUri,
      message: 'Image processed successfully',
    });

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { error: 'Error processing image' },
      { status: 500 }
    );
  }
}
