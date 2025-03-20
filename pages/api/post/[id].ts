import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req, res) {
  const { url } = req.query;
  try {
    // Make a GET request to the provided URL
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Something went wrong...");
    }
  } catch (error) {
    console.error(error);
  }


  const postId = req.query.id;
  if (req.method === 'DELETE') {
    const post = await prisma.post.delete({
      where: { id: postId },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}