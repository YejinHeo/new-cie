// utils/extractImages.js
export function extractImagesFromMarkdown(markdown) {
  if (!markdown) return [];
  
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  const images = [];
  let match;

  while ((match = imageRegex.exec(markdown)) !== null) {
    let src = match[2];
    const alt = match[1];
    
    // 상대 경로를 절대 경로로 변환
    if (src && src.startsWith('./images')) {
      src = src.replace('./images', '/images');
    }
    
    images.push({ src, alt });
  }
  
  return images;
}

export function removeImagesFromHtml(html) {
  if (!html) return html;
  
  // p 태그 안에 img만 있는 경우 p 태그도 함께 제거
  let cleanHtml = html.replace(/<p[^>]*>\s*<img[^>]*>\s*<\/p>/g, '');
  
  // 남은 img 태그들 제거
  cleanHtml = cleanHtml.replace(/<img[^>]*>/g, '');
  
  return cleanHtml;
}
