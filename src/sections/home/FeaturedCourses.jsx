const courses = [
  {
    title: "Mars Colonization 101",
    duration: "12 Hours",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDduzeNhek9KgpGnxO8Y15L4Vml58ogiPbDS32H2Gc7u63y91DvQTAnNs1vFhFkyQ0njmdOCX-Q2vNUhcYLQefdNBeM0YpWMs6EWfZ83-b0OIe64WbEfDYVUgtmh2d_IMyJK3sUzZJ_E_9QAZWVmlzvYMNiykzXd95ZMUy5EBUMAEJazpyCbm4ph2ARXKrW7wAfPHjQkAkl-lvZRCfoe0TDXCf-uTkUG0pWnNqaQjSfxP8_des7OS2QQBe3IlaFd7Wk6KqmAuBCWFA",
  },
  {
    title: "The Milky Way's Heart",
    duration: "8 Hours",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnPwkuRVAYc8mNvsV5KzrI80-r-LzLEoWuoDrbVQUtkEpud1M-A1VJti_DyOGqVYm9eTYv-KOGp6-BMsDB0Bc8lhCGGBL0pneyAQDPqBbV-qhKaXNIBUiPy1PN_Rp4BRYhUa5KKnFnXgZbKcsQp6krgHVAorblpoK88pCzKEv5qtcbmpgHZLdfDjT4maW6rcvGPf3KKNzGRqPJ0q65m6XvwnCSy43Hgdui3GjocNzIzGN8jv2aZGndekZ1momr79tKgSQ5rSrYrCE",
  },
  {
    title: "Quantum Astrophysics",
    duration: "24 Hours",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaA8TeNctXUD5wukp3SfmmbQnfjeoQ5KuF-AH3S6pd1QE8HOsXdyu1_U7satKtsxnUg33E5AHibySFPSbAZT68INfJaELs8a7k6n8Ow8e73FtiOHkQ3wjVXwsx1bKt62b4GIS-ihwP06fnVHQuWHiS_T_jsXJvs3omXr7zUGkEMhi3g-6pDhR0d00DzRs5Ydh6_-ykwvoZ0JErdXXIkpShQh9egjDBmeqiMw3QFhtmDahDtC2rcr-p6FKsKzsqzjgFE5RS6Ov9ESE",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="mt-12 px-6 md:px-0 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Featured Courses</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="group bg-[#141b2b] rounded-xl overflow-hidden border border-white/10 shadow-md cursor-pointer hover:shadow-2xl transition-shadow"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0  from-[#141b2b]/80 to-transparent"></div>
                </div>
                <div className="p-4">
              <h5 className="text-white font-semibold text-sm line-clamp-2 mb-2">
                {course.title}
              </h5>
              <div className="flex items-center gap-2 text-gray-400 text-xs uppercase font-bold tracking-widest">
                <span className="material-symbols-outlined text-[12px]">schedule</span>
                {course.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;