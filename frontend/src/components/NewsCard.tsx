import React from "react";

type NewsCardProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  date?: string;
  author?: string;
};

export default function NewsCard({
  title,
  excerpt,
  imageUrl,
  date,
  author,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          {author && <span>Зохиогч: {author}</span>}
          {date && <span>{date}</span>}
        </div>
      </div>
    </div>
  );
}
