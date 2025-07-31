// components/ReviewsList.jsx
import { Star } from "lucide-react";

const ReviewsList = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded-md bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-800">{review.user}</p>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "fill-yellow-400" : "text-gray-300"
                  }`}
                  fill={i < review.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;