// app/activity/[slug]/page.js
import { getPostData, getSortedPostsData } from '../../../lib/posts';
import ImageCarousel from '../../../components/ImageCarousel';
// import 경로를 현재 파일 위치에 맞게 수정
import { extractImagesFromMarkdown, removeImagesFromHtml } from '../../../utils/extractImages';


export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts
  .filter(post=>post.slug)
  .map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const{slug}= await params;
  const postData = await getPostData(slug);
  return {
    title: postData.title,
  };
}

export default async function PostPage({ params }) {
  const{slug}=await params;
  const postData = await getPostData(slug);

  // 이미지 추출
  const images = extractImagesFromMarkdown(postData.contentMarkdown);
  
  // HTML에서 이미지 제거
  const contentHtmlWithoutImages = removeImagesFromHtml(postData.contentHtml);

  return (
    <>
      <article className="mt-5">
        <div className="post-meta"></div>
        
        {/* .post-content 클래스 변환 */}
        <div className="w-[90%] max-w-325 mx-auto mb-[2.2rem] font-healthset">
          
          {/* 날짜 및 제목 */}
          <time className="text-gray-500" dateTime={postData.date}>{postData.date}</time>
          <h1 className="mt-3 text-2xl md:text-3xl font-bold">{postData.title}</h1>
          <hr className="my-6 border-gray-200" />
          
          {/* 캐러셀 렌더링 */}
          {images.length > 0 && (
            <div className="mb-8">
              <ImageCarousel images={images} />
            </div>
          )}
          
          {/* 이미지가 제거된 콘텐츠 (Typography 최적화) */}
          <div 
            className="prose max-w-none break-all leading-relaxed text-white"
            dangerouslySetInnerHTML={{ __html: contentHtmlWithoutImages }} 
          />
        </div>
      </article>
    </>
  );
}
