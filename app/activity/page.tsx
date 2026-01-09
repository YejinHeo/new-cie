import Link from 'next/link';
import { getSortedPostsData, getPostData} from '../../lib/posts';

type PostMeta = {
    slug: string;
    title: string;
    date: string;
}
type PostWithImage = PostMeta&{
    firstImageUrl: string|null;
}

export default async function ActivityPage() {
  const postsMeta = await getSortedPostsData();

  const posts = await Promise.all(
    postsMeta.map(async (post) => {
      const postData = await getPostData(post.slug);
      const firstImageMatch = postData.contentMarkdown?.match(/!\[.*?\]\((.*?)\)/);
      let firstImageUrl = firstImageMatch ? firstImageMatch[1] : null;
      if (firstImageUrl && firstImageUrl.startsWith('./images')) {
        firstImageUrl = firstImageUrl.replace('./images', '/images');
      }
      return {
        ...post,
        firstImageUrl,
      };
    })
  );

  return (
    <>
      <main className="max-w-5xl mx-auto mt-10 px-4 pb-20">
        <h1 className="text-3xl font-bold text-white mb-8">활동</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/activity/${post.slug}`}
              className="block"
            >
              <div className="flex gap-6 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                
                {/* 이미지 */}
                {post.firstImageUrl && (
                  <img
                    src={post.firstImageUrl}
                    alt={`${post.title} 대표 이미지`}
                    className="w-32 h-32 object-cover rounded-lg shrink-0"
                  />
                )}

                {/* 텍스트 */}
                <div className="flex flex-col justify-center">
                  <strong className="text-lg text-gray-900">
                    {post.title}
                  </strong>
                  <span className="text-sm text-gray-500 mt-2">
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
