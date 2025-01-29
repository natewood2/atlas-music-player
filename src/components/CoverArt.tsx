import Cover from "/images/cover-art.png";

export default function CoverArt({ src }: { src?: string }) {
  console.log("CoverArt src:", src);
  return (
    <div className="w-full overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={src || Cover} 
        alt="Album cover" 
        className="h-full w-full object-cover"
      />
    </div>
  );
}