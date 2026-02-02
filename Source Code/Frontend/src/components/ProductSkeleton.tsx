const ProductSkeleton = () => {
  return (
    <div className="bg-card rounded-xl overflow-hidden">
      <div className="aspect-square shimmer" />
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 shimmer rounded" />
        <div className="h-4 w-full shimmer rounded" />
        <div className="h-4 w-1/2 shimmer rounded" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 w-20 shimmer rounded" />
          <div className="h-8 w-16 shimmer rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
