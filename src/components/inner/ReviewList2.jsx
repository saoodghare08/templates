import { Star } from "lucide-react";

const ReviewsList = ({ reviews }) => {
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  const renderStars = (count) => (
    <div className="flex text-[#FFD700]"> {/* Gold color for stars */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < count ? "fill-[#FFD700]" : "text-[#D1D5DB] dark:text-[#3A3A3A]"
          }`}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-6 font-merriweather">
      {/* Overall Rating Summary */}
      <div>
        <div className="flex items-center gap-2 mt-2">
          {renderStars(Math.round(averageRating))}
          <span className="text-sm text-[#6E6E73] dark:text-[#B0B0B0]">
            ({totalReviews} reviews)
          </span>
        </div>
        <p className="text-sm text-[#3A3A3A] dark:text-[#CCCCCC] mt-1">
          Average Rating: <strong>{averageRating.toFixed(1)}</strong>/5
        </p>
      </div>

      {/* Highlighted Reviews Grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {reviews.slice(0, 4).map((review, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-[#FFFFFF] dark:bg-[#1E1E1E] border-[#E5E7EB] dark:border-[#2C2C2C]"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-[#1C1C1E] dark:text-[#F4F4F4]">
                {review.user}
              </p>
              {renderStars(review.rating)}
            </div>
            <p className="text-sm text-[#3A3A3A] dark:text-[#CCCCCC]">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
