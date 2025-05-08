import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  company: string;
  review: string;
  rating: number;
  imageUrl?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  company,
  review,
  rating,
  imageUrl = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="review-card"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-[var(--primary)] fill-[var(--primary)]" : "text-gray-300"}
          />
        ))}
      </div>

      <p className="text-gray-600 italic">{review}</p>
    </motion.div>
  );
};

export default ReviewCard;