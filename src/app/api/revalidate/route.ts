import { revalidatePath } from 'next/cache'

export async function GET() {
  revalidatePath('/', 'layout');
  revalidatePath('/', 'page');
  revalidatePath('/(home)', 'page');
  revalidatePath('/projects', 'page');
  revalidatePath('/projects/[slug]', 'page');
  return Response.json({ revalidated: true, now: Date.now() })
}