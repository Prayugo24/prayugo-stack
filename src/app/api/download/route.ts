
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), 'src', 'assets', 'cv', 'CV_Prayugo_Dwi_Setiyoko.pdf');

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="CV_Prayugo_Dwi_Setiyoko.pdf"',
      },
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}